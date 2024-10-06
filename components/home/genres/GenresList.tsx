import { IGenre } from "./types";
import clsx from "clsx";
import { genresData } from "./genresData";
import styles from "./styles.module.scss";

const GenresList = () => {
  return (
    <section className={clsx("container", styles["genres-list"])}>
      {genresData?.map((genre: IGenre) => (
        <div className={styles["genres-list__item"]}>
          <span className={styles["genres-list__item-icon"]}>{genre.icon}</span>
          <p>{genre.name}</p>
        </div>
      ))}
    </section>
  );
};

export default GenresList;
