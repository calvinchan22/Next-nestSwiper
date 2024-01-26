import Head from 'next/head'
import styles from "./style.module.scss";
import cls from "classnames";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import { useState } from "react";

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(0)
  const onWrapSlideChange = (item) => {
    setActiveIndex(item.activeIndex)
    const outSwiper = document.getElementById('outSwiper');
    outSwiper.swiper.allowSlidePrev = true
    outSwiper.swiper.allowSlideNext = true

    if (item.activeIndex === 1) {
      const erasTourSwiper = document.getElementById('erasTourSwiper');
      erasTourSwiper.swiper.allowSlidePrev = false
      erasTourSwiper.swiper.allowSlideNext = false

      setTimeout(() => {
        erasTourSwiper.swiper.allowSlidePrev = true
        erasTourSwiper.swiper.allowSlideNext = true
      }, 500)
    }
  }


  const [page2ActiveIndex, setPage2ActiveIndex] = useState(0)
  const onPage2SlideChange = (item) => {
    setPage2ActiveIndex(item.activeIndex)
  }
  const onPage2SwiperStart = () => {
    const outSwiper = document.getElementById('outSwiper');
    outSwiper.swiper.allowSlidePrev = false
    outSwiper.swiper.allowSlideNext = false
  }

  const onPage2SwiperEnd = (item) => {
    const outSwiper = document.getElementById('outSwiper');
    if (item.activeIndex === 0) {
      outSwiper.swiper.allowSlidePrev = true
      outSwiper.swiper.allowSlideNext = false
      return
    }

    if (item.activeIndex === 2) {
      outSwiper.swiper.allowSlidePrev = false
      outSwiper.swiper.allowSlideNext = true
      return
    }
  }


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>LunaOs</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Swiper
          id="outSwiper"
          modules={[Scrollbar, Mousewheel]}
          scrollbar={{
            hide: false,
          }}
          speed={800}
          mousewheel={true}
          direction={'vertical'}
          onSlideChange={(item) => onWrapSlideChange(item)}
        >
          <SwiperSlide>
            <div className={styles.page1}>
              <div className={styles.video1Wrap}>
                <video autoPlay muted className={cls([styles.video1, 'pc'])} id="lunaVideo">
                  <source src='https://img0.jmgo.com/luna_os_pc/1_1_logovideo.mp4' type="video/mp4"></source>
                </video>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.page2} >
              <div className={styles.page2TextWrap}>
                <h3 className={styles.page2h3}>
                  The Eras Tour
                </h3>
                <p className={styles.page2p}>
                  Taylor Swift
                </p>
              </div>
              <Swiper
                id="erasTourSwiper"
                modules={[Mousewheel]}
                mousewheel={true}
                speed={500}
                direction={'horizontal'}
                onSlideChange={(item) => onPage2SlideChange(item)}
                onSlideChangeTransitionStart={(item) => onPage2SwiperStart(item)}
                onSlideChangeTransitionEnd={(item) => onPage2SwiperEnd(item)}>
                <SwiperSlide>
                  <div className={styles.page2ImgWrap}>
                    <img src='/lover.jpeg' className={styles.album}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.page2ImgWrap}>
                    <img src='/1989.jpeg' className={styles.album}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.page2ImgWrap}>
                    <img src='/midnight.jpeg' className={styles.album}></img>
                  </div>
                </SwiperSlide>
              </Swiper>
              <ul className={styles.page2BtnGroup}>
                <li className={styles.page2BtnItem} style={{ backgroundColor: page2ActiveIndex === 0 ? '#FF834D' : '', borderColor: page2ActiveIndex === 0 ? '#FF834D' : '#fff' }} onClick={(e) => {
                  const swiper = document.getElementById('erasTourSwiper').swiper
                  swiper.slideTo(0)
                }}>lover</li>
                <li className={styles.page2BtnItem} style={{ backgroundColor: page2ActiveIndex === 1 ? '#FF834D' : '', borderColor: page2ActiveIndex === 1 ? '#FF834D' : '#fff' }} onClick={(e) => {
                  const swiper = document.getElementById('erasTourSwiper').swiper
                  swiper.slideTo(1)
                }}>1989</li>
                <li className={styles.page2BtnItem} style={{ backgroundColor: page2ActiveIndex === 2 ? '#FF834D' : '', borderColor: page2ActiveIndex === 2 ? '#FF834D' : '#fff' }} onClick={(e) => {
                  const swiper = document.getElementById('erasTourSwiper').swiper
                  swiper.slideTo(2)
                }}>midNight</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.page3}>
              <img src='/album.png' className={styles.page3Img}></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
}
