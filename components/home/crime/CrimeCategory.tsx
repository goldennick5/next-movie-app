"use client";

import Category from "@/components/shared/category/Category";
import { IMovie } from "@/features/movies/types";
import MovieCard from "@/components/shared/movie-card/MovieCard";
import Spinner from "@/components/shared/spinner/Spinner";
import styles from "./styles.module.scss";
import { useGetMovieListByGenre } from "@/features/movies/hooks/useGetMovieListByGenre";

const CrimeCategory = () => {
  const { data: movies, error } = useGetMovieListByGenre([80]);
  return (
    <Category containerClass={styles["crime-category-container"]}>
      <Category.Title>Crime movies</Category.Title>
      <Category.Carousel
        items={movies?.results}
        renderItem={(item: IMovie) => <MovieCard item={item} />}
      />
    </Category>
  );
};

export default CrimeCategory;
