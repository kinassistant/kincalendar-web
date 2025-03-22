import Image from "next/image";
import Link from "next/link";
import apple2 from "../../assets/apple2.svg";

const FreeAdopters: React.FC = () => {
  return (
    <div className="text-center py-[60px] md:py-[120px]">
      <h3 className="text-2xl md:text-[32px] md:leading-10 font-semibold text-[#020617] text-center">
        KIN is free for the first 100 adopters
      </h3>

      <div className="mt-6 md:mt-10 border-[6px] border-[#FFEAD1] rounded-3xl max-w-[656px] mx-auto">
        <div className="m-[3px] bg-gradient-to-t to-[#FF8500] via-[#F66A00] from-[#F66A00] rounded-2xl py-12 px-4">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-white text-[32px] leading-10 font-semibold max-w-[418px] mx-auto text-center">
              Ready to Simplify Your Family’s Schedule?
            </h4>
            <p className="text-white text-lg font-medium leading-6 mt-4 max-w-[430px] mx-auto text-center">
              Don’t miss your chance to join the family revolution in
              scheduling.
            </p>
            <Link
              href={
                "https://apps.apple.com/us/app/kin-family-calendar/id6714457940"
              }
              className="mt-6 font-semibold text-base left-6 bg-white text-black py-4 px-6 rounded-lg flex items-center justify-center gap-x-2 mx-auto shadow-md w-full sm:w-auto hover:bg-[#F5F8FA] duration-200"
            >
              <Image src={apple2} alt="apple" /> Download KIN for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAdopters;
