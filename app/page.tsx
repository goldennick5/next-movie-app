import { FC } from "react";
import Hero from "@/features/home/ui/hero/Hero";
import styles from "./page.module.scss";

const Home: FC = () => {
  return (
    <div className={styles["home-page-wrapper"]}>
      <Hero />
    </div>
  );
};

export default Home;
