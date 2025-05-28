"use client";
import Image from "next/image";
const Card = ({ item, className }) => {
  return (
    <div className={`col-span-6 border border-[#E0EEFF] bg-transparent p-6 flex items-center gap-6 rounded-2xl ${className} `}>
      <div className="w-[58px] h-[58px] bg-[#EDF5FF] rounded-full inline-flex items-center justify-center">
        <Image src={item.icon} alt={item.title} width={32} height={32}  />
      </div>
      <div>
        <h3 className="font-urbanist text-2xl !leading-[29px] font-bold text-[#171A1D]">
          {item.title}
        </h3>
      
      </div>
    </div>
  );
};

export default Card;
