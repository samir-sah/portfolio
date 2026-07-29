'use client'

import useSWR from 'swr'
import { Star, GitFork, ArrowUpRight, GitCommit } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'
import { siteConfig } from '@/lib/data'

const fetcher = (url) => fetch(url).then((res) => res.json())

function contributionColor(count) {
  if (!count) return 'bg-border/60'
  if (count < 3) return 'bg-primary/30'
  if (count < 6) return 'bg-primary/55'
  if (count < 10) return 'bg-primary/80'
  return 'bg-primary'
}

function ContributionGraph({ contributions }) {
  if (!contributions?.length) return null
  const weeks = []
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7))
  }
  return (
    <div aria-label="GitHub contribution activity over the last six months" role="img">
      <div className="flex gap-[3px] overflow-hidden">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex min-w-0 flex-1 flex-col gap-[3px]">
            {week.map((day) => (
              <div
                key={day.date}
                className={`contrib-cell ${contributionColor(day.count)}`}
                title={`${day.count} contributions on ${day.date}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
        <span>Less</span>
        {['bg-border/60', 'bg-primary/30', 'bg-primary/55', 'bg-primary/80', 'bg-primary'].map(
          (c) => (
            <span key={c} className={`h-2.5 w-2.5 rounded-[2px] ${c}`} />
          )
        )}
        <span>More</span>
      </div>
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-border bg-background p-5 text-center transition-colors duration-300 hover:border-primary/40">
      <p className="font-serif text-3xl font-medium text-foreground">{value ?? '—'}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
    </div>
  )
}

function relativeTime(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

export function GitHubSection() {
  const { data, isLoading } = useSWR('/api/github', fetcher, {
    revalidateOnFocus: false,
  })

  return (
    <section id="github" className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-8">
        <SectionHeading
          index="06"
          label="GitHub"
          title="Open Source Activity"
          description={`Live activity from @${siteConfig.githubUsername}, updated automatically.`}
        />

        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-busy="true">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-24 animate-pulse rounded-xl border border-border bg-background" />
            ))}
            <span className="sr-only">Loading GitHub activity</span>
          </div>
        ) : (
          <>
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StaggerItem>
                <StatCard label="Repositories" value={data?.stats?.publicRepos} />
              </StaggerItem>
              <StaggerItem>
                <StatCard label="Contributions / Yr" value={data?.stats?.totalContributions} />
              </StaggerItem>
              <StaggerItem>
                <StatCard label="Stars Earned" value={data?.stats?.totalStars} />
              </StaggerItem>
              <StaggerItem>
                <StatCard label="Followers" value={data?.stats?.followers} />
              </StaggerItem>
            </Stagger>

            {data?.contributions?.length > 0 && (
              <Reveal className="mt-10">
                <div className="rounded-xl border border-border bg-background p-6">
                  <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Contribution Activity
                  </h3>
                  <ContributionGraph contributions={data.contributions} />
                </div>
              </Reveal>
            )}

            <div className="mt-10 grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <Reveal>
                  <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Repositories
                  </h3>
                </Reveal>
                {data?.topRepos?.length > 0 ? (
                  <Stagger className="grid gap-3 sm:grid-cols-2">
                    {data.topRepos.map((repo) => (
                      <StaggerItem key={repo.name}>
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-full flex-col rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-sm font-medium text-foreground">{repo.name}</span>
                            <ArrowUpRight
                              size={14}
                              className="shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                            />
                          </div>
                          {repo.description && (
                            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                              {repo.description}
                            </p>
                          )}
                          <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-muted-foreground">
                            {repo.language && (
                              <span className="inline-flex items-center gap-1.5">
                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold" />
                                {repo.language}
                              </span>
                            )}
                            <span className="inline-flex items-center gap-1">
                              <Star size={12} aria-hidden="true" /> {repo.stars}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <GitFork size={12} aria-hidden="true" /> {repo.forks}
                            </span>
                          </div>
                        </a>
                      </StaggerItem>
                    ))}
                  </Stagger>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Repositories will appear here automatically.
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-10 lg:col-span-2">
                {data?.languages?.length > 0 && (
                  <Reveal>
                    <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Language Usage
                    </h3>
                    <div className="flex flex-col gap-3 rounded-xl border border-border bg-background p-5">
                      {data.languages.map((lang) => (
                        <div key={lang.name}>
                          <div className="mb-1.5 flex items-center justify-between text-xs">
                            <span className="text-foreground">{lang.name}</span>
                            <span className="text-muted-foreground">{lang.percent}%</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-primary transition-all duration-1000"
                              style={{ width: `${lang.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                )}

                {data?.recentCommits?.length > 0 && (
                  <Reveal delay={0.1}>
                    <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Recent Commits
                    </h3>
                    <ul className="flex flex-col gap-1 rounded-xl border border-border bg-background p-3">
                      {data.recentCommits.map((commit, i) => (
                        <li key={`${commit.url}-${i}`}>
                          <a
                            href={commit.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                          >
                            <GitCommit size={14} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                            <span className="min-w-0">
                              <span className="block truncate text-xs text-foreground">
                                {commit.message}
                              </span>
                              <span className="mt-0.5 block text-[11px] text-muted-foreground">
                                {commit.repo} · {relativeTime(commit.date)}
                              </span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}
              </div>
            </div>

            <Reveal className="mt-12" delay={0.1}>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
              >
                View full profile on GitHub
                <ArrowUpRight size={15} />
              </a>
            </Reveal>
          </>
        )}
      </div>
    </section>
  )
}
