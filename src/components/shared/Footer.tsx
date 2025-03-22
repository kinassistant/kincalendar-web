import Image from "next/image";
import Link from "next/link";
import Flag from "react-world-flags";
import logo from "../../assets/logo.svg";
import { socialLinks } from "../../data/social-link";

const Footer: React.FC = () => {
  return (
    <footer className="px-6 lg:px-0  max-w-[792px] mx-auto border-t border-neutral_400 pb-8">
      <div className="pt-8">
        <div className="space-y-3 max-w-[316px]">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <p className="text-base font-medium text-neutral_800">
            Smart planning for busy families, powered by voice.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 gap-6">
          <div className="flex items-center gap-3 order-2 md:order-1">
            <p className="font-medium">Made with love in Seattle </p>
            <Flag code="US" width={24} height={24} />
          </div>
          <div className="flex items-center gap-4 order-1 md:order-2">
            {socialLinks.map((items, index) => (
              <Link
                key={index}
                href={items.href}
                className={`w-[24.5px] h-[24.5px] bg-neutral_900 hover:bg-neutral_800 flex justify-center ${
                  items.alt === "fIcon"
                    ? "rounded-full items-end"
                    : "rounded-md items-center pl-[.5px]"
                }`}
              >
                <Image src={items.icon} alt={items.alt} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8 gap-6">
          <p className="text-sm font-medium text-neutral_800">
            © Copyright 2025 FUNGEE LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href={"./terms-and-conditions"}
              className="text-sm font-medium underline text-neutral_800"
            >
              Terms & conditions
            </Link>
            <Link
              href={"./privacy-policy"}
              className="text-sm font-medium underline text-neutral_800"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
