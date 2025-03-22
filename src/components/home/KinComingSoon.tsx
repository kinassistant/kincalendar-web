import Image from "next/image";
import Link from "next/link";
import { ComingFeatures, planningList } from "../../data/coming-features-data";

const KinComingSoon: React.FC = () => {
  return (
    <div className="w-full  space-y-6 md:space-y-[60px]">
      <div className="space-y-5">
        <p className="text-neutral_800 font-semibold">
          Here’s what’s coming soon:
        </p>
        <div className="space-y-4">
          {ComingFeatures.map((feature) => (
            <div
              key={feature.id}
              className="w-full border flex items-start gap-2 border-neutral_500 rounded-xl p-4"
            >
              <Image src={feature.icon} alt={feature.title} className="mt-1" />
              <div className="space-y-2">
                <p className="text-lg font-semibold">{feature.title}</p>
                <p className="text-base font-medium text-neutral_800">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-neutral_800 font-semibold">
          Plus, we’re planning...
        </p>
        <ul className="space-y-5">
          {planningList.map((feature) => (
            <li
              key={feature.id}
              className="flex items-start md:items-center gap-2"
            >
              <Image src={feature.icon} alt="icon" className="mt-1 md:mt-0" />
              {feature.isLink ? (
                <Link
                  href={`${feature.link}`}
                  className="text-lg font-medium underline"
                >
                  {feature.text}
                </Link>
              ) : (
                <p className="text-lg font-medium">{feature.text}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KinComingSoon;
