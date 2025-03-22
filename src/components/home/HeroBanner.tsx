import Image from "next/image";
import BannerMobile from "../../assets/banner-mobile.png";
import heroBanner from "../../assets/hero-banner.png";
import mobileCard4x from "../../assets/mobile-card-4x.webp";

const HeroBanner: React.FC = () => {
  return (
    <div>
      <div className="hidden lg:block  xl:pl-[80px] [@media(min-width:1300px)]:pl-[80px] [@media(min-width:1500px)]:pl-[160px] [@media(min-width:1700px)]:pl-[250px]  [@media(min-width:1800px)]:pl-[300px] [@media(min-width:1900px)]:pl-[365px] pt-4 px-6 xl:px-0">
        <div className="max-w-[1187px] h-[841px] xl:h-[900px] 2xl:h-[841px] relative mt-12">
          <div className="mx-auto w-[841px] h-[841px] xl:h-[900px] 2xl:h-[841px]">
            <div className="relative flex justify-center items-center h-[841px] xl:h-[900px] 2xl:h-[841px]">
              <div className="absolute w-[765px] h-[765px] rounded-full bg-[#FFDCB04D] animate-zoom circle-third-shadow opacity-80"></div>
              <div className="absolute w-[597px] h-[597px] rounded-full bg-[#FFA131] animate-zoom circle-one-shadow opacity-10"></div>
              <div className="absolute w-[450px] h-[450px] circle-one-shadow rounded-full bg-gradient-to-t to-[#FF8500] from-[#FFA131] opacity-10 animate-zoom"></div>
            </div>
          </div>
          <div className="absolute top-[50px] left-[-40px] xl:left-[-40px] z-30">
            <Image src={heroBanner} alt="heroBanner" />
          </div>
        </div>
      </div>
      <div className="mt-[30px] w-full h-[780px] lg:hidden flex justify-center items-center relative">
        <div className="relative flex justify-center items-center h-[800px]">
          <div className="absolute w-[487px] h-[487px] rounded-full bg-[#FFDCB0]/[30%] animate-zoom circle-third-sm-shadow opacity-80"></div>
          <div className="absolute  w-[379px] h-[379px] rounded-full bg-[#FFA131] animate-zoom circle-shadow-sm-one opacity-10"></div>
          <div className="absolute  w-[286px] h-[286px] circle-shadow-sm-one  rounded-full bg-gradient-to-t to-[#FF8500] from-[#FFA131] opacity-10 animate-zoom"></div>
        </div>

        <div className="absolute top-[160px] left-1/2 -translate-x-1/2">
          <Image
            src={BannerMobile}
            alt="BannerMobile"
            className="min-w-[230px] h-full"
          />
        </div>
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2">
          <Image
            src={mobileCard4x}
            alt="bannerCard"
            className="min-w-[320px] h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
