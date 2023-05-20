'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export default function Avatar() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
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
  }, [isVisible])

  return (
    <div
      className={clsx('transition ease-in-out duration-500', {
        'scale-0 translate-y-full': !isVisible,
        'scale-1 translate-0': isVisible,
      })}
    >
      <Image
        src="/greg-hunt-no-bg-shadow.png"
        alt="Greg Hunt"
        className="h-full max-w-full max-h-[600px] w-auto object-contain object-right-bottom"
        width={800}
        height={800}
        priority={true}
      />
    </div>
  )
}
