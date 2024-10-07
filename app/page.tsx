import { FC } from "react";
import FamilyCategory from "@/components/home/for-family/FamilyCategory";
import GenresList from "@/components/home/genres/GenresList";
import Hero from "@/components/home/hero/Hero";
import styles from "./page.module.scss";

const Home: FC = () => {
  return (
    <div className={styles["home-page-wrapper"]}>
      <Hero />
      <GenresList />
      <FamilyCategory />
    </div>
  );
};

export default Home;
