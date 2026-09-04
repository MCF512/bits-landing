import React, { FC } from "react";
import { TeamCard } from "@/components/team-card";
import { Mentor } from "@/types";
import { GradientText, SectionLabel } from "@/shared";
import snezha from "@images/snezha.webp";
import lisan from "@images/lisan.webp";
import margarita from "@images/margarita.png";
import valeria from "@images/valeria.png";
import styles from "./team.module.scss";

const mentors: Mentor[] = [
  {
    id: "t1",
    name: "Анисимова Снежана",
    role: "Основатель · Педагог",
    image: snezha,
    bio: "Основатель и педагог студии BIT'S. Специализируется на детской хореографии, уличных и современных стилях, латиноамериканских танцах и классической базе.",
    dirs: [
      "Электро / Шафл",
      "Street Dance",
      "Hip-hop · Jazz funk · Vogue",
      "Латиноамериканские социальные танцы",
      "Kids Dance",
      "Baby Dance (от 2,5 лет)",
      "Восточный современный танец",
      "Twerk / Dancehall",
      "High Heels / Strip",
      "Классика",
    ],
    gradient: "lm",
  },
  {
    id: "t2",
    name: "Лихач Лисан",
    role: "Педагог",
    image: lisan,
    bio: "Педагог студии BIT'S. Специализируется на K-pop, уличных стилях, растяжке, high heels и vogue.",
    dirs: [
      "K-pop",
      "Street Dance",
      "Latina Lady",
      "High Heels",
      "Stretching",
      "Vogue",
    ],
    gradient: "mc",
  },
  {
    id: "t3",
    name: "Козлова Маргарита",
    role: "Педагог",
    image: margarita,
    bio: "Педагог студии BIT'S. Специализируется на уличных стилях, шоу-программах и джазовой хореографии.",
    dirs: [
      "Street Dance",
      "Stretching",
      "Dance Show",
      "Jazz Funk / Dancehall",
    ],
    gradient: "cl",
  },
  {
    id: "t4",
    name: "Сафонова Валерия",
    role: "Педагог",
    image: valeria,
    bio: "Педагог студии BIT'S. Ведёт занятия по лечебной физической культуре и фитнесу — для здоровья тела и качества жизни.",
    dirs: ["Лечебная физическая культура", "Фитнес"],
    gradient: "lm",
  },
];

const Team: FC = () => {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <SectionLabel>Команда</SectionLabel>
            <h2 className={styles.title}>
              <GradientText gradient="chrome">Педагоги</GradientText>
            </h2>
          </div>
          <span className={styles.hint}>Нажми на карточку</span>
        </div>

        <ul className={styles.grid}>
          {mentors.map((mentor) => (
            <TeamCard key={mentor.id} {...mentor} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
