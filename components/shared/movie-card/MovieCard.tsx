import { IMovie } from "@/features/movies/types";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface IMovieCardProps {
  item: IMovie;
}

const MovieCard = (item: IMovieCardProps) => {
  const { title, poster_path } = item.item;
  return (
    <Link className={styles["movie-card"]} href="https://google.com">
      <div className={styles["movie-card__wrapper"]}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className={styles["movie-card__poster"]}
          fill
          quality={100}
          sizes="100%"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
