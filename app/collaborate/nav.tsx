'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

interface NavItem {
  label: string
  href?: string
}

const nav: NavItem[] = [
  //   {
  //     label: 'Partnerships',
  //   },
  //   {
  //     label: 'Consulting',
  //   },
  {
    href: '/collaborate/work',
    label: "Places I've worked",
  },
  {
    href: '/collaborate/open-source',
    label: 'Open Source',
  },
  {
    href: '/collaborate/project',
    label: 'Personal Projects',
  },
  {
    href: '/collaborate/charity',
    label: 'Charity',
  },
]

export default function Nav({ ...props }) {
  const pathname = usePathname()

  return (
    <ul {...props}>
      {nav.map((item) => {
        const isActive = item?.href ? pathname.startsWith(item.href) : false
        return (
          <li>
            {item.href ? (
              <Link
                href={item.href}
                className={clsx('hover:text-teal-300', {
                  'font-bold text-teal-400': isActive,
                })}
              >
                {item.label}
              </Link>
            ) : (
              item.label
            )}
          </li>
        )
      })}
    </ul>
  )
}
