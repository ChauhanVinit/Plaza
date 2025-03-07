"use client";
import Button from "../../utils/Button";
import Image from "next/image";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
const Morefeatures = ({ data, title, desc }) => {
  return (
    <div
      id="more-features"
      className="max-w-[1440px] mx-auto px-16 py-20 rounded-[40px] bg-[#FFFAE7]/15 mb-[68px]"
    >
      <div className="max-w-[751px]">
        <Tag title={"More Features"} />
        <Heading title={title} className={"!mb-6"} />
        <p className="mb-6 font-jakarta font-normal text-lg !leading-8 text-[#374049] ">
          {desc}
        </p>
        <Button variant="custom" style={"!min-w-[162px]"} name="Contact Us" />
      </div>

      <div className="grid grid-cols-12 gap-6 mt-[60px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="col-span-3 p-4 rounded-2xl border border-[#FFF0E0]"
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

export default Morefeatures;
