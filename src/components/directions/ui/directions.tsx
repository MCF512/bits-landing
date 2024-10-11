import React, { FC } from 'react'
import styles from './directions.module.scss'
import { DirectionItem } from '@/components/direction-item'
import soloDance from '@images/solo.jpeg'
import streetDance from '@images/street-dance.jpeg'
import stretch from '@images/stretch.jpeg'
import plastic from '@images/plactic.jpeg'
import kpop from '@images/kpop.jpeg'
import kids from '@images/kids-dance.jpeg'
import baby from '@images/baby-dance.jpeg'
import fire from '@images/fire.jpeg'
import lady from '@images/lady.jpeg'
import flowArt from '@images/flow-art.jpeg'
import latina from '@images/latina.jpeg'

const directionsArray = [
    {
        name: 'Baby dance',
        description: 'Baby dance - обучение деток от 2,5 до 4 лет. Занятия включают в себя: развивающую ритмику, детскую пластику и изучение тематических танцев.',
        image: baby
    },
    {
        name: 'Kids Dance',
        description: 'Kids Dance - обучение деток от 4,5 до 7 лет. Занятия включают в себя: изучение классической базы, детскую пластику и акробатику, изучение современной хореографии и развитие ритмики.',
        image: kids
    },
    {
        name: 'Street Dance',
        description: 'Street Dance - обучение с 8 до 17 лет. Занятия включают в себя: комплексную разминку и прокачку, изучение современной хореографии (jazz funk, dancehall, hip-hop и т.д.)',
        image: streetDance
    },
    {
        name: 'K-pop',
        description: 'K-pop - обучение с 9 до 17 лет. Занятия включают в себя: комплексную разминку, изучение хореографии под популярные треки К-поп Айдолов, К-поп батлы и растяжку. ',
        image: kpop
    },
    {
        name: 'Детская пластика',
        description: 'Детская пластика - обучение деток с 5 до 12 лет. Занятия включают в себя: комбинированную растяжку и прокачку всех групп мышц, работу с осанкой, вальгусной деформации ступней и коленей.',
        image: plastic
    },
    {
        name: 'Lady Dance',
        description: 'Lady Dance - обучение взрослых от 17 до 45+ лет. Занятия включают в себя: комплексную разминку и прокачку, растяжку. Изучение современной женственной хореографии (dancehall, high heels, frame up strip, vogue и т.д. )',
        image: lady
    },
    {
        name: 'Stretching (растяжка)',
        description: 'Stretching - обучение для взрослых от 16 лет. Занятия включают в себя: комплексную растяжку и прокачку всех групп мышц с использованием реквизита.',
        image: stretch
    },
    {
        name: 'Solo',
        description: 'Solo - индивидуальные занятия в любом из выбранных направлений (stretching, vogue, hip-hop, jazz funk, twerk, high heels, strip dance и т.д.) Занятия с индивидуальным планом, графиком и музыкальным подбором.',
        image: soloDance
    },
    {
        name: 'Latina Duet',
        description: 'Latina Duet - парные социальные латиноамериканские танцы. Занятия индивидуальные, с изучением латино базы (bachata, zouk, kizomba, salsa)',
        image: latina
    },
    {
        name: 'Flow Art',
        description: 'Flow Art - обучение деток от 7 до 15 лет. Занятия включаю в себя: комплексную разминку и прокачку, обучение жонгляжу, ходьбе на ходулях, элементам и технической базе работы со светодиодным реквизитом (пои, даблы, стафф, обручи и т.д.)',
        image: flowArt
    },
    {
        name: 'Fire Show',
        description: 'Fire Show - для детей от 16 лет и взрослых. Обучение по работе с огненным реквизитом (веера, даблы, снеки и т.д.) Занятия с выходом на коммерческий уровень, участие в Fire Show постановках, выезды на мероприятия и огненные фестивали.',
        image: fire
    },

]

interface DirectionsProps {

}

export const Directions: FC<DirectionsProps> = ({ }) => {
    return (
        <section id='directions' className={styles.wrapper}>
            <div className='container'>
                <h2 className={styles.title}>Направления</h2>

                <div className={styles.items}>
                    {directionsArray.map((item, index) => {
                        return <DirectionItem key={index} {...item} />
                    })}
                </div>
            </div>
        </section>
    )
}