import { INowPlayingMoviesResponse } from "@/features/home/types";
import apiClient from "@/lib/apiClient";

export const getNowPlayingMovies =
  async (): Promise<INowPlayingMoviesResponse> => {
    const response = await apiClient.get<INowPlayingMoviesResponse>(
      "/movie/now_playing"
    );
    return response.data;
  };