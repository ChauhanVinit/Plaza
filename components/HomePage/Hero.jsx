"use client";
import mapsLocation from "../../public/maps-location.svg";
import Image from "next/image";
import Button from "@/utils/Button";
const Hero = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto  mt-14 grid grid-cols-12">
      <div className="col-span-6 relative">
        <div className="pl-[18px] pt-11 pr-[146px]">
          <div className="bg-[linear-gradient(to_right,_rgba(226,_234,_255,_0.7)_0%,_rgba(226,_234,_255,_0.7)_100%)]  px-[26px] py-2 inline-flex items-center gap-3 rounded-[50px] border border-[#B6CAFF]/50">
            <Image src={mapsLocation} className=" w-6 h-6" alt="mapsLocation" />
            <span className="text-xl leading-normal   font-urbanist  font-semibold text-[#1355FF]">
              San Jose Bay Area
            </span>
          </div>

          <h1 className="mt-4 mb-6 text-6xl leading-[69px] font-bold tracking-[-1px] text-[#222A5B]">
            #1 Trusted Security Guard Services For Unmatched Safety
          </h1>
          <p className="text-[22px] leading-[34px] font-urbanist font-medium text-[#374049]  ">
            Plaza Protection brings you the best security guard services with
            expert teams providing solutions to safeguard property & meet your
            security needs
          </p>

          <div className="mt-12 inline-flex items-center gap-4">
          <Button variant="blue" style={"!min-w-[243px]"} name="Request Quote"  />

          <Button variant="custom" style={"!min-w-[162px]"} name="Contact Us"  path="/Contact-Us"  />
          </div>
        </div>
        <div className="absolute -right-[63px] max-w-[687px] bottom-0   ml-auto w-full min-h-[120px] bg-[linear-gradient(90deg,_rgba(255,255,255,0)_0%,_rgba(228,239,255,0.42)_50%,_rgba(228,239,255,1)_100%)] "></div>
      </div>
      <div className="col-span-6">
        <video autoPlay playsInline muted loop className=" w-full">
          <source type="video/mp4" src="/PPS-Hero-Banner.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
