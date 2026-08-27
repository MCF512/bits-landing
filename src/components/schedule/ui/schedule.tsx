import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { Button, GradientText, SectionLabel } from "@/shared";
import type { UkGradient } from "@/shared";
import { classNames } from "@/utils/classNames";
import styles from "./schedule.module.scss";

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"] as const;
type Day = (typeof DAYS)[number];

type Lesson = {
  time: string;
  name: string;
  teacher: string;
  who: string;
  gradient: UkGradient;
};

const SCHEDULE: Record<Day, Lesson[]> = {
  Пн: [
    { time: "09:00", name: "Baby Dance", teacher: "Снежана", who: "от 2,5 лет", gradient: "lm" },
    { time: "10:00", name: "Kids Dance", teacher: "Снежана", who: "дети", gradient: "lm" },
    { time: "15:30", name: "Street Dance", teacher: "Маргарита", who: "от 8 лет", gradient: "cl" },
    { time: "17:00", name: "K-pop", teacher: "Лисан", who: "от 9 лет", gradient: "mc" },
    { time: "18:30", name: "High Heels", teacher: "Лисан", who: "от 17 лет", gradient: "mc" },
    { time: "19:45", name: "Jazz Funk / Dancehall", teacher: "Маргарита", who: "взрослые", gradient: "cl" },
  ],
  Вт: [
    { time: "10:00", name: "Фитнес", teacher: "Валерия", who: "все", gradient: "lm" },
    { time: "15:00", name: "Stretching", teacher: "Лисан", who: "от 16 лет", gradient: "mc" },
    { time: "16:30", name: "Классика", teacher: "Снежана", who: "все уровни", gradient: "lm" },
    { time: "18:00", name: "Vogue", teacher: "Лисан", who: "от 14 лет", gradient: "mc" },
    { time: "19:30", name: "Twerk / Dancehall", teacher: "Снежана", who: "от 16 лет", gradient: "lm" },
  ],
  Ср: [
    { time: "09:00", name: "Baby Dance", teacher: "Снежана", who: "от 2,5 лет", gradient: "lm" },
    { time: "10:00", name: "ЛФК", teacher: "Валерия", who: "все", gradient: "lm" },
    { time: "15:30", name: "Street Dance", teacher: "Маргарита", who: "от 8 лет", gradient: "cl" },
    { time: "17:00", name: "K-pop", teacher: "Лисан", who: "от 9 лет", gradient: "mc" },
    { time: "18:30", name: "Latina Lady", teacher: "Лисан", who: "от 14 лет", gradient: "mc" },
    { time: "19:45", name: "Электро / Шафл", teacher: "Снежана", who: "взрослые", gradient: "lm" },
  ],
  Чт: [
    { time: "10:00", name: "Фитнес", teacher: "Валерия", who: "все", gradient: "lm" },
    { time: "15:00", name: "Dance Show", teacher: "Маргарита", who: "дети", gradient: "cl" },
    { time: "16:30", name: "Stretching", teacher: "Маргарита", who: "от 16 лет", gradient: "cl" },
    { time: "18:00", name: "High Heels / Strip", teacher: "Снежана", who: "от 17 лет", gradient: "lm" },
    { time: "19:30", name: "Восточный танец", teacher: "Снежана", who: "взрослые", gradient: "lm" },
  ],
  Пт: [
    { time: "09:00", name: "Baby Dance", teacher: "Снежана", who: "от 2,5 лет", gradient: "lm" },
    { time: "15:30", name: "Street Dance", teacher: "Маргарита", who: "от 8 лет", gradient: "cl" },
    { time: "17:00", name: "K-pop", teacher: "Лисан", who: "от 9 лет", gradient: "mc" },
    { time: "18:30", name: "Jazz Funk", teacher: "Маргарита", who: "взрослые", gradient: "cl" },
    { time: "19:45", name: "Latina Lady", teacher: "Лисан", who: "от 14 лет", gradient: "mc" },
  ],
  Сб: [
    { time: "10:00", name: "Kids Dance", teacher: "Снежана", who: "дети", gradient: "lm" },
    { time: "11:30", name: "ЛФК", teacher: "Валерия", who: "все", gradient: "lm" },
    { time: "13:00", name: "Stretching", teacher: "Лисан", who: "от 16 лет", gradient: "mc" },
    { time: "14:30", name: "Vogue", teacher: "Лисан", who: "от 14 лет", gradient: "mc" },
    { time: "16:00", name: "Dance Show", teacher: "Маргарита", who: "дети", gradient: "cl" },
  ],
};

const Schedule: FC = () => {
  const router = useRouter();
  const [activeDay, setActiveDay] = useState<Day>("Пн");
  const lessons = SCHEDULE[activeDay];

  return (
    <section id="schedule" className={styles.section}>
      <div className={styles.inner}>
        <SectionLabel>Расписание</SectionLabel>
        <h2 className={styles.title}>
          <GradientText gradient="chrome">
            Занятия
            <br />
            на неделю
          </GradientText>
        </h2>

        <div className={styles.tabs} role="tablist" aria-label="Дни недели">
          {DAYS.map((day) => (
            <button
              key={day}
              type="button"
              role="tab"
              aria-selected={activeDay === day}
              className={classNames(styles.tab, {
                [styles.tab_active]: activeDay === day,
              })}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className={styles.list} key={activeDay}>
          {lessons.map((lesson, index) => (
            <div
              key={`${lesson.time}-${lesson.name}`}
              className={styles.row}
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <GradientText gradient={lesson.gradient} className={styles.time}>
                {lesson.time}
              </GradientText>
              <span className={styles.name}>{lesson.name}</span>
              <span className={styles.teacher}>{lesson.teacher}</span>
              <span className={styles.who}>{lesson.who}</span>
              <span className={styles.meta}>
                {lesson.teacher} · {lesson.who}
              </span>
              <Button
                size="sm"
                className={styles.cta}
                onClick={() => void router.push("/#contacts")}
              >
                Записаться
              </Button>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          * Расписание может меняться. Актуальное — в Instagram @bits_art_studio
        </p>
      </div>
    </section>
  );
};

export default Schedule;
