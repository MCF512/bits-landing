import React, { FC } from 'react'
import styles from './direction-item.module.scss'
import Image, { StaticImageData } from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import * as Portal from '@radix-ui/react-portal'

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
          {/* <div className={styles.name}>{name}</div> */}
        </div>
      </DialogTrigger>

      <DialogContent className='text-white'>
        {description}
      </DialogContent>

      <Portal.Root className='invisible absolute top-0 left-[-2000px]'>
        <h2>
          {name}
        </h2>
        <p>
          {description}
        </p>
      </Portal.Root>
    </Dialog>
  )
}