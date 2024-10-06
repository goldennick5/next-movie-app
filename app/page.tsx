import { FC } from "react";
import GenresList from "@/components/home/genres/GenresList";
import Hero from "@/components/home/hero/Hero";
import styles from "./page.module.scss";

const Home: FC = () => {
  return (
    <div className={styles["home-page-wrapper"]}>
      <Hero />
      <GenresList />
    </div>
  );
};

export default Home;
