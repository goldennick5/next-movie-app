"use client";

import Category from "@/components/shared/category/Category";
import { IMovie } from "@/features/movies/types";
import MovieCard from "@/components/shared/movie-card/MovieCard";
import Spinner from "@/components/shared/spinner/Spinner";
import { useGetMovieListByGenre } from "@/features/movies/hooks/useGetMovieListByGenre";

const FamilyCategory = () => {
  const { data: movies, error } = useGetMovieListByGenre([10751]);
  return (
    <Category>
      <Category.Title>Family movies</Category.Title>
      <Category.Carousel
        items={movies?.results}
        renderItem={(item: IMovie) => <MovieCard item={item} />}
      />
    </Category>
  );
};

export default FamilyCategory;
