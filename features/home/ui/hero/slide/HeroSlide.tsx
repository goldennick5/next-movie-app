import type { IMovie } from "@/features/home/types";
import Image from "next/image";
import Link from "next/link";
import { MovieRating } from "@/components/shared/movie-rating/MovieRating";
import { Title } from "@/components/shared/title/Title";
import { formatVoteAverage } from "@/utils/formatVoteAverage";
import { genres } from "@/constants/genres";
import styles from "./styles.module.scss";

interface SlideProps {
  item: IMovie;
}

const HeroSlide = ({ item }: SlideProps) => {
  const { id, title, backdrop_path, vote_average, genre_ids } = item;

  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <Title as="h2" className={styles.title} size="small">
          {title}
        </Title>
        <div className={styles.bottom}>
          <MovieRating className={styles.rating}>
            {formatVoteAverage(vote_average)}
          </MovieRating>
          <span className={styles.genre}>
            {genres
              .filter((genre) => genre_ids.includes(genre.id))
              .map((genre) => genre.name)
              .join(", ")}
          </span>
        </div>
      </div>
      <Image
        alt={title}
        className={styles.image}
        fill
        priority
        quality={100}
        sizes="100%"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
      />
    </div>
  );
};

export default HeroSlide;
