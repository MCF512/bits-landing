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
    bio: "Привет, друзья! Меня зовут Снежана, и я уже 7 лет преподаю танцы. Мои ученики – самые лучшие, ведь они регулярно становятся призерами международных и республиканских конкурсов. Благодаря нашей совместной работе, у нас уже более 60 наград и благодарностей! Танцы – это моя страсть, и я горжусь каждым своим учеником. Давайте продолжать покорять новые вершины вместе!",
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
    bio: "Привет, друзья! Меня зовут Лисан, и я танцую с 3 лет. Начинала, как многие, с народных и классических танцев, но позже открыла для себя удивительный мир современной хореографии. Уже 5 лет я специализируюсь на этом направлении и не перестаю восхищаться его разнообразием и свободой самовыражения. В детях мне нравится отдача. С самого детства я любила выступать, и вот уже мои ученики становятся победителями международных конкурсов.",
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
    name: "Маргарита",
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
    name: "Валерия",
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
