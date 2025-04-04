import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";

const NavbarSm: React.FC = () => {
  return (
    <div className="md:hidden flex items-center justify-between px-6 mt-[30px]">
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
      <Link
        href="https://apps.apple.com/us/app/kin-family-calendar/id6714457940"
        className="h-7 px-2 flex items-center justify-center rounded-lg bg-neutral_1000 text-white text-sm font-semibold hover:bg-neutral_900 duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download on iOS
      </Link>
    </div>
  );
};

export default NavbarSm;
