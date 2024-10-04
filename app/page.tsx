import { FC } from "react";
import NowPlayingMoviesSwiper from "@/features/movies/components/NowPlayingMoviesSwiper";

const Home: FC = () => {
  return (
    <div className="mt-[10px]">
      <NowPlayingMoviesSwiper />
    </div>
  );
};

export default Home;
