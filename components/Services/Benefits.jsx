"use client";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";


const Benefits = ({ data, title, desc, image }) => {
  return (
    <div id="benefits" className="w-full max-w-[1440px] mx-auto mb-[68px] p-16 rounded-[40px] bg-[#EDF5FF]/50">
      <Tag title={"Benefits"} />
      <Heading title={title} className={"!mb-6"} />
      <p className="font-jakarta font-normal text-lg !leading-8 text-[#374049]">
        {desc}
      </p>

      <div className="mt-[60px] flex gap-[74px]">
        <div className="flex flex-col gap-[60px]">
          {data.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl border border-[#E8E8E8]"
            >
              <div className="w-12 h-12  inline-flex items-center justify-center">
                <Image src={item.icon} alt={item.title} className="w-10 h-10" />
              </div>
              <h3 className="mt-5 mb-2 font-urbanist text-xl !leading-6 font-bold text-[#171A1D] max-w-[284px]">
                {item.title}
              </h3>
              <p className="font-jakarta text-base font-normal text-[#374049] max-w-[284px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grow px-4">
          <Image src={image} alt="BenefitsIMG" className="object-cover" />
        </div>

        <div className="flex flex-col gap-[60px]">
          {data.slice(2).map((item, index) => (
            <div
              key={index + 2}
              className="p-4 rounded-2xl border border-[#E8E8E8]"
            >
              <div className="w-12 h-12 inline-flex items-center justify-center">
                <Image src={item.icon} alt={item.title} className="w-10 h-10" />
              </div>
              <h3 className="mt-5 mb-2 font-urbanist text-xl !leading-6 font-bold text-[#171A1D] max-w-[284px]">
                {item.title}
              </h3>
              <p className="font-jakarta text-base font-normal text-[#374049] max-w-[284px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
