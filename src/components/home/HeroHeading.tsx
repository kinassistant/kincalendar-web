import Image from "next/image";
import Link from "next/link";
import apple from "../../assets/apple.svg";
import members from "../../assets/shared-members.svg";

const HeroHeading: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[678px] flex flex-col items-center">
        <div className="space-y-4 hidden md:block">
          <h2 className="text-[64px] font-semibold leading-[64px] text-center">
            The future of
          </h2>
          <div className="flex items-center gap-4">
            <h2 className="text-[64px] font-semibold leading-[64px] text-center">
              family
            </h2>
            <div className="relative">
              <Image src={members} alt="members" />
              <div className="absolute h-7 min-w-[119px] bottom-[-14px] left-1/2 transform -translate-x-1/2 px-2 rounded-lg bg-gradient-to-t to-[#FFFCF7] from-[#FFCE8F] border-[2px] border-white flex items-center justify-center">
                <p className="text-primary_800 text-sm font-semibold whitespace-nowrap">
                  Shared calendar
                </p>
              </div>
            </div>
            <h2 className="text-[64px] font-semibold leading-[64px] text-center">
              scheduling
            </h2>
          </div>
        </div>
        <div className="md:hidden">
          <div className="relative">
            <Image src={members} alt="members" className="w-[120px] h-12" />
            <div className="absolute h-6 min-w-[97px] bottom-[-14px] left-1/2 transform -translate-x-1/2 px-1 rounded-lg bg-gradient-to-t to-[#FFFCF7] from-[#FFCE8F] border-[2px] border-white flex items-center justify-center">
              <p className="text-primary_800 text-xs font-semibold whitespace-nowrap">
                Shared calendar
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden mt-6">
          <h3 className="text-[32px] font-semibold leading-[32px] text-center">
            The future of
          </h3>
          <h3 className="text-[32px] font-semibold leading-[32px] text-center">
            family scheduling
          </h3>
        </div>
        <p className="mt-4 md:mt-6 text-lg font-medium text-neutral_800 max-w-[382px] mx-auto text-center">
          Your all-in-one, voice-first calendar that makes managing family life
          a delight.
        </p>
        <Link
          href={
            "https://apps.apple.com/us/app/kin-family-calendar/id6714457940"
          }
          className="mt-6 h-16 px-4 py-2 bg-neutral_1000 hover:bg-neutral_900 border border-neutral_700 rounded-xl flex items-center gap-2"
        >
          <Image src={apple} alt="apple" />
          <div>
            <p className="text-xs font-semibold text-white">Download on the</p>
            <p className="text-lg font-semibold text-white">App store</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroHeading;
