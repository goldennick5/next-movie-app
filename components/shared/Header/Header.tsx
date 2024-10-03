import Navbar from "@/components/shared/Navbar"

const Header = () => {
  return (
    <header className="w-full flex justify-between px-[30px] py-[15px]">
      <Navbar />

      <p>Search</p>
    </header>
  );
};

export default Header;
