import React, { FC, useState } from "react";
import { GradientText, SectionLabel } from "@/shared";
import type { UkGradient } from "@/shared";
import { classNames } from "@/utils/classNames";
import styles from "./schedule.module.scss";

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"] as const;
type Day = (typeof DAYS)[number];

type Lesson = {
  time: string;
  name: string;
  who: string;
  gradient: UkGradient;
};

const SCHEDULE: Record<Day, Lesson[]> = {
  Пн: [
    { time: "17:30", name: "ЛФК", who: "дети", gradient: "lm" },
    { time: "18:30", name: "ЛФК", who: "взрослые", gradient: "lm" },
  ],
  Вт: [
    { time: "16:00", name: "K-pop", who: "дети", gradient: "mc" },
    { time: "18:00", name: "Kids Dance", who: "от 4,5 до 6,5 лет", gradient: "lm" },
    { time: "18:00", name: "Lady Latina", who: "взрослые", gradient: "cl" },
    { time: "19:00", name: "High Heels", who: "взрослые", gradient: "mc" },
  ],
  Ср: [
    { time: "18:00", name: "Flow Art", who: "от 9 лет", gradient: "cl" },
    { time: "20:00", name: "Electro & Shuffle", who: "взрослые", gradient: "lm" },
  ],
  Чт: [
    { time: "18:30", name: "Kids Dance", who: "от 4,5 до 6,5 лет", gradient: "lm" },
    { time: "18:30", name: "Lady Latina", who: "взрослые", gradient: "cl" },
    { time: "19:30", name: "High Heels", who: "взрослые", gradient: "mc" },
  ],
  Пт: [
    { time: "17:30", name: "ЛФК", who: "дети", gradient: "lm" },
    { time: "18:30", name: "ЛФК", who: "взрослые", gradient: "lm" },
  ],
  Сб: [
    { time: "12:30", name: "Baby Dance", who: "от 2,5 лет", gradient: "lm" },
    { time: "12:30", name: "Flow Art", who: "от 9 лет", gradient: "cl" },
    { time: "13:30", name: "Street Dance", who: "от 10 лет", gradient: "cl" },
    { time: "16:00", name: "Dance Show", who: "6,5–9 лет", gradient: "mc" },
    { time: "17:00", name: "Stretching", who: "дети и взрослые", gradient: "lm" },
    { time: "17:30", name: "K-pop", who: "дети", gradient: "mc" },
    { time: "18:00", name: "Street Dance", who: "взрослые", gradient: "cl" },
  ],
  Вс: [
    { time: "11:00", name: "Stretching", who: "дети и взрослые", gradient: "lm" },
    { time: "11:00", name: "Street Dance", who: "взрослые", gradient: "cl" },
    { time: "12:00", name: "Baby Dance", who: "от 2,5 лет", gradient: "lm" },
    { time: "12:00", name: "Street Dance", who: "от 10 лет", gradient: "cl" },
    { time: "13:00", name: "Dance Show", who: "6,5–9 лет", gradient: "mc" },
    { time: "17:00", name: "Electro & Shuffle", who: "взрослые", gradient: "lm" },
  ],
};

const Schedule: FC = () => {
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
              key={`${lesson.time}-${lesson.name}-${lesson.who}`}
              className={styles.row}
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <GradientText gradient={lesson.gradient} className={styles.time}>
                {lesson.time}
              </GradientText>
              <span className={styles.name}>{lesson.name}</span>
              <span className={styles.who}>{lesson.who}</span>
              <span className={styles.meta}>{lesson.who}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
