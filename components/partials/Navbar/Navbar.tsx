"use client";

import Link from "next/link";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const routeNames: string[] = ["Main", "Movies"];
  const routes: string[] = ["/", "/movies"];

  const currentPathname = usePathname();

  return (
    <ul className={styles['navbar']}>
      {routes.map((href, index) => (
        <li key={index} className={styles["navbar__item"]}>
          <Link
            href={href}
            className={clsx(
              styles["navbar__link"],
              currentPathname === href
                ? styles["navbar__link--active"]
                : styles["navbar__link--inactive"]
            )}
          >
            {routeNames[index]}
            <span
              className={clsx(
                styles["navbar__underline"],
                currentPathname === href
                  ? styles["navbar__underline--active"]
                  : styles["navbar__underline--inactive"]
              )}
            ></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
