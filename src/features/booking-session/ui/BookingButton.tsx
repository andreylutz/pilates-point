import { UiButton } from '@/shared/ui/button'

type BookingButtonProps = {
  label: string
  className?: string
  href: string
}

export default function BookingButton({ label, className, href }: BookingButtonProps) {
  return (
    <UiButton className={className} href={href}>
      {label} <span>›</span>
    </UiButton>
  )
}
