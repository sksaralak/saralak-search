import { Link } from 'react-router-dom'

type CTAButtonProps = {
  children: string
  to: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  onClick?: () => void
}

export default function CTAButton({
  children,
  to,
  variant = 'primary',
  className = '',
  onClick,
}: CTAButtonProps) {
  const styles = {
    primary:
      'bg-teal-900 text-white hover:bg-teal-800 border-teal-900 shadow-sm shadow-teal-950/10',
    secondary:
      'bg-white text-teal-950 hover:bg-teal-50 border-teal-200 shadow-sm shadow-teal-950/5',
    ghost: 'bg-transparent text-teal-950 hover:bg-teal-50 border-transparent',
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2.5 text-center text-sm font-semibold leading-6 transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
