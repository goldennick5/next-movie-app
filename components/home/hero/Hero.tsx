"use client";

import Carousel from "@/components/shared/carousel/Carousel";
import { FC } from "react";
import HeroSlide from "./slide/HeroSlide";
import { useNowPlayingMovies } from "@/features/movies/hooks/useNowPlayingMovies";

const Hero: FC = () => {
  const { data: movies, isLoading, error } = useNowPlayingMovies();

  return (
    <section>
      <Carousel
        items={movies?.results || []}
        renderItem={(movie) => <HeroSlide item={movie} />}
        autoplay={true}
        options={{
          spaceBetween: 20,
          slidesPerView: 1.75,
          loop: true,
          centeredSlides: true,
        }}
        navigation
      />
    </section>
  );
};

export default Hero;
