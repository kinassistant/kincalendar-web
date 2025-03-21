import Image from "next/image";
import { features } from "../../data/features-data";

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-2 lg:gap-6">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="md:space-y-4 flex flex-row  md:flex-col items-center md:justify-center gap-4 md:gap-0"
        >
          <div className="w-[60px] h-[60px] md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-primary_800 border-[1.5px] md:border-[2px] border-primary_0 icon-box-shadow flex items-center justify-center">
            <Image
              src={feature.icon}
              alt={feature.alt}
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            />
          </div>
          <p className="text-lg lg:text-xl font-semibold text-center">
            {feature.text}{" "}
            <span className="text-primary_900">{feature.highlight}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
