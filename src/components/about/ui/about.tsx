import React, { FC } from 'react'
import styles from './about.module.scss'
import Image from 'next/image'
import aboutImage from '@images/about-bg.png'

interface AboutProps {

}

export const About: FC<AboutProps> = ({ }) => {
    return (
        <section id='about' className={styles.wrapper}>
            <Image
                src={aboutImage}
                alt='О студии'
                loading='lazy'
                fill={true}
                objectFit='cover'
                objectPosition='center center'
                className='absolute'
            />
            <div className='container  z-10'>
                <h2 className={styles.title}>О нас</h2>
                <h3 className={styles.subtitle}><span>BIT’S</span> - это твой танцевальный мир</h3>

                <div className={styles.flex}>
                    <div className={styles.goal}>ЦЕЛЬ</div>
                    <div className={styles.text}>
                        Наша цель - научить выражать свои эмоции с помощью танца, раскрыть внутренний потенциал. Помочь сделать ваше тело гибким и сильным. Создать пространство для детей и взрослых, объединение идеей развития и сохранения здорового, счастливого и танцевального общества
                    </div>
                </div>

            </div>
        </section>
    )
}