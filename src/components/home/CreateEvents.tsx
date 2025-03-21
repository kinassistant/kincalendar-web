import Image from "next/image";
import { eventsData } from "../../data/events-data";

const CreateEvents: React.FC = () => {
  return (
    <section id="how-it-works" className="max-w-[792px] mx-auto px-6 lg:px-0">
      <div className="pt-11 pb-5 md:pt-[120px] md:pb-[60px] space-y-[40px] md:space-y-[60px]">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="w-full flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-[60px]"
          >
            <div
              className={`max-w-max md:max-w-[315px] space-y-2 ${
                event.title === "Edit events" ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Image src={event.icon} alt={event.title} />
                <p className="text-base font-semibold text-primary_800">
                  {event.title}
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl md:text-[32px] md:leading-[40px] font-semibold">
                  {event.heading}
                </h4>
                <p className="text-lg font-medium text-neutral_800">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Video part */}
            <div
              className={`bg-[#F7F7F7] w-full md:w-auto rounded-xl flex md:flex-none items-center justify-center ${
                event.title === "Edit events" ? "md:order-1" : "md:order-2"
              }`}
            >
              <video
                src={event.video}
                autoPlay
                loop
                muted
                playsInline
                className="sm:max-w-[416px] rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreateEvents;
