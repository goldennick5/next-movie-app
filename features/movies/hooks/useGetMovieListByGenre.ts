import { IMovieListByGenreResponse } from "../types";
import { getMovieListByGenre } from "@/features/movies/api";
import { useQuery } from "@tanstack/react-query";

export const useGetMovieListByGenre = (genres: number[]) => {
  return useQuery<IMovieListByGenreResponse, Error>({
    queryKey: ["movieListByGenre"],
    queryFn: () => getMovieListByGenre(genres),
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });
};
