import { INowPlayingMoviesResponse } from "@/features/movies/types";
import apiClient from "@/lib/apiClient";

export const getNowPlayingMovies =
  async (): Promise<INowPlayingMoviesResponse> => {
    const response = await apiClient.get<INowPlayingMoviesResponse>(
      "/movie/now_playing"
    );
    return response.data;
  };