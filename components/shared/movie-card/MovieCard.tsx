import { IMAGE_W500 } from "@/constants/images";
import { IMovie } from "@/features/movies/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface IMovieCardProps {
  item: IMovie;
}

const MovieCard = (item: IMovieCardProps) => {
  const { id, title, poster_path } = item.item;
  return (
    <Link className={styles["movie-card"]} href={`/movie/${id}`}>
      <div className={styles["movie-card__wrapper"]}>
        <Image
          src={IMAGE_W500 + poster_path}
          alt={title}
          className={styles["movie-card__poster"]}
          fill
          quality={100}
          sizes="100%"
        />
      </div>
      <div className={styles["content"]}></div>
    </Link>
  );
};

export default MovieCard;
