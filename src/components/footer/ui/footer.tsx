import React, { FC } from "react";
import Link from "next/link";
import { routes } from "@/utils/routes";
import { GradientText } from "@/shared";
import styles from "./footer.module.scss";

const SOCIALS = [
  {
    label: "IG",
    href: "https://www.instagram.com/bits_art_studio?igsh=a24zZnprb2hxczZv",
  },
  {
    label: "VK",
    href: "https://vk.com/bitsdancestudio",
  },
];

const CONTACT_LINES = [
  "г. Речица, ул. Советская д. 66",
  "+375 (29) 319-74-52",
  "bits.dance.studio@gmail.com",
  "@bits_art_studio",
];

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className={styles.brand}>
              <span className={styles.brandMark}>B</span>
              <span>
                <GradientText gradient="chrome" className={styles.brandTitle}>
                  BIT&apos;S
                </GradientText>
                <span className={styles.brandSub}>DANCE STUDIO</span>
              </span>
            </div>
            <p className={styles.lead}>
              Танцевальная студия в Речице. Открыты для детей от 2,5 лет и
              взрослых любого возраста.
            </p>
            <div className={styles.socials}>
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.social}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>Навигация</p>
            {routes.map((route) => (
              <Link key={route.id} href={route.route} className={styles.navLink}>
                {route.name}
              </Link>
            ))}
          </div>

          <div>
            <p className={styles.colTitle}>Контакты</p>
            {CONTACT_LINES.map((line) => (
              <p key={line} className={styles.contactLine}>
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © 2026 BIT&apos;S Dance Studio · Речица, Беларусь
          </span>
          <span className={styles.tagline}>MOVE · SHINE · BIT&apos;S</span>
        </div>
      </div>
    </footer>
  );
};
