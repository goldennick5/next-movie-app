import { FC } from "react";
import Hero from "@/components/home/hero/Hero";
import styles from "./page.module.scss";

const Home: FC = () => {
  return (
    <div className={styles["home-page-wrapper"]}>
      <Hero />
    </div>
  );
};

export default Home;
