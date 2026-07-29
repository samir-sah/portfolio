import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { TechStack } from '@/components/sections/tech-stack'
import { Achievements } from '@/components/sections/achievements'
import { GitHubSection } from '@/components/sections/github'
import { Resume } from '@/components/sections/resume'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Achievements />
        <GitHubSection />
        <Resume />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
