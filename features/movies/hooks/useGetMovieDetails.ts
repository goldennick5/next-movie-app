import { IMovieDetailsResponse } from "@/features/movies/types";
import { getMovieDetails } from "@/features/movies/api";
import { useQuery } from "@tanstack/react-query";

export const useMovieDetails = (id: number) => {
  return useQuery<IMovieDetailsResponse, Error>({
    queryKey: ["movieDetails", id],
    queryFn: () => getMovieDetails(id),
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });
};
