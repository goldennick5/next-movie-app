import {
  IMovieListByGenreResponse,
  INowPlayingMoviesResponse,
} from "@/features/movies/types";

import apiClient from "@/lib/api/apiClient";

export const getNowPlayingMovies =
  async (): Promise<INowPlayingMoviesResponse> => {
    const response =
      await apiClient.get<INowPlayingMoviesResponse>("/movie/now_playing");
    return response.data;
  };

export const getMovieListByGenre = async (
  genres: number[]
): Promise<IMovieListByGenreResponse> => {
  const response = await apiClient.get<IMovieListByGenreResponse>(
    `discover/movie?with_genres=${genres}`
  );
  return response.data;
};
