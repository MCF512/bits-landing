import React, { FC } from 'react'
import styles from './hero.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import slideOneLogo from '@images/slide-one-logo.webp'
import { useResize } from '@/utils/useResize'
import { classNames } from '@/utils/classNames'
import firstSlideBgImage from '@images/slide-one.webp'
import firstSlideBgImageMobile from '@images/slide-one-mobile.webp'
import secondSlideBgImage from '@images/slide-two.webp'
import thirdSlideBgImage from '@images/slide-three.webp'

const Hero: FC = () => {
  const sizes = useResize();
  const isMobile = (sizes?.width ?? 0) < 801
  return (
    <div className=''>
      <Swiper
        className={styles.swiper}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        slidesPerView={1}
        onAutoplayTimeLeft={() => { }}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.slide_wrapper}>

            <Image
              src={isMobile ? firstSlideBgImageMobile : firstSlideBgImage}
              alt='Студия танцев BIT`s'
              className={styles.slide_bg}
              fill={true}
              objectFit='cover'
              objectPosition='center center'
              priority
            />
            <Image
              width={0}
              height={0}
              alt='Лого студии'
              src={slideOneLogo}
              className={styles.image_logo}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_wrapper}>
            <Image
              src={secondSlideBgImage}
              alt='Студия танцев BIT`s'
              className={styles.slide_bg}
              fill={true}
              objectFit='cover'
              objectPosition='center center'
              loading="lazy"
            />

            <div className={classNames(styles.info, { [styles.info_two]: true })}>
              <div className={styles.group}>
                Baby Dance <span>от 2,5 лет</span>
              </div>
              <div className={styles.group}>
                Kids Show <span>от 4 лет</span>
              </div>
              <div className={styles.group}>
                K-pop <span>от 9 лет</span>
              </div>
              <div className={styles.group}>
                Lady Dance <span>от 17 лет</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_wrapper}>

            <Image
              src={thirdSlideBgImage}
              alt='Студия танцев BIT`s'
              className={styles.slide_bg}
              fill={true}
              objectFit='cover'
              objectPosition='center center'
              loading="lazy"
            />

            <div className={classNames(styles.info, { [styles.info_three]: true })}>
              <div className={styles.group}>
                Street dance <span>от 8 лет</span>
              </div>
              <div className={styles.group}>
                Kids Plastic <span>от 6 лет</span>
              </div>
              <div className={styles.group}>
                Flow Art <span>от 6 лет</span>
              </div>
              <div className={styles.group}>
                Stretching <span>от 16 лет</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <div className={styles.bar_wrapper}>
          <div className={styles.autoplay_bar}></div>
        </div> */}
      </Swiper>
    </div>
  )
}

export default Hero;