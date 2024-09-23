import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './header.module.scss'
import logo from '@images/bits-logo.png'
import Image from 'next/image'
import { routes } from '@/utils/routes'
import Link from 'next/link'
import Instagram from '@icons/instagram.svg'
import VK from '@icons/vk.svg'
import { classNames } from '@/utils/classNames'


interface HeaderProps {
    colored: boolean
    menuOpen: boolean
    toggleMenu: () => void
}

export const Header: FC<HeaderProps> = ({ colored, menuOpen, toggleMenu }) => {
    // const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={classNames(styles.header, { [styles.header_colored]: colored || menuOpen })}>
            <div className={classNames('container', {}, [styles.container])}>
                <div className={styles.wrapper}>
                    <Image src={logo} width={80} height={80} alt='logo' />

                    <div className={classNames(styles.navbar, { [styles.navbar_open]: menuOpen })}>
                        <div className={styles.links}>
                            {routes.map(({ name, route, id }) => {
                                return <Link onClick={toggleMenu} className={styles.link} key={id} href={route}>{name}</Link>
                            })}
                        </div>

                        <div className={styles.social_links}>
                            <Link className={styles.social_link} href={'https://www.instagram.com/bits_art_studio?igsh=a24zZnprb2hxczZv'} target='__blank'>
                                <Instagram />
                            </Link>
                            <Link className={styles.social_link} href={'https://vk.com/bitsdancestudio'} target='__blank'>
                                <VK />
                            </Link>
                        </div>
                    </div>

                    <button onClick={toggleMenu} className={classNames(styles.burger, { [styles.burger_open]: menuOpen })}>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}