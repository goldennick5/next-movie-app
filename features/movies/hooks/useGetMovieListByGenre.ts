import { IMovieListByGenreResponse } from "@/features/movies/types";
import { getMovieListByGenre } from "@/features/movies/api";
import { useQuery } from "@tanstack/react-query";

export const useGetMovieListByGenre = (genres: number[]) => {
  return useQuery<IMovieListByGenreResponse, Error>({
    queryKey: ["movieListByGenre", genres],
    queryFn: () => getMovieListByGenre(genres),
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });
};
