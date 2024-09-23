import React, { FC } from 'react'
import styles from './team.module.scss'
import { TeamCard } from '@/components/team-card'
import { Mentor } from '@/types'
import snezha from '@images/snezha.jpg'
import lisan from '@images/lisan.jpeg'

interface TeamProps {

}

const mentors: Mentor[] = [
  {
    name: "Снежана",
    surname: "Анисимова",
    image: snezha,
    about: 'Привет, друзья! Меня зовут Снежана, и я уже 7 лет преподаю танцы. Мои ученики – самые лучшие, ведь они регулярно становятся призерами международных и республиканских конкурсов. Благодаря нашей совместной работе, у нас уже более 60 наград и благодарностей! Танцы – это моя страсть, и я горжусь каждым своим учеником. Давайте продолжать покорять новые вершины вместе!'
  },
  {
    name: "Лисан",
    surname: "Лихач",
    image: lisan,
    about: "Привет, друзья! Меня зовут Лисан, и я танцую с 3 лет. Начинала, как многие, с народных и классических танцев, но позже открыла для себя удивительный мир современной хореографии. Уже 5 лет я специализируюсь на этом направлении и не перестаю восхищаться его разнообразием и свободой самовыражения. У меня много любимых танцевальных стилей, и каждый из них приносит мне радость и вдохновение. В детях мне нравится отдача. Я всегда радуюсь, когда наблюдаю, как они стараются и как у них все получается. С самого детства я любила выступать, и вот уже мои ученики становятся победителями международных конкурсов."
  }
]

export const Team: FC<TeamProps> = ({ }) => {
  return (
    <section id='team' className={styles.wrapper}>
      <div className='container'>

        <h2 className={styles.title}>Команда</h2>

        <ul className={styles.cards}>

          {mentors.map((item, index) => {
            return <TeamCard key={index + 10} {...item}/>
          })}
        </ul>
      </div>
    </section>
  )
}