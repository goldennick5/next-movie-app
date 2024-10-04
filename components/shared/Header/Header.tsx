import Logo from "@/components/shared/Logo";
import Navbar from "@/components/shared/Navbar";

const Header = () => {
  return (
    <header className="w-full h-[80px] flex justify-between items-center px-[100px] bg-transparent">
      <div className="flex items-center gap-[30px] h-full">
        <Logo />
        <Navbar />
      </div>
      <p className="text-white">Search</p>
    </header>
  );
};

export default Header;
