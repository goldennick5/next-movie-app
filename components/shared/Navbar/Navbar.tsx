import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="flex g-[30px]">
      <li>
        <Link href="/">Main</Link>
      </li>
      <li>
        <Link href="/movies">Movies</Link>
      </li>
      <li>
        <Link href="/series">Series</Link>
      </li>
      <li>
        <Link href="/cartoons">Cartoons</Link>
      </li>
    </ul>
  );
};

export default Navbar;
