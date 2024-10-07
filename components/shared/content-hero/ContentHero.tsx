import { IMovieDetailsResponse } from "@/features/movies/types";
import Image from "next/image";
import clsx from "clsx";
import styles from "./styles.module.scss";

const ContentHero = (item: IMovieDetailsResponse) => {
  const {adult, release_date, genres} = item;
  return (
    <section className={clsx(styles["content-hero-section"], "container")}>
      <Image className={styles["content-hero-section__logo"]} />
      <div className={styles["content-hero-section__details"]}>
        <span className={styles["content-hero-section__details-year"]}>{release_date}</span>
        <span className={styles["content-hero-section__details-age"]}></span>
        <div className={styles["content-hero-section__details-genres"]}></div>
      </div>
      <p className={styles["content-hero-section__description"]}></p>
    </section>
  );
};

export default ContentHero;
