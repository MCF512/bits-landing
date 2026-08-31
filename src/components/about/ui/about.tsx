import React, { FC } from "react";
import Image from "next/image";
import { GradientText, SectionLabel } from "@/shared";
import aboutImage from "@images/about-bg.webp";
import styles from "./about.module.scss";

const ADVANTAGES = [
  {
    gradient: "lm" as const,
    title: "Дети и взрослые",
    description:
      "От 2,5 лет и без верхней границы. Каждый находит своё место.",
  },
  {
    gradient: "mc" as const,
    title: "Живое сообщество",
    description:
      "Студия — не просто зал. Это команда, выступления, дружба.",
  },
  {
    gradient: "cl" as const,
    title: "Сцена и выступления",
    description: "Регулярные концерты, конкурсы, открытые уроки.",
  },
];

const About: FC = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <SectionLabel>О нас</SectionLabel>
            <h2 className={styles.title}>
              <GradientText gradient="chrome">BIT&apos;S — ЭТО ТВОЙ</GradientText>
              <br />
              <span className={styles.titleAccent}>ТАНЦЕВАЛЬНЫЙ МИР</span>
            </h2>
            <p className={styles.text}>
              Наша цель — научить выражать свои эмоции с помощью танца, раскрыть
              внутренний потенциал. Помочь сделать ваше тело гибким и сильным.
              Создать пространство для детей и взрослых, объединённых идеей
              развития и сохранения здорового, счастливого и танцевального
              общества.
            </p>

            <ul className={styles.advantages}>
              {ADVANTAGES.map((item) => (
                <li
                  key={item.title}
                  className={styles.advantage}
                  data-gradient={item.gradient}
                >
                  <span className={styles.advantageBar} aria-hidden />
                  <div>
                    <GradientText
                      gradient={item.gradient}
                      className={styles.advantageTitle}
                    >
                      {item.title}
                    </GradientText>
                    <p className={styles.advantageText}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.media}>
            <div className={styles.photo}>
              <Image
                src={aboutImage}
                alt="Группа танцоров в зале"
                fill
                sizes="(max-width: 800px) 100vw, 560px"
                className={styles.photoImage}
              />
              <div className={styles.photoTint} aria-hidden />
            </div>

            <div className={styles.stat}>
              <GradientText gradient="lm" className={styles.statValue}>
                14+
              </GradientText>
              <span className={styles.statLabel}>направлений танца</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
