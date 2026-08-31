import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, GradientText } from "@/shared";
import heroBg from "@images/hero-background-2.png";
import styles from "./hero.module.scss";

const CHIPS = [
  { label: "Baby Dance", age: "2,5+", gradient: "lm" as const },
  { label: "Kids Show", age: "4+", gradient: "mc" as const },
  { label: "K-pop", age: "9+", gradient: "cl" as const },
  { label: "Lady Dance", age: "17+", gradient: "lm" as const },
  { label: "Street Dance", age: "8+", gradient: "mc" as const },
  { label: "Kids Plastic", age: "6+", gradient: "cl" as const },
  { label: "Flow Art", age: "6+", gradient: "lm" as const },
  { label: "Stretching", age: "16+", gradient: "mc" as const },
];

const TICKER =
  "BABY DANCE ✦ KIDS DANCE ✦ K-POP ✦ LADY DANCE ✦ LADY LATINA ✦ STREET DANCE ✦ DANCE SHOW ✦ KIDS PLASTIC ✦ FLOW ART ✦ FIRE SHOW ✦ STRETCHING ✦ HIGH HEELS ✦ ELECTRO & SHUFFLE ✦ SOLO ✦ LATINA DUET ✦ LFK ✦ BIT'S DANCE STUDIO ✦ ";

const Hero: FC = () => {
  const router = useRouter();

  return (
    <>
      <section id="hero" className={styles.hero}>
        <div className={styles.bg}>
          <Image
            src={heroBg}
            alt="Студия танцев BIT'S"
            fill
            priority
            sizes="100vw"
            className={styles.bgImage}
          />
          <div className={styles.bgTint} />
          <div className={styles.bgFade} />
          <div className={styles.frame} aria-hidden />
        </div>

        <div className={styles.content}>
          <div className={styles.location}>
            <span className={styles.locationDot} />
            <span className={styles.locationText}>
              РЕЧИЦА, БЕЛАРУСЬ · СТУДИЯ ТАНЦЕВ
            </span>
          </div>

          <h1 className={styles.title}>
            <GradientText gradient="chrome" className={styles.titleLine}>
              BIT&apos;S — ЭТО ТВОЙ
            </GradientText>
            <br />
            <span className={styles.titleAccent}>ТАНЦЕВАЛЬНЫЙ МИР</span>
          </h1>

          <p className={styles.lead}>
            Уроки танцев в Речице для детей и взрослых. От 2,5 лет до&nbsp;∞.
          </p>

          <div className={styles.ctas}>
            <Button size="lg" onClick={() => void router.push("/#contacts")}>
              Записаться на занятие
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => void router.push("/#directions")}
            >
              Смотреть направления
            </Button>
          </div>

          <div className={styles.chips}>
            {CHIPS.map((chip) => (
              <div key={chip.label} className={styles.chip}>
                <GradientText
                  gradient={chip.gradient}
                  className={styles.chipLabel}
                >
                  {chip.label}
                </GradientText>
                <span className={styles.chipAge}>{chip.age}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scrollHint} aria-hidden>
          <span>SCROLL</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      <div className={styles.ticker} aria-hidden>
        <span className={styles.tickerTrack}>
          {Array.from({ length: 10 }, () => TICKER).join("")}
        </span>
      </div>
    </>
  );
};

export default Hero;
