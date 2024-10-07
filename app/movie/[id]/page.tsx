"use client";

import ContentHero from "@/components/shared/content-hero/ContentHero";
import Spinner from "@/components/shared/spinner/Spinner";
import styles from "./styles.module.scss";
import { useMovieDetails } from "@/features/movies/hooks/useGetMovieDetails";

const Movie = ({
  params,
}: {
  params: {
    id: number;
  };
}) => {
  const { data: movie, isLoading, error } = useMovieDetails(params.id);
  return isLoading ? (
    <Spinner size={70} color="white" />
  ) : (
    <section className="container">
      <ContentHero item={movie} />
    </section>
  );
};

export default Movie;
