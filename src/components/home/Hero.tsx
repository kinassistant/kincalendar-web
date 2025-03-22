import HeroBanner from "./HeroBanner";
import HeroHeading from "./HeroHeading";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="pt-[74px] md:pt-[160px] lg:pb-14 bg-gradient-to-t from-[#FFFFFF] via-[#FFEAD1] to-[#FFFFFF] px-6 xl:px-0 overflow-hidden">
        <HeroHeading />
        <HeroBanner />
      </div>
    </section>
  );
};

export default Hero;
