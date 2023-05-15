import Image from 'next/image'
import Link from 'next/link'
import { getPosts } from '@/app/lib/content'
import Posts from '@/app/components/posts'
import { SocialList, SocialLink, MailIcon } from '@/app/components/SocialIcons'
import Button from '@/app/components/button'
import Header from '@/app/components/header'
import { Newsletter } from '@/app/components/newsletter'

export default async function Home() {
  const posts = await getPosts({})

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-teal-700 to-dark relative overflow-hidden">
        <div className="h-screen md:h-[80vh] relative">
          <div className="w-3/4 md:w-1/2 absolute -right-8 md:right-8 bottom-0 z-20">
            <Image
              src="/greg-hunt-no-bg-shadow.png"
              alt="Greg Hunt"
              className="h-full max-w-full w-auto object-contain object-bottom"
              width={1200}
              height={1200}
            />
          </div>
          <div className="h-full flex flex-col">
            <div className="flex-1 relative">
              <Image
                src="/nature-technology-laptop.jpg"
                width={3353}
                height={1795}
                alt="Laptop with view of forest"
                className="absolute inset-0 object-cover z-0 bottom-0 h-full w-auto max-w-screen-xl opacity-80"
                priority={true}
              />
              <div className="wrapper relative z-30 md:z-10 h-full">
                <div className="md:w-1/2 h-full flex flex-col items-center md:justify-center">
                  <div className="py-20 md:py-0">
                    <h1 className="text-5xl font-bold">Greg Hunt, Developer</h1>
                    <p className="text-xl font-light">
                      I’m a software developer and entrepreneur based in
                      Montreal. I build things for the web from start to finish.
                    </p>
                    <div className="my-12">
                      <SocialList className="flex gap-x-4" showLabel={false} />
                      <SocialLink
                        href="mailto:treat-sunlit0b@icloud.com"
                        icon={MailIcon}
                        className="mt-4"
                        showLabel={true}
                      >
                        Email
                      </SocialLink>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-12">
                      <Link href="/collaborate">
                        <Button className="w-full h-full">Work with Me</Button>
                      </Link>
                      <a href="https://www.buymeacoffee.com/greghunt">
                        <Button className="w-full">
                          Buy me a coffee if you'd like to support 😊
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#posts"
              className="block bg-teal-400 text-dark w-full py-6 z-10 text-right md:text-left font-bold uppercase"
            >
              <span className="block wrapper">Discover my work ⬇</span>
            </a>
          </div>
        </div>
      </div>
      <main id="posts">
        <div className="wrapper">
          {/* <Newslettercon /> */}

          <Posts posts={posts} />
        </div>
      </main>
    </>
  )
}
