"use client";
import Image from "next/image";
import { useState } from "react";
import plusIcon from "../../assets/plus.svg";

const FamilySetup: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("#F63D68");
  const colors = [
    "#1570EF",
    "#5925DC",
    "#12B76A",
    "#F63D68",
    "#FFA131",
    "#7CD4FD",
  ];
  const shadowStyles: Record<string, string> = {
    "#1570EF": "0 0 0 3px #1570EF",
    "#5925DC": "0 0 0 3px #5925DC",
    "#12B76A": "0 0 0 3px #12B76A",
    "#F63D68": "0 0 0 3px #ffbdc7",
    "#FFA131": "0 0 0 3px #FFA131",
    "#7CD4FD": "0 0 0 3px #7CD4FD",
  };
  return (
    <div className="bg-gradient-to-b from-[#FFFCF7] to-[#F9FAFB] border border-neutral_400 rounded-xl flex flex-col justify-between h-full">
      <div className="px-5 pt-[54px]">
        <p className="text-sm font-medium">Your family (6)</p>
        <div className="w-full h-[1px] bg-neutral_500 mt-2 mb-4"></div>
        <div className="flex items-center gap-3">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-full border border-white cursor-pointer`}
              style={{
                backgroundColor: color,
                boxShadow:
                  selectedColor === color
                    ? (shadowStyles[color] as string)
                    : "none",
              }}
              onClick={() => setSelectedColor(color)}
            ></div>
          ))}
          <div
            className="w-[30px] h-[30px] md:w-[34px] md:h-[34px] rounded-full border border-[#9096A3] flex items-center justify-center cursor-pointer"
            onClick={() => console.log("Add new color")}
          >
            <Image src={plusIcon} alt="plusIcon" />
          </div>
        </div>
      </div>
      <div className="p-5 space-y-2 max-w-[208px]">
        <p className="text-lg font-semibold">Family setup</p>
        <p className="text-neutral_800 font-medium">
          Create a Family and invite members to join.
        </p>
      </div>
    </div>
  );
};

export default FamilySetup;
