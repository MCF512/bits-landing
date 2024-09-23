import React, { FC } from 'react'
import styles from './about.module.scss'
import Image from 'next/image'
import aboutImage from '@images/about.jpeg'

interface AboutProps {

}

export const About: FC<AboutProps> = ({ }) => {
    return (
        <section id='about' className={styles.wrapper}>
            <div className='container'>
                <h2 className={styles.title}>О нас</h2>
                <h3 className={styles.subtitle}><span>BIT’S</span> - это твой танцевальный мир</h3>


                <div className={styles.flex}>
                    <div className={styles.goal}>ЦЕЛЬ</div>
                    <div className={styles.text}>
                        Наша цель - научить выражать свои эмоции с помощью танца, раскрыть внутренний потенциал. Помочь сделать ваше тело гибким и сильным. Создать пространство для детей и взрослых, объединение идеей развития и сохранения здорового, счастливого и танцевального общества
                    </div>
                    {/* <div className={styles.image_wrapper}> */}
                    {/* <Image className={styles.image} width={400} src={aboutImage} alt=''/> */}
                    {/* </div> */}
                </div>

            </div>
        </section>
    )
}