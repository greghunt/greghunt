'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header({
  hideOnScroll = true,
}: {
  hideOnScroll?: boolean
}) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (hideOnScroll) {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 0 && isVisible) {
          setIsVisible(false)
        } else if (scrollTop === 0 && !isVisible) {
          setIsVisible(true)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isVisible])

  return (
    <header
      className={clsx(
        'fixed bottom-0 md:top-0 md:bottom-auto right-0 md:left-0 md:right-auto z-50 transition ease-in-out duration-500',
        {
          'translate-y-full md:-translate-y-full': hideOnScroll && isVisible,
          'translate-y-0': hideOnScroll && !isVisible,
        }
      )}
    >
      <Link href="/" className="group">
        <Image
          src="https://img.ghunt.io/greghunt.jpeg?w=400&h=400&fm=webp"
          alt="Greg Hunt"
          className="rounded-full w-20 h-20 m-6 ring ring-white/50 group-hover:ring-teal-400 transition"
          width={200}
          height={200}
          priority
        />
      </Link>
    </header>
  )
}
