"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const routeNames: string[] = ["Main", "Movies", "Series", "Cartoons"];
  const routes: string[] = ["/", "/movies", "/series", "/cartoons"];

  const currentPathname = usePathname();

  return (
    <ul className="flex h-full items-center gap-[20px]">
      {routes.map((href, index) => (
        <li key={index} className="flex items-center h-full relative group">
          <Link
            href={href}
            className={clsx(
              "h-full text-gray-400 text-[15px] font-bold px-2 flex items-center relative transition-colors duration-300",
              {
                "!text-white": currentPathname === href,
                "hover:text-white": currentPathname !== href,
              }
            )}
          >
            {routeNames[index]}
            <span
              className={clsx(
                "absolute top-[60px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-current-nav-link transition-all duration-300",
                {
                  "w-full": currentPathname === href,
                  "group-hover:w-full": currentPathname !== href,
                }
              )}
            ></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
