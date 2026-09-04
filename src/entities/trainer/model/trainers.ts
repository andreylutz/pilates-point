import { images } from '@/shared/assets/images'
import type { Trainer } from './types'

export const trainers: Trainer[] = [
  {
    name: 'Наталья Шелковникова',
    role: 'Основатель студии, тренер по пилатесу',
    img: images.trainer1,
  },
  {
    name: 'Елизавета Князева',
    role: 'Тренер по йоге и растяжке',
    img: images.trainer2,
  },
  {
    name: 'Мария Соколова',
    role: 'Pilates Reformer, МФР и Stretch',
    img: images.trainer3,
  },
  {
    name: 'Анна Петрова',
    role: 'Pilates Mat, функциональные тренировки',
    img: images.trainer4,
  },
]
