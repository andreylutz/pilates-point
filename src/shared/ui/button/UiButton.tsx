import type { AnchorHTMLAttributes, ReactNode } from 'react'

type UiButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

export default function UiButton({ children, ...props }: UiButtonProps) {
  return <a {...props}>{children}</a>
}
