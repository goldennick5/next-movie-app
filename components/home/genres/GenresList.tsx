"use client";

import { FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { IGenre } from "./types";
import Link from "next/link";
import clsx from "clsx";
import { genresData } from "./genresData";
import styles from "./styles.module.scss";
import { useState } from "react";

const GenresList = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isCenter, setIsCenter] = useState<boolean>(false);

  const handleSlideChange = (swiper: SwiperClass) => {
    setIsStart(swiper.isEnd);
    setIsCenter(!swiper.isEnd && swiper.activeIndex > 0);
  };

  const test = (id) => {
    console.log(id)
  }

  return (
    <section
      className={clsx(styles["section"], {
        [styles.isStart]: isStart,
        [styles.isCenter]: isCenter,
      })}
    >
      <div className="container" style={{ overflow: "auto" }}>
        <Swiper
          className={styles["genres-list"]}
          freeMode
          modules={[Mousewheel, FreeMode]}
          mousewheel
          onSlideChange={handleSlideChange}
          onSliderMove={handleSlideChange}
          slidesPerView="auto"
        >
          {genresData.map(({ id, icon, name, href }) => (
            <SwiperSlide className={styles["genres-list__item"]} key={name}>
              <div onClick={() => test(id)} className={styles["genres-list__item-link"]}>
                <span className={styles["genres-list__item-icon"]}>{icon}</span>
                <span className={styles["genres-list__item-name"]}>{name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GenresList;
