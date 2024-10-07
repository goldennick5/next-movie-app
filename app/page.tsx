import CrimeCategory from "@/components/home/crime/CrimeCategory";
import { FC } from "react";
import FamilyCategory from "@/components/home/for-family/FamilyCategory";
import GenresList from "@/components/home/genres/GenresList";
import Hero from "@/components/home/hero/Hero";
import RomanceCategory from "@/components/home/romance/RomanceCategory";
import styles from "./page.module.scss";

const Home: FC = () => {
  return (
    <div className={styles["home-page-wrapper"]}>
      <Hero />
      <GenresList />
      <FamilyCategory />
      <CrimeCategory />
      <RomanceCategory />
    </div>
  );
};

export default Home;
