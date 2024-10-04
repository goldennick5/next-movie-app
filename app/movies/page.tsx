"use client";

import { useNowPlayingMovies } from "@/features/movies/hooks/useNowPlayingMovies";

const Movies = () => {
  const { data: movies, isLoading, error } = useNowPlayingMovies();

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Error loading movies...</div>;
  return (
    <div>
      <h1>Movies page</h1>
      {movies?.results.map((movie) => (
        <div key={movie.id}>
          <h3 className="text-white">{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Movies;
