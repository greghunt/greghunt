import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  const buttonClasses = clsx(
    'border-2 border-teal-300 text-white font-semibold py-3 px-6 rounded bg-teal-900/10 backdrop-blur-sm hover:backdrop-blur-lg hover:bg-teal-900/20 hover:text-teal-200 hover:border-teal-200 hover:scale-105 transition',
    className
  )

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  )
}

export default Button
