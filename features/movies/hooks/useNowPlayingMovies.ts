import { INowPlayingMoviesResponse } from "@/features/movies/types";
import { getNowPlayingMovies } from "@/features/movies/api";
import { useQuery } from "@tanstack/react-query";

export const useNowPlayingMovies = () => {
  return useQuery<INowPlayingMoviesResponse, Error>({
    queryKey: ['nowPlayingMovies'],
    queryFn: getNowPlayingMovies,
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });
};
