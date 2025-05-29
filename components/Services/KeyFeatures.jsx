"use client";
import Button from "../../utils/Button";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
const KeyFeatures = ({ data, title, desc }) => {
  return (
    <div
      id="key-features"
      className="max-w-[1440px] mx-auto px-16 py-20 rounded-[40px] bg-[#E7E7FF]/20 mb-[68px]"
    >
      <div className="flex justify-between items-end">
        <div>
          <Tag title={"Key Features"} />
          <Heading title={title} className={"!mb-6 max-w-[1012px] !text-[#222A5B] tracking-[-2px]"} />
          <p className="font-normal font-dmSans text-base text-[#374049] max-w-[915px]">
            {desc}
          </p>
        </div>
        <div>
          <Button
            variant="custom"
            style={"!min-w-[162px] !bg-transparent"}
            name="Contact Us"
            path="/Contact-Us"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-[60px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="col-span-3 p-4 rounded-2xl border border-[#FFF0E0] bg-white"
          >
            <Image src={item.icon} alt={item.title} width={32} height={32} />
            <div className="mt-6">
              <h3 className="mb-2 font-dmSans font-bold text-xl  !leading-6 text-[#171A1D] tracking-[-0.5px]">
                {item.title}
              </h3>
              <p className="font-dmSans font-normal text-base text-[#374049]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
