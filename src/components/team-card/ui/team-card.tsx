import React, { FC } from 'react'
import styles from './team-card.module.scss'
// import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import snezha from '@images/snezha.jpg'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Mentor } from '@/types'

interface TeamCardProps extends Mentor {
    // name: string
    // description: string
    // image_url: string
}

export const TeamCard: FC<TeamCardProps> = ({ name, surname, about, image }) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger className={styles.trigger}>

                    <div className={styles.image_wrapper}>
                        <Image height={300} className={styles.image} src={image} alt='' />
                    </div>

                    <div className={styles.name}>
                        {surname + ' ' + name}
                    </div>
                </DialogTrigger>

                <DialogContent className='text-white'>
                    <DialogTitle>
                        {surname + ' ' + name}
                    </DialogTitle>
                    <DialogDescription>
                        {about}
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    )
}