import Link from 'next/link'
import Header from '@/app/components/header'
import Nav from './nav'
import { SocialLink } from '@/app/components/social'
import { Dollar, Mail } from '@/app/icons'
import PageTitle from '../components/page-title'

export default function CollaborateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header hideOnScroll={false} />
      <div className="wrapper my-6">
        <Link href="/" className="text-xl font-light hover:text-teal-400">
          Greg Hunt, Web Developer
        </Link>
        <main>
          <PageTitle className="text-gradient">Work with Me</PageTitle>
          <p className="text-xl font-light">
            I'm always open to collaboration in different forms:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <Nav className="space-y-3" />
            <ul className="space-y-3">
              <SocialLink
                href="mailto:treat-sunlit0b@icloud.com"
                icon={Mail}
                className="w-full"
                showLabel={true}
              >
                Email Me to Discuss
              </SocialLink>
              <SocialLink
                href="/quote"
                icon={Dollar}
                className="w-full"
                showLabel={true}
              >
                Get a Website Quote
              </SocialLink>
            </ul>
          </div>
          <p>Below are some samples of my work and experience.</p>
          {children}
        </main>
      </div>
    </>
  )
}
