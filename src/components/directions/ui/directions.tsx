import React, { FC } from "react";
import { DirectionItem, type DirectionItemProps } from "@/components/direction-item";
import { GradientText, SectionLabel } from "@/shared";
import soloDance from "@images/solo-dance.jpg";
import streetDance from "@images/street-dance.jpg";
import stretching from "@images/stretching.jpg";
import lfk from "@images/lfk.jpg";
import fitness from "@images/fitness.jpg";
import electro from "@images/electro.jpg";
import kpop from "@images/k-pop.jpg";
import danceShow from "@images/dance-show.jpg";
import baby from "@images/baby-dance-3.jpg";
import kidsDance from "@images/baby-dance.jpg";
import fire from "@images/fire-show.jpg";
import lady from "@images/lady-dance.jpg";
import flowArt from "@images/flow-art.jpg";
import latina from "@images/latina.jpg";
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
      "Baby dance — обучение деток от 2,5 до 4 лет. Занятия включают в себя: развивающую хореографию, ритмику, детскую пластику и изучение тематических танцев.",
  },
  {
    id: "kids",
    title: "Kids Dance",
    tag: "Дети",
    age: "от 4,5 до 6 лет",
    gradient: "mc",
    image: kidsDance,
    description:
      "Kids Dance — обучение деток от 4,5 до 6 лет. Занятия включают в себя: изучение классической базы, детскую пластику и акробатику, изучение современной хореографии и развитие ритмики.",
  },
  {
    id: "dance-show",
    title: "Dance Show",
    tag: "Show",
    age: "6,5–9 лет",
    gradient: "mc",
    image: danceShow,
    description:
      "Dance Show — занятия для детей от 6,5 до 9 лет. Современная хореография с изучением классической базы, детской пластики и акробатики. Развитие артистизма, сценического движения.",
  },
  {
    id: "street",
    title: "Street Dance",
    tag: "Street",
    age: "",
    gradient: "cl",
    image: streetDance,
    description: `Street Dance от 10 лет — занятия по изучению современной хореографии (jazz funk, dancehall, hip-hop и т.д.). Включают в себя: изучение базы стилей, прокачку и комплексную растяжку, а также базовую акробатику.
 
    Street Dance для взрослых — занятия по современной хореографии (vogue, jazz funk, dancehall, hip-hop и т.д). Для взрослых начинающих танцоров с прокачкой и растяжкой.
`,
  },
  {
    id: "kpop",
    title: "K-pop",
    tag: "K-pop",
    age: "от 10 лет",
    gradient: "lm",
    image: kpop,
    description:
      "K-pop — обучение с 10 до 16 лет. Занятия включают в себя: комплексную разминку, изучение хореографии под популярные треки K-pop айдолов, K-pop батлы и растяжку.",
  },
  {
    id: "lfk",
    title: "ЛФК",
    tag: "Health",
    age: "дети и взрослые",
    gradient: "lm",
    image: lfk,
    description:
      "ЛФК — лечебная физическая культура для детей и взрослых. Занятия направлены на укрепление мышечного корсета, улучшение осанки, подвижности суставов и восстановление после нагрузок.",
  },
  {
    id: "fitness",
    title: "Fitness",
    tag: "Fitness",
    age: "взрослые",
    gradient: "mc",
    image: fitness,
    description:
      "Fitness — функциональные тренировки для взрослых. Занятия включают в себя: разминку, прокачку всех групп мышц, работу над выносливостью и общим физическим тонусом. Тренировки на виброплатформах для максимального лимфодренажного эффекта.",
  },
  {
    id: "electro",
    title: "Electro&Shuffle",
    tag: "Electro",
    age: "взрослые",
    gradient: "cl",
    image: electro,
    description:
      "Electro&Shuffle — обучение взрослых современным танцевальным стилям. Занятия включают в себя: разминку, изучение базы shuffle и electro-движений, постановку хореографии под электронную музыку.",
  },
  {
    id: "lady",
    title: "Lady Dance",
    tag: "Women",
    age: "Взрослые",
    gradient: "cl",
    image: lady,
    description:
      `Lady Dance — обучение взрослых. Занятия включают в себя: комплексную разминку и прокачку, растяжку. Изучение современной женственной хореографии (dancehall, high heels, frame up strip, vogue и т.д.).

      Lady Latina — обучение взрослых женщин латиноамериканской хореографии (bachata, zouk, kizomba, salsa). Женственная хореография с прокачкой и пластикой.
      `,
  },
  {
    id: "stretch",
    title: "Stretching",
    tag: "Stretch",
    age: "Дети и взрослые",
    gradient: "lm",
    image: stretching,
    description:
      "Stretching — комплексная растяжка и пластика для всего тела. Занятия для коррекции тела и развития гибкости с использованием реквизита.",
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
    title: "Latina",
    tag: "Latina",
    gradient: "cl",
    image: latina,
    description:
      "Latina — парные социальные латиноамериканские танцы. Занятия индивидуальные, с изучением латино базы (bachata, zouk, kizomba, salsa).",
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
              <GradientText gradient="chrome">14 стилей</GradientText>
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
