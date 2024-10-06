import { INowPlayingMoviesResponse } from "../types";
import { getNowPlayingMovies } from "@/services/movieService";
import { useQuery } from "@tanstack/react-query";

export const useNowPlayingMovies = () => {
  return useQuery<INowPlayingMoviesResponse, Error>({
    queryKey: ['nowPlayingMovies'],
    queryFn: getNowPlayingMovies,
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });
};
