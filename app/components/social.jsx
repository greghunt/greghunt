import Link from 'next/link'
import clsx from 'clsx'
import { Facebook, Twitter, Instagram, GitHub, LinkedIn } from '@/app/icons'

export function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  showLabel,
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-teal-100 transition hover:text-teal-500 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6" />
        <span className={clsx({ 'sr-only': !showLabel, 'ml-4': showLabel })}>
          {children}
        </span>
      </Link>
    </li>
  )
}

export function SocialList(props) {
  return (
    <>
      <SocialLink
        href="https://www.facebook.com/FreshBrewedWebMTL/"
        icon={Facebook}
        showLabel={props.showLabel}
      >
        Follow on Facebook
      </SocialLink>
      <SocialLink
        href="https://twitter.com/freshbreweddev"
        icon={Twitter}
        showLabel={props.showLabel}
      >
        Follow on Twitter
      </SocialLink>
      <SocialLink
        href="https://instagram.com/gregandboo"
        icon={Instagram}
        showLabel={props.showLabel}
      >
        Follow on Instagram
      </SocialLink>
      <SocialLink
        href="https://github.com/greghunt"
        icon={GitHub}
        showLabel={props.showLabel}
      >
        Follow on GitHub
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/greghunt/"
        icon={LinkedIn}
        showLabel={props.showLabel}
      >
        Follow on LinkedIn
      </SocialLink>
    </>
  )
}
