import FeatureGrid from "./FeatureGrid";

const ModernFamilies: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] via-[#FFEAD180] to-[#FFFFFF]">
      <div className="max-w-[792px] mx-auto px-6 lg:px-0 pt-9 md:pt-20 md:pb-20 space-y-8 md:space-y-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h4 className="section-title">Designed for modern families</h4>
          <p className="section-sub-title max-w-[426px]">
            KIN goes beyond fridge calendars and clunky apps and is perfect for:
          </p>
        </div>

        <FeatureGrid />
      </div>
    </section>
  );
};

export default ModernFamilies;
