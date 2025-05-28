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
      id="why-choose"
      className="max-w-[1440px] mx-auto p-20 grid grid-cols-12 items-center gap-20 rounded-[40px]"
    >
      <div className="col-span-6">
        <Image src={img} className="object-cover" alt="Why Choose Us" />
      </div>

      <div className="col-span-6">
        <Tag title={"Why Choose Us"} />
        <Heading title={title} />
        <p className="py-6 font-jakarta font-normal text-lg !leading-8 text-[#374049] max-w-[593px]">
          {desc}
        </p>
        <Button
          variant="custom"
          style={"!min-w-[162px]"}
          name="Contact Us"
          path="/Contact-Us"
        />

        <div className="mt-[60px] flex flex-col gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-[#E0EAFF] cursor-pointer transition-all  ${
                  openIndex === index
                    ? "px-6 py-4"
                    : "p-6"
                } `}
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="font-bold font-urbanist text-xl text-[#171A1D]">
                {item.title}
              </h3>

              <div
                className={`transition-all duration-200 cubic-bezier(0.4, 0, 0.68, 0.06) overflow-hidden ${
                  openIndex === index
                    ? "max-h-12 opacity-100 mt-2"
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
    </div>
  );
};

export default CoreFeatures;
