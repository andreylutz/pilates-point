import type { StaticImageData } from 'next/image'

export type Trainer = {
  name: string
  role: string
  description: string
  focus: string[]
  img: StaticImageData
}
