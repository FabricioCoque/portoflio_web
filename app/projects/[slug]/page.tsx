import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudy } from '@/components/portfolio/case-study'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { SiteHeader } from '@/components/portfolio/site-header'
import { dictionaries } from '@/lib/i18n'
import { PROJECT_COUNT, projectIndexFromSlug, projectSlug } from '@/lib/projects'
import { site } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return Array.from({ length: PROJECT_COUNT }, (_, i) => ({ slug: projectSlug(i) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const index = projectIndexFromSlug(slug)
  if (index === null) return {}
  const project = dictionaries.en.projects.items[index]
  return {
    title: `${project.title} — Case Study | ${site.name}`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const index = projectIndexFromSlug(slug)
  if (index === null) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudy index={index} />
      </main>
      <SiteFooter />
    </>
  )
}
