import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "@/utils/routes";
import { classNames } from "@/utils/classNames";
import { Button, GradientText } from "@/shared";
import logo from "@images/bits-logo.webp";
import styles from "./header.module.scss";

interface HeaderProps {
  colored: boolean;
  menuOpen: boolean;
  toggleMenu: () => void;
}

const SOCIALS = [
  {
    label: "IG",
    href: "https://www.instagram.com/bits_dance_studio",
    name: "Instagram",
  },
  {
    label: "VK",
    href: "https://vk.com/bitsdancestudio",
    name: "VK",
  },
];

export const Header: FC<HeaderProps> = ({ colored, menuOpen, toggleMenu }) => {
  const router = useRouter();

  const closeAndNavigate = () => {
    if (menuOpen) toggleMenu();
  };

  const goTo = (path: string) => {
    closeAndNavigate();
    void router.push(path);
  };

  return (
    <>
      <header
        className={classNames(styles.header, {
          [styles.header_scrolled]: colored,
        })}
      >
        <div className={styles.inner}>
          <Link href="/#hero" className={styles.logo} onClick={closeAndNavigate}>
            <Image
              src={logo}
              alt="BIT'S Dance Studio"
              width={44}
              height={44}
              className={styles.logoImage}
              priority
            />
            <span className={styles.logoText}>
              <GradientText gradient="chrome" className={styles.logoTitle}>
                BIT&apos;S
              </GradientText>
              <span className={styles.logoSubtitle}>DANCE STUDIO</span>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Основная навигация">
            {routes.map(({ id, name, route }) => (
              <Link key={id} href={route} className={styles.navLink}>
                {name}
              </Link>
            ))}

            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={styles.social}
                aria-label={s.name}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <Button
              size="sm"
              className={styles.ctaDesktop}
              onClick={() => goTo("/#contacts")}
            >
              Записаться
            </Button>

            <button
              type="button"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
              onClick={toggleMenu}
              className={classNames(styles.burger, {
                [styles.burger_open]: menuOpen,
              })}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <div
        className={classNames(styles.mobileMenu, {
          [styles.mobileMenu_open]: menuOpen,
        })}
        aria-hidden={!menuOpen}
      >
        {routes.map(({ id, name, route }) => (
          <Link
            key={id}
            href={route}
            className={styles.mobileLink}
            onClick={closeAndNavigate}
          >
            <GradientText gradient="chrome">{name}</GradientText>
          </Link>
        ))}

        <div className={styles.mobileSocials}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={styles.mobileSocial}
            >
              {s.name}
            </a>
          ))}
        </div>

        <Button size="lg" onClick={() => goTo("/#contacts")}>
          Записаться
        </Button>
      </div>
    </>
  );
};
