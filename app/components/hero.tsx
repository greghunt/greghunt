// 'use client'
import Image from 'next/image'
import { SocialList, SocialLink } from '@/app/components/social'
import { Mail } from '@/app/icons'
import Button from '@/app/components/button'
import PageTitle from '@/app/components/page-title'
import Avatar from '@/app/components/avatar'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-teal-700 to-dark relative overflow-hidden">
      <div className="h-screen md:h-[70vh] relative">
        <div className="w-1/2 absolute left-8 md:left-auto md:right-8 bottom-0 z-20 flex md:justify-end">
          <Avatar />
        </div>
        <div className="h-full flex flex-col">
          <div className="flex-1 relative">
            <Image
              src="/nature-technology-laptop-2.jpg"
              width={1536}
              height={768}
              placeholder="blur"
              blurDataURL="/nature-technology-laptop-blur.jpg"
              alt="Laptop with view of forest"
              className="absolute inset-0 object-cover z-0 h-full w-auto opacity-70"
              priority={true}
            />
            <div className="wrapper relative z-30 h-full">
              <div className="md:w-1/2 h-full flex flex-col items-center md:justify-center">
                <div className="py-20 md:py-0">
                  <div className="mix-blend-screen">
                    <PageTitle className="text-gradient drop-shadow-lg text-7xl">
                      <span className="whitespace-nowrap">Greg Hunt</span>,{' '}
                      <span className="whitespace-nowrap">Web Developer</span>
                    </PageTitle>
                  </div>
                  <p className="text-xl font-light">
                    I’m a software developer and entrepreneur based in Montreal.
                    I build things for the web from start to finish.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-1 mt-8 md:mt-6 place-content-start">
                    <div>
                      <ul className="flex flex-wrap gap-4">
                        <SocialList showLabel={false} />
                        <SocialLink
                          href="mailto:treat-sunlit0b@icloud.com"
                          icon={Mail}
                          className="w-full"
                          showLabel={true}
                        >
                          Email
                        </SocialLink>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:my-6">
                      <Button href="/collaborate" className="w-full h-full">
                        Work with Me
                      </Button>
                      <Button
                        href="https://www.buymeacoffee.com/greghunt"
                        className="w-full"
                      >
                        Buy me a coffee if you'd like to support 😊
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#posts"
          className="block absolute bottom-0 inset-x-0 bg-teal-50/10 backdrop-blur-sm text-white w-full py-6 z-10 text-right md:text-left font-bold uppercase border-t-4 border-dark/50 shadow"
        >
          <span className="block wrapper">Discover my work ⬇</span>
        </a>
      </div>
    </div>
  )
}
