import React, { FC } from "react";
import Image from "next/image";
import { GradientText, SectionLabel } from "@/shared";
import styles from "./contacts.module.scss";

const CONTACT_ROWS = [
  {
    label: "Адрес",
    value: "г. Речица, ул. Советская д. 66, 6 этаж",
  },
  {
    label: "Телефон",
    value: "+375 (29) 319-74-52",
    href: "tel:+375293197452",
  },
  {
    label: "Email",
    value: "bits.dance.studio@gmail.com",
    href: "mailto:bits.dance.studio@gmail.com",
  },
  {
    label: "Instagram",
    value: "@bits_dance_studio",
    href: "https://www.instagram.com/bits_dance_studio",
  },
  {
    label: "VK",
    value: "bitsdancestudio",
    href: "https://vk.com/bitsdancestudio",
  },
];

const MAP_URL =
  "https://yandex.ru/maps/?um=constructor%3A7028971efdb1fdca7c592a80f74387d01190c079f40097a69c070b26acd81dac&source=constructorStatic";
const MAP_IMAGE =
  "https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A7028971efdb1fdca7c592a80f74387d01190c079f40097a69c070b26acd81dac&width=650&height=400&lang=ru_RU";

const Contacts: FC = () => {
  return (
    <section id="contacts" className={styles.section}>
      <div className={styles.inner}>
        <SectionLabel>Контакты</SectionLabel>
        <h2 className={styles.title}>
          <GradientText gradient="chrome">Приходи </GradientText>
          <span className={styles.titleAccent}>танцевать</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.info}>
            {CONTACT_ROWS.map((row) => (
              <div key={row.label} className={styles.row}>
                <span className={styles.rowLabel}>{row.label}</span>
                {row.href ? (
                  <a
                    href={row.href}
                    className={styles.rowValue}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      row.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    <GradientText gradient="chrome">{row.value}</GradientText>
                  </a>
                ) : (
                  <span className={styles.rowValue}>
                    <GradientText gradient="chrome">{row.value}</GradientText>
                  </span>
                )}
              </div>
            ))}
          </div>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className={styles.map}
            aria-label="Открыть карту"
          >
            <Image
              src={MAP_IMAGE}
              alt="Карта студии BIT'S"
              width={650}
              height={400}
              className={styles.mapImage}
            />
            <span className={styles.mapOverlay}>
              <GradientText gradient="chrome" className={styles.mapTitle}>
                Речица, ул. Советская 66
              </GradientText>
              <span className={styles.mapSub}>6 этаж</span>
              <GradientText gradient="lm" className={styles.mapLink}>
                Открыть в картах →
              </GradientText>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
