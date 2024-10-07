"use client";

import Category from "@/components/shared/category/Category";
import { IMovie } from "@/features/movies/types";
import MovieCard from "@/components/shared/movie-card/MovieCard";
import styles from "./styles.module.scss";
import { useGetMovieListByGenre } from "@/features/movies/hooks/useGetMovieListByGenre";

const RomanceCategory = () => {
  const { data: movies, error } = useGetMovieListByGenre([10749]);
  return (
    <Category containerClass={styles["romance-category-container"]}>
      <Category.Title>Romance movies</Category.Title>
      <Category.Carousel
        items={movies?.results}
        renderItem={(item: IMovie) => <MovieCard item={item} />}
      />
    </Category>
  );
};

export default RomanceCategory;
