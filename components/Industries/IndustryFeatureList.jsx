"use client";
import Heading from "../../utils/Heading";
import Card from "../../components/Card";
import Image from "next/image";

const IndustryFeatureList = ({data, title, desc ,imgA,imgB,imgC}) => {
  return (
     <div className="mx-4 sm:mx-6 xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto my-10 2xl:my-20 bg-[#EBFFF1]/30 rounded-[40px] px-4 py-10 sm:px-6 xl:px-8 2xl:p-20">
        <Heading
          className="!mb-6 !mt-0 !text-[#222A5B] !text-center !tracking-[-2px]"
          title={title}
        />
        <p className="font-dmSans text-lg  xl:text-xl xl:!leading-8  text-[#333333] font-normal text-center max-w-[1126px] mx-auto">
         {desc}
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 xl:gap-8 mt-[60px]">
          <div className="w-full md:w-[47%] flex justify-center">
            <Image
              src={imgA}
              alt="Plaza Protection Security Guard Providing Industry-Specific Protection"
              className="w-full rounded-[40px] max-w-[329px] md:max-w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full  md:grow flex justify-center">
            <Image
              src={imgB}
              alt="Plaza Protection Security Guard Providing Industry-Specific Protection"
              className="w-full rounded-[40px] max-w-[329px] md:max-w-full hidden md:block object-cover"
              loading="lazy"
            />
            <Image
              src={imgC}
              alt="Plaza Protection Security Guard Providing Industry-Specific Protection"
              className="w-full max-w-[329px] md:hidden object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full flex flex-wrap gap-x-6 gap-y-6 mt-10 2xl:mt-[60px]">
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
  )
}

export default IndustryFeatureList
