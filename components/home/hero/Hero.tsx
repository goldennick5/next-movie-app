"use client";

import { FC, Fragment } from "react";

import Carousel from "@/components/shared/carousel/Carousel";
import HeroSlide from "./slide/HeroSlide";
import Spinner from "@/components/shared/spinner/Spinner";
import { useNowPlayingMovies } from "@/features/movies/hooks/useNowPlayingMovies";

const Hero: FC = () => {
  const { data: movies, isLoading, error } = useNowPlayingMovies();

  return (
    <Fragment>
      {isLoading ? (
        <Spinner color="white" />
      ) : (
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
      )}
    </Fragment>
  );
};

export default Hero;
