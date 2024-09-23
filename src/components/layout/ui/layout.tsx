
import { FC, ReactNode, useEffect, useRef, useState } from 'react'

import styles from './layout.module.scss'
import { Header } from '@/components/header/ui/header'
import { useResize } from '@/utils/useResize'
import { classNames } from '@/utils/classNames'

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [headerColored, setHeaderColored] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const layoutRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div ref={layoutRef} data-open={openMenu} className={styles.layout}
      onScroll={(e) => setHeaderColored((e.target as HTMLDivElement).scrollTop !== 0)}
    >
      <Header colored={headerColored} menuOpen={openMenu} toggleMenu={() => setOpenMenu(!openMenu)}/>
      <main className={styles.main}>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}