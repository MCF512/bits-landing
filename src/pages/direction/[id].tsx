import { GetStaticPaths } from 'next';
import styles from './direction.module.scss'
import streetDance from '@images/street-dance.jpg'
import Image from 'next/image';
import Contacts from '@/components/contacts';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: `1` } }]

  return {
    paths,
    fallback: false, // или true/‘blocking’ если нужны fallback-страницы
  };
};

export default function Home() {

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Street dance
        </h1>

        <div className={styles.flex}>
          <Image
            className={styles.image}
            src={streetDance}
            alt='Street dance'
            loading='lazy'
          />

          <div>
            <p className={styles.text}>
              Для кого: <span>дети от 100 лет</span>
            </p>
            <p className={styles.text}>
              Вид занятий: <span>групповые и индивидуальные</span>
            </p>
            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta vero cum error, suscipit esse necessitatibus mollitia distinctio accusantium culpa, sint minus rem odio voluptatem pariatur iure, nam officia provident? Quasi.
            </p>
          </div>
        </div>

        <div className={styles.gallery__wrapper}>
          <video className={styles.video} controls src='/IMG_5027.MOV'>

          </video>
        </div>

        <Contacts />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {

  return {
    props: {
    },
  };
}