"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { FC } from "react";
import { useNowPlayingMovies } from "@/features/movies/hooks/useNowPlayingMovies";

const NowPlayingMoviesSwiper: FC = () => {
  const { data: movies, isLoading, error } = useNowPlayingMovies();

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1.9}
      loop={true}
      centeredSlides={true}
    >
      {movies?.results.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NowPlayingMoviesSwiper;
