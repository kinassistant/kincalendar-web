"use client";
import Image from "next/image";
import leftICon from "../../assets/left-icon.svg";
import soundWave from "../../assets/sound-wave.svg";
import FamilySetup from "./FamilySetup";

const FamilyScheduling: React.FC = () => {
  return (
    <section className="max-w-[792px] mx-auto px-6 lg:px-0">
      <div className="space-y-8 md:space-y-10">
        <h4 className="text-2xl md:text-[32px] md:leading-10 font-semibold sm:text-center">
          KIN redefines family scheduling
        </h4>
        <div className="grid md:grid-cols-2 gap-6 h-full">
          <div className="bg-gradient-to-b from-[#FFFCF7] to-[#F9FAFB] border border-neutral_400 rounded-xl">
            <div className="pt-[49px] pl-[42px] md:pl-[47px] space-y-4">
              {/* video card */}
              <div className="relative h-[42px] w-[248px] flex items-center justify-center rounded-[9px] overflow-hidden">
                {/* Video Background */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 h-full w-full object-cover"
                >
                  <source src="/bg-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#585B66]/60 to-[#020617]/60 backdrop-blur-[3px]"></div>

                {/* Text Content */}
                <div className="relative z-10 text-xs font-medium text-white flex items-center justify-center">
                  I’m listening...
                </div>
              </div>

              {/* video card end */}

              <div className="h-[45px] w-[261px] bg-gradient-to-b to-[#F5F8FA] from-[#FFFCF7] rounded-[60px] border border-neutral_500 flex items-center justify-between pl-[15px] pr-[5px] py-[5px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-[7px] h-[7px] bg-primary_1000 rounded-full"></div>
                  <p className="text-xs font-medium">0:00</p>
                </div>
                <button className="flex items-center gap-[3px] text-[10px] font-medium text-neutral_700">
                  Slide to cancel
                  <Image src={leftICon} alt="leftICon" />
                </button>
                <div className="w-[33.5px] h-[33.5px] rounded-full flex items-center justify-center bg-gradient-to-b from-[#FFBF70] to-[#FF9212]">
                  <Image src={soundWave} alt="soundWave" />
                </div>
              </div>
            </div>
            <div className="pt-7 px-5 pb-6 space-y-2">
              <p className="text-lg font-semibold">Hold to talk, tap to type</p>
              <p className="text-neutral_800 font-medium">
                Create and edit events effortlessly with your voice, or tap to
                type when needed.
              </p>
            </div>
          </div>
          <div>
            <FamilySetup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyScheduling;
