import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Online streaming platform logo"
        width="70"
        height="70"
      />
    </Link>
  );
};

export default Logo;
