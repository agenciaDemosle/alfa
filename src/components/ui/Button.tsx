import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils/cn'
import { trackNavClick } from '@/lib/utils/tracking'

interface ButtonProps {
  to: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  trackLabel?: string
  trackLocation?: string
}

export default function Button({
  to,
  children,
  variant = 'primary',
  className,
  trackLabel,
  trackLocation,
}: ButtonProps) {
  const handleClick = () => {
    if (trackLabel && trackLocation) {
      trackNavClick(trackLabel, trackLocation)
    }
  }

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors',
        variant === 'primary' &&
          'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' &&
          'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
        className
      )}
    >
      {children}
    </Link>
  )
}
