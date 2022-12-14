import Head from 'next/head'
import { Container } from '@/components/Container'
import { SocialList, SocialLink, MailIcon } from '@/components/SocialIcons'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Greg Hunt</title>
        <meta
          name="description"
          content="I’m Greg Hunt. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src="https://img.ghunt.io/cosmic-greg.png?w=800&h=800&fm=webp"
                alt="Cosmic Greg Hunt"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Greg Hunt. I live in Montreal, Canada, where I build things
              for the web.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved creating things for as long as I can remember, but as
                a kid this came out mostly in the form of writing. I{' '}
                <em>loved</em> information and would go through a process of
                reading, and re-writing what I've learned so I could organize
                things in my head. That process of organizing information is
                probably what I like most about developing websites in general
                to this day.
              </p>
              <p>
                You would think I grew up as a computer geek considering that's
                basically my profession, but in fact I <em>hated</em> being
                inside, and didn't really like using gadgets. I prefered nature
                and sports and exploring. I just so happened to fall into the
                world of computers when I was asked as a teenager to learn
                Photoshop and make some extra cash designing ads for my dad's
                advertising business.
              </p>
              <p>
                I may not have liked computers inherently, but I loved that I
                was able to create stuff with them and organize information in
                beautiful and creative ways. And so that's what drove my passion
                to become the best web developer I could be. Because that
                allowed me to create as much as possible on a platform that
                would become ubiquitous.
              </p>
              <p>
                I've spent most of my professional life developing websites and
                web apps and as the CTO of a WordPress web agency. Most
                recently, I've moved on from exclusively customer projects to
                build software products I think the general public can find use
                for. Nothing makes me happier than building stuff people will
                actually use and somehow make their lives a little bit better.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <SocialList className="flex flex-col gap-y-4" showLabel={true} />
            <SocialLink
              href="mailto:treat-sunlit0b@icloud.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              showLabel={true}
            >
              Email
            </SocialLink>
          </div>
        </div>
      </Container>
    </>
  )
}
