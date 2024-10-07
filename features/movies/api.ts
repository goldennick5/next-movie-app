import {
  IMovieDetailsResponse,
  IMovieImagesResponse,
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
    `/discover/movie?with_genres=${genres}`
  );
  return response.data;
};

export const getMovieDetails = async (
  id: number
): Promise<IMovieDetailsResponse> => {
  const response = await apiClient.get<IMovieDetailsResponse>(`/movie/${id}`);
  return response.data;
};

export const getMovieImages = async (
  id: number
): Promise<IMovieImagesResponse> => {
  const response = await apiClient.get<IMovieImagesResponse>(
    `/movie/${id}/images`
  );
  return response.data;
};
