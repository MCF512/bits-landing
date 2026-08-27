import React, { FC, FormEvent, useState } from "react";
import Image from "next/image";
import { Button, GradientText, SectionLabel } from "@/shared";
import styles from "./contacts.module.scss";

const DIRECTION_OPTIONS = [
  "Baby Dance (от 2,5 лет)",
  "Kids Dance (от 4 лет)",
  "Street Dance (от 8 лет)",
  "K-pop (от 9 лет)",
  "Детская пластика (от 6 лет)",
  "Lady Dance (от 17 лет)",
  "Stretching (от 16 лет)",
  "Solo",
  "Latina Duet",
  "Flow Art (от 6 лет)",
  "Fire Show",
];

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
    value: "@bits_art_studio",
    href: "https://www.instagram.com/bits_art_studio?igsh=a24zZnprb2hxczZv",
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
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contacts" className={styles.section}>
      <div className={styles.inner}>
        <SectionLabel>Контакты</SectionLabel>
        <h2 className={styles.title}>
          <GradientText gradient="chrome">Приходи </GradientText>
          <span className={styles.titleAccent}>танцевать</span>
        </h2>

        <div className={styles.grid}>
          <div>
            {formSent ? (
              <div className={styles.success}>
                <GradientText gradient="lm" className={styles.successIcon}>
                  ✓
                </GradientText>
                <GradientText gradient="chrome" className={styles.successTitle}>
                  Заявка отправлена
                </GradientText>
                <p className={styles.successText}>
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  className={styles.field}
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  required
                  autoComplete="name"
                />
                <input
                  className={styles.field}
                  type="tel"
                  name="phone"
                  placeholder="+375 (29) 000-00-00"
                  required
                  autoComplete="tel"
                />
                <select
                  className={styles.field}
                  name="direction"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Выберите направление
                  </option>
                  {DIRECTION_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <Button type="submit" size="lg" className={styles.submit}>
                  Отправить заявку
                </Button>
              </form>
            )}
          </div>

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
      </div>
    </section>
  );
};

export default Contacts;
