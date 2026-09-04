import { images } from '@/shared/assets/images'
import type { Program } from './types'

export const programs: Program[] = [
  {
    title: 'Pilates Mat',
    text: 'Тренировка на коврике с использованием веса собственного тела и малого оборудования.',
    img: images.class1,
  },
  {
    title: 'Pilates Reformer',
    text: 'Тренировки на специальном оборудовании для глубокой проработки мышц.',
    img: images.class2,
  },
  {
    title: 'МФР + Stretch',
    text: 'Мягкая работа с мышцами и мобильностью суставов.',
    img: images.class3,
  },
  {
    title: 'Йога для спины',
    text: 'Практика йоги, сочетающая динамику и статику для здоровья позвоночника.',
    img: images.class4,
  },
]
