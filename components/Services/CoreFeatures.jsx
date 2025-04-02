"use client";
import { useState } from "react";
import Button from "../../utils/Button";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";

const CoreFeatures = ({ data, title, desc, img }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="core-features"
      className="max-w-[1440px] mx-auto p-20 grid grid-cols-12 items-end gap-20 rounded-[40px]"
    >
      <div className="col-span-6">
        <Tag title={"Core Features"} />
        <Heading title={title} />
        <p className="py-6 font-jakarta font-normal text-lg !leading-8 text-[#374049] max-w-[593px]">
          {desc}
        </p>
        <Button variant="custom" style={"!min-w-[162px]"} name="Contact Us" path="/Contact-Us" />

        <div className="mt-[60px] flex flex-col gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border border-[#E0EAFF] cursor-pointer transition-all`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center gap-4">
                <div>
                  <Image src={item.icon} alt="collectionIcon" />
                </div>
                <div>
                  <h3 className="font-bold font-urbanist text-xl !leading-6 text-[#171A1D]">
                    {item.title}
                  </h3>
                </div>                        
              </div>                                                                       

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-[160px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-jakarta text-base font-normal text-[#374049]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>                                                 
      </div>

      <div className="col-span-6">
        <Image src={img} className="w-full h-[584px]" alt="CoreFeatures" />
      </div>
    </div>
  );
};

export default CoreFeatures;
