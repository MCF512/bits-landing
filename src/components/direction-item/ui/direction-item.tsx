import React, { FC } from 'react'
import styles from './direction-item.module.scss'
import Image, { StaticImageData } from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

interface DirectionItemProps {
  image: string | StaticImageData
  name: string
  description: string
}

export const DirectionItem: FC<DirectionItemProps> = ({ image, name, description }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className={styles.card}>
          <Image className={styles.image} src={image} alt='' />
          <div className={styles.name}>{name}</div>
        </div>
      </DialogTrigger>

      <DialogContent className='text-white'>
        {description}
      </DialogContent>
    </Dialog>
  )
}