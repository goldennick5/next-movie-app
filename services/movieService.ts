import { INowPlayingMoviesResponse } from "@/features/movies/types";
import apiClient from "@/lib/apiClient";

console.log(process.env.NEXT_IMDB_ACCESS_TOKEN);

export const getNowPlayingMovies =
  async (): Promise<INowPlayingMoviesResponse> => {
    const response = await apiClient.get<INowPlayingMoviesResponse>(
      "/movie/now_playing"
    );
    return response.data;
  };