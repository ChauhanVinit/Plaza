"use client";
import mapsLocation from "../../public/maps-location.svg";
import Image from "next/image";
import Button from "../../utils/Button";
const Hero = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto  mt-14 grid grid-cols-12">
      <div className="col-span-6 relative">
        <div className=" px-5 py-3 inline-flex items-center gap-3 rounded-[50px] border border-[#B6CAFF]/50">
          <Image src={mapsLocation} className="w-6 h-6" alt="mapsLocation" />
          <span className="text-lg !leading-6 font-urbanist  font-semibold text-[#0F32BE]">
            San Jose Bay Area
          </span>
        </div>

        <h1 className="font-urbanist mt-4 mb-6 text-6xl leading-[72px] font-bold tracking-[-2%] text-[#171A1D]">
          Hire Professional Security Guard Services
        </h1>
        <p className="text-[20px] leading-8 font-urbanist font-normal text-[#45535E]">
          Plaza Protection provides top-tier security services across the San
          Jose Bay Area. Our trained guards specialize in de-escalation,
          ensuring safety while maintaining professionalism. We tailor our
          services to meet each client’s unique security needs.
        </p>

        <div className="mt-12 inline-flex items-center gap-4">
          <Button
            variant="blue"
            style={"!min-w-[243px]"}
            name="Request Quote"
            path="/Request-A-Quote"
          />

          <Button
            variant="custom"
            style={"!min-w-[162px]"}
            name="Contact Us"
            path="/Contact-Us"
          />
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
