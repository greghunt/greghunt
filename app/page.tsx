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
          <div className="w-1/2 absolute left-8 md:left-auto md:right-8 bottom-0 z-20 flex md:justify-end">
            <Image
              src="/greg-hunt-no-bg-shadow.png"
              alt="Greg Hunt"
              className="h-full max-w-full max-h-[600px] w-auto object-contain object-right-bottom"
              width={800}
              height={800}
              priority={true}
            />
          </div>
          <div className="h-full flex flex-col">
            <div className="flex-1 relative">
              <Image
                src="/nature-technology-laptop.jpg"
                width={1868}
                height={1000}
                placeholder="blur"
                blurDataURL="/nature-technology-laptop-blur.jpg"
                alt="Laptop with view of forest"
                className="absolute inset-0 object-cover z-0 h-full w-auto max-w-screen-xl opacity-80"
                priority={true}
              />
              <div className="wrapper relative z-30 md:z-10 h-full">
                <div className="md:w-1/2 h-full flex flex-col items-center justify-center">
                  <div className="py-20 md:py-0">
                    <h1 className="text-5xl font-bold">Greg Hunt, Developer</h1>
                    <p className="text-xl font-light">
                      I’m a software developer and entrepreneur based in
                      Montreal. I build things for the web from start to finish.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-1 mt-8 md:mt-6 place-content-start">
                      <div>
                        <ul className="flex flex-wrap gap-4">
                          <SocialList showLabel={false} />
                          <SocialLink
                            href="mailto:treat-sunlit0b@icloud.com"
                            icon={MailIcon}
                            className="w-full"
                            showLabel={true}
                          >
                            Email
                          </SocialLink>
                        </ul>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:my-6">
                        <Link href="/collaborate">
                          <Button className="w-full h-full">
                            Work with Me
                          </Button>
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
