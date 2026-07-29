import { siteConfig } from '@/lib/data'

const USERNAME = siteConfig.githubUsername
const REVALIDATE = 3600

async function fetchJson(url, fallback) {
  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: REVALIDATE },
    })
    if (!res.ok) return fallback
    return await res.json()
  } catch {
    return fallback
  }
}

export async function GET() {
  const [profile, repos, events, contributions] = await Promise.all([
    fetchJson(`https://api.github.com/users/${USERNAME}`, null),
    fetchJson(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`,
      []
    ),
    fetchJson(`https://api.github.com/users/${USERNAME}/events/public?per_page=30`, []),
    fetchJson(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`, null),
  ])

  // Aggregate language usage across repos
  const languageCounts = {}
  for (const repo of repos) {
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1
    }
  }
  const totalWithLanguage = Object.values(languageCounts).reduce((a, b) => a + b, 0) || 1
  const languages = Object.entries(languageCounts)
    .map(([name, count]) => ({
      name,
      count,
      percent: Math.round((count / totalWithLanguage) * 100),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)

  // Stats
  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
  const stats = {
    publicRepos: profile?.public_repos ?? repos.length,
    followers: profile?.followers ?? 0,
    following: profile?.following ?? 0,
    totalStars,
    totalContributions: contributions?.total?.lastYear ?? null,
  }

  // Top repositories (by recency, then stars)
  const topRepos = [...repos]
    .filter((r) => !r.fork)
    .sort(
      (a, b) =>
        (b.stargazers_count || 0) - (a.stargazers_count || 0) ||
        new Date(b.pushed_at) - new Date(a.pushed_at)
    )
    .slice(0, 6)
    .map((r) => ({
      name: r.name,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      url: r.html_url,
      updatedAt: r.pushed_at,
    }))

  // Recent commits from push events
  const recentCommits = []
  for (const event of events) {
    if (event.type !== 'PushEvent' || !event.payload?.commits) continue
    for (const commit of event.payload.commits) {
      recentCommits.push({
        message: commit.message?.split('\n')[0] ?? '',
        repo: event.repo?.name?.replace(`${USERNAME}/`, '') ?? '',
        date: event.created_at,
        url: `https://github.com/${event.repo?.name}/commit/${commit.sha}`,
      })
      if (recentCommits.length >= 6) break
    }
    if (recentCommits.length >= 6) break
  }

  // Contribution weeks (last ~26 weeks for a compact graph)
  const days = contributions?.contributions ?? []
  const recentDays = days.slice(-7 * 26)

  return Response.json(
    {
      profile: profile
        ? {
            name: profile.name,
            avatar: profile.avatar_url,
            bio: profile.bio,
            url: profile.html_url,
          }
        : null,
      stats,
      languages,
      topRepos,
      recentCommits,
      contributions: recentDays,
    },
    {
      headers: {
        'Cache-Control': `public, s-maxage=${REVALIDATE}, stale-while-revalidate=86400`,
      },
    }
  )
}
