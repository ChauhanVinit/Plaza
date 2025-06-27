"use client";
import Heading from "../../utils/Heading";
import Card from "../../components/Card";
const IndustryHighlights = ({data, title , desc}) => {
  return (
    <div className="mx-4 sm:mx-6 xl:mx-10 2xl:max-w-[1440px] 2xl:mx-auto mt-10 2xl:mt-20  px-4 py-10 sm:px-6 xl:px-8 2xl:p-20 ">
        <Heading
          className="!mb-6 !mt-0 !text-[#222A5B] !text-center !tracking-[-2px]"
          title={title}
        />
        <p className="font-dmSans text-lg  xl:text-xl xl:!leading-8 text-[#333333] font-normal !text-center max-w-[1126px] mx-auto">
          {desc}
        </p>

        <div className="w-full flex flex-wrap gap-x-10 gap-y-10 mt-10 2xl:!mt-[60px]">
          {data.map((item, index) => (
            <Card
              key={index}
              item={item}
              className={"!border-[#FFF0E0] md:w-[calc(50%-20px)]"}
            />
          ))}
        </div>
      </div>
  )
}

export default IndustryHighlights
