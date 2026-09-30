import { About } from '@/components/portfolio/about'
import { Expertise } from '@/components/portfolio/expertise'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { SiteHeader } from '@/components/portfolio/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <About />
      </main>
      <SiteFooter />
    </>
  )
}
