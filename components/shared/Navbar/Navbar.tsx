import Link from "next/link";

const Navbar = () => {
  const routeNames = ["Main", "Movies", "Series", "Cartoons"];

  return (
    <ul className="flex h-full items-center gap-[30px]">
      {["/", "/movies", "/series", "/cartoons"].map((href, index) => (
        <li key={index} className="h-full flex items-center relative group">
          <Link
            href={href}
            className="text-white text-[15px] px-2 h-full flex items-center relative"
          >
            {routeNames[index]}
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-blue-500 via-yellow-200 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
