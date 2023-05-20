import Link from 'next/link'
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  href?: string
  as?: string
  className?: string
}

const defaultClass =
  'inline-flex items-center justify-center text-center border-2 border-teal-300 text-white font-semibold py-3 px-6 rounded bg-teal-900/50 backdrop-blur-lg bg-teal-900/20 hover:text-teal-200 hover:border-teal-200 hover:scale-105 transition'

const Button: FC<
  ButtonProps & ButtonHTMLAttributes<{}> & AnchorHTMLAttributes<{}>
> = ({ href, as, children, className, ...props }) => {
  const combinedClass = clsx(defaultClass, className)

  if (href) {
    return (
      <Link href={href} as={as} {...props} className={combinedClass}>
        {children}
      </Link>
    )
  }

  return (
    <button {...props} className={combinedClass}>
      {children}
    </button>
  )
}

export default Button
