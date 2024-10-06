import Logo from "@/components/partials/logo/Logo";
import Navbar from "@/components/partials/navbar/Navbar";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={clsx(styles.header, "container")}>
      <div className={styles["header__left-part"]}>
        <div className={styles["header__logo"]}>
        <Logo />
        </div>
        <Navbar />
      </div>
      <div className={styles["header__right-part"]}>Search</div>
    </header>
  );
};

export default Header;
