"use client";

import Image from "next/image";
import Link from "next/link";
import apple from "../../assets/apple.svg";
import members from "../../assets/shared-members.svg";
import { useEffect } from "react";

const HeroHeading: React.FC = () => {
  useEffect(() => {
    // This is a placeholder for any future client-side functionality
    // We're keeping the useEffect to maintain the "use client" directive
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[678px] flex flex-col items-center">
        {/* Hidden h1 for SEO - only visible to screen readers */}
        <h1 className="sr-only">The Delightful Shared Family Calendar App</h1>

        {/* Desktop View */}
        <div className="hidden md:block space-y-4">
          <div className="text-[64px] font-semibold leading-[64px] text-center">
            <span className="block mb-4">The Delightful</span>
            <div className="flex items-center gap-4">
              <span>Family</span>
              <div className="relative">
                <Image src={members} alt="members" />
                <div className="absolute h-7 min-w-[119px] bottom-[-14px] left-1/2 transform -translate-x-1/2 px-2 rounded-lg bg-gradient-to-t to-[#FFFCF7] from-[#FFCE8F] border-[2px] border-white flex items-center justify-center">
                  <p className="text-primary_800 text-sm font-semibold whitespace-nowrap">
                    Family Calendar
                  </p>
                </div>
              </div>
              <span>Calendar</span>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="relative flex justify-center">
            <Image src={members} alt="members" className="w-[120px] h-12" />
            <div className="absolute h-6 min-w-[97px] bottom-[-14px] left-1/2 transform -translate-x-1/2 px-1 rounded-lg bg-gradient-to-t to-[#FFFCF7] from-[#FFCE8F] border-[2px] border-white flex items-center justify-center">
              <p className="text-primary_800 text-xs font-semibold whitespace-nowrap">
                Family Calendar
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-[32px] font-semibold leading-[32px] text-center">
              <div>The Delightful</div>
              <div>Family Calendar</div>
            </div>
          </div>
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
          target="_blank"
          rel="noopener noreferrer"
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
