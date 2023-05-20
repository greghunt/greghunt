import type { ChildElement } from '@/app/types'
import clsx from 'clsx'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'] })

function toTitleCase(str: React.ReactNode) {
  if (!str) return ''
  return str
    .toString()
    .toLowerCase()
    .replace(/\b\w/g, (s) => s.toUpperCase())
}

export default function PageTitle({
  className,
  children,
  ...rest
}: ChildElement) {
  return (
    <h1
      className={clsx(
        `${oswald.className} uppercase text-5xl font-bold tracking-tighter`,
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  )
}
