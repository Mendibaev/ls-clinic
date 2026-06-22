import { Loader2 } from 'lucide-react'

export default function PrimaryButton({
  children,
  onClick,
  type = 'button',
  size = 'default',
  disabled = false,
  loading = false,
  className = '',
  ...rest
}) {
  const sizeClasses =
    size === 'sm'
      ? 'px-4 py-2 text-sm'
      : 'px-6 py-3 text-[15px]'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight',
        'bg-amber text-white transition-colors duration-150',
        'hover:bg-amber-deep active:bg-amber-deep',
        'disabled:bg-line disabled:text-muted disabled:cursor-not-allowed',
        sizeClasses,
        className,
      ].join(' ')}
      {...rest}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  )
}
