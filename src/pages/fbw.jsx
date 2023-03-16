import Head from 'next/head'
import { Container } from '@/components/Container'
import {
  SocialLink,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import FBWLogo from '@/components/FBWLogo'

export default function About() {
  return (
    <>
      <Head>
        <title>Fresh Brewed Web</title>
        <meta
          name="description"
          content="Fresh Brewed Web is a web development company ran by Greg Hunt."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:grid-rows-[auto_1fr] sm:gap-y-12">
          <div className="sm:order-first sm:row-span-2">
            <FBWLogo className="h-32 max-w-full text-white" />
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              is my web development company.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Fresh Brewed Web Inc. is the legal entity under which I provide
                products and services. I've been running it since 2015.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end lg:pl-20">
            <img
              src="https://hunt.imgix.net/fresh-brewed-web-icon.png?w=800&h=800&fm=webp"
              alt="Cosmic Greg Hunt"
              className="mb-12 block h-40 w-40 rounded-full"
            />

            <ul className="flex flex-col gap-y-4">
              <SocialLink
                href="https://www.facebook.com/FreshBrewedWebMTL/"
                icon={FacebookIcon}
                showLabel={true}
              >
                Follow on Facebook
              </SocialLink>
              <SocialLink
                href="https://twitter.com/freshbreweddev"
                icon={TwitterIcon}
                showLabel={true}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/fresh-brewed-web/"
                icon={LinkedInIcon}
                showLabel={true}
              >
                Follow on LinkedIn
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
