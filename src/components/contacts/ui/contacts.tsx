import React, { FC } from 'react'
import styles from './contacts.module.scss'
import Link from 'next/link'
import Instagram from '@icons/instagram.svg'
import VK from '@icons/vk.svg'
import Image from 'next/image'

const Contacts: FC = ({ }) => {
    return (
        <section id='contacts' className='container'>
            <h2 className={styles.title}>Контакты</h2>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <div className={styles.block_title}>Наш адрес:</div>
                    <div className={styles.adress}>г.Речица, ул. Советская д.66, 6 этаж</div>
                    <div className={styles.link_title}>Email:</div>
                    <a className={styles.link} href='mailto:bits.dance.studio@gmail.com' aria-label='email'>bits.dance.studio@gmail.com</a>
                    <div className={styles.link_title}>Номер телефона:</div>
                    <a className={styles.link} href='tel:+375 (29) 319-74-52' aria-label='Номер телефона'>+375 (29) 319-74-52</a>

                    <div className='flex items-center gap-2'>
                        <Link className={styles.social_link} href={'https://www.instagram.com/bits_art_studio?igsh=a24zZnprb2hxczZv'} target='__blank' aria-label='Instagram'>
                            <Instagram />
                        </Link>
                        <Link className={styles.social_link} href={'https://vk.com/bitsdancestudio'} target='__blank' aria-label='VK'>
                            <VK />
                        </Link>
                    </div>
                </div>

                <div className={styles.map_wrapper}>
                    <a aria-label='Карта' href="https://yandex.ru/maps/?um=constructor%3A7028971efdb1fdca7c592a80f74387d01190c079f40097a69c070b26acd81dac&amp;source=constructorStatic" target="_blank">
                        <Image
                            className={styles.map} src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A7028971efdb1fdca7c592a80f74387d01190c079f40097a69c070b26acd81dac&amp;width=650&amp;height=400&amp;lang=ru_RU"
                            alt="Карта"
                            width={650}
                            height={400}
                        />
                    </a>
                    {/* <iframe title='Карта' className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A7028971efdb1fdca7c592a80f74387d01190c079f40097a69c070b26acd81dac&amp;source=constructor" width="650" height="400" frameBorder="0"></iframe> */}
                </div>
            </div>
        </section>
    )
}

export default Contacts