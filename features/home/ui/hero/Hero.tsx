"use client";

import Carousel from "@/components/shared/carousel/Carousel";
import { FC } from "react";
import HeroSlide from "./slide/HeroSlide";
import styles from "./styles.module.scss";
import { useNowPlayingMovies } from "@/features/home/hooks/useNowPlayingMovies";

const Hero: FC = () => {
  const { data: movies, isLoading, error } = useNowPlayingMovies();

  return (
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
  );
};

export default Hero;
