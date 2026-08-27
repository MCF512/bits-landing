import React, { FC } from "react";
import { DirectionItem, type DirectionItemProps } from "@/components/direction-item";
import { GradientText, SectionLabel } from "@/shared";
import soloDance from "@images/solo.webp";
import streetDance from "@images/street-dance.webp";
import stretch from "@images/stretch.webp";
import plastic from "@images/plactic.webp";
import kpop from "@images/kpop.webp";
import kids from "@images/kids-dance.webp";
import baby from "@images/baby-dance.webp";
import fire from "@images/fire.webp";
import lady from "@images/lady.webp";
import flowArt from "@images/flow-art.webp";
import latina from "@images/latina.webp";
import styles from "./directions.module.scss";

const directions: DirectionItemProps[] = [
  {
    id: "baby",
    title: "Baby Dance",
    tag: "Малыши",
    age: "от 2,5 лет",
    gradient: "lm",
    image: baby,
    description:
      "Baby dance — обучение деток от 2,5 до 4 лет. Занятия включают в себя: развивающую ритмику, детскую пластику и изучение тематических танцев.",
  },
  {
    id: "kids",
    title: "Kids Dance",
    tag: "Дети",
    age: "от 4 лет",
    gradient: "mc",
    image: kids,
    description:
      "Kids Dance — обучение деток от 4,5 до 7 лет. Занятия включают в себя: изучение классической базы, детскую пластику и акробатику, изучение современной хореографии и развитие ритмики.",
  },
  {
    id: "street",
    title: "Street Dance",
    tag: "Street",
    age: "от 8 лет",
    gradient: "cl",
    image: streetDance,
    description:
      "Street Dance — обучение с 8 до 17 лет. Занятия включают в себя: комплексную разминку и прокачку, изучение современной хореографии (jazz funk, dancehall, hip-hop и т.д.).",
  },
  {
    id: "kpop",
    title: "K-pop",
    tag: "K-pop",
    age: "от 9 лет",
    gradient: "lm",
    image: kpop,
    description:
      "K-pop — обучение с 9 до 17 лет. Занятия включают в себя: комплексную разминку, изучение хореографии под популярные треки K-pop айдолов, K-pop батлы и растяжку.",
  },
  {
    id: "plastic",
    title: "Детская пластика",
    tag: "Пластика",
    age: "от 6 лет",
    gradient: "mc",
    image: plastic,
    description:
      "Детская пластика — обучение деток с 5 до 12 лет. Занятия включают в себя: комбинированную растяжку и прокачку всех групп мышц, работу с осанкой, вальгусной деформацией ступней и коленей.",
  },
  {
    id: "lady",
    title: "Lady Dance",
    tag: "Women",
    age: "от 17 лет",
    gradient: "cl",
    image: lady,
    description:
      "Lady Dance — обучение взрослых от 17 до 45+ лет. Занятия включают в себя: комплексную разминку и прокачку, растяжку. Изучение современной женственной хореографии (dancehall, high heels, frame up strip, vogue и т.д.).",
  },
  {
    id: "stretch",
    title: "Stretching",
    tag: "Stretch",
    age: "от 16 лет",
    gradient: "lm",
    image: stretch,
    description:
      "Stretching — обучение для взрослых от 16 лет. Занятия включают в себя: комплексную растяжку и прокачку всех групп мышц с использованием реквизита.",
  },
  {
    id: "solo",
    title: "Solo",
    tag: "Solo",
    gradient: "mc",
    image: soloDance,
    description:
      "Solo — индивидуальные занятия в любом из выбранных направлений (stretching, vogue, hip-hop, jazz funk, twerk, high heels, strip dance и т.д.). Занятия с индивидуальным планом, графиком и музыкальным подбором.",
  },
  {
    id: "latina",
    title: "Latina Duet",
    tag: "Latina",
    gradient: "cl",
    image: latina,
    description:
      "Latina Duet — парные социальные латиноамериканские танцы. Занятия индивидуальные, с изучением латино базы (bachata, zouk, kizomba, salsa).",
  },
  {
    id: "flow",
    title: "Flow Art",
    tag: "Flow",
    age: "от 6 лет",
    gradient: "lm",
    image: flowArt,
    description:
      "Flow Art — обучение деток от 7 до 15 лет. Занятия включают в себя: комплексную разминку и прокачку, обучение жонгляжу, ходьбе на ходулях, элементам и технической базе работы со светодиодным реквизитом (пои, даблы, стафф, обручи и т.д.).",
  },
  {
    id: "fire",
    title: "Fire Show",
    tag: "Fire",
    gradient: "mc",
    image: fire,
    description:
      "Fire Show — для детей от 16 лет и взрослых. Обучение по работе с огненным реквизитом (веера, даблы, снеки и т.д.). Занятия с выходом на коммерческий уровень, участие в Fire Show постановках, выезды на мероприятия и огненные фестивали.",
  },
];

const Directions: FC = () => {
  return (
    <section id="directions" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <SectionLabel>Направления</SectionLabel>
            <h2 className={styles.title}>
              <GradientText gradient="chrome">11 стилей</GradientText>
            </h2>
          </div>
          <span className={styles.hint}>Нажми для деталей</span>
        </div>

        <div className={styles.grid}>
          {directions.map((item) => (
            <DirectionItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;
