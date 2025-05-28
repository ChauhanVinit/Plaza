"use client";
import Button from "../../utils/Button";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
const WhenNeeded = ({ data, title, desc }) => {
  return (
    <div
      id="when-needed-you"
      className="max-w-[1440px] mx-auto px-16 py-20 rounded-[40px] bg-[#E7E7FF]/20 mb-[68px]"
    >
      <div className="flex justify-between items-end">
        <div>
          <Tag title={"When do we need you"} />
          <Heading title={title} className={"!mb-6 max-w-[915px]"} />
          <p className="font-jakarta font-normal text-lg !leading-8 text-[#374049] max-w-[915px]">
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
              <h3 className="mb-2 font-urbanist font-bold text-xl  !leading-6 text-[#171A1D]">
                {item.title}
              </h3>
              <p className="font-jakarta font-normal text-base text-[#374049]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhenNeeded;
