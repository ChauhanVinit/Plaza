"use client";
import mapsLocation from "../../public/maps-location.svg";
import Image from "next/image";
import Button from "../../utils/Button";
import right from "../../public/right.svg";
import rightDark from "../../public/right-dark.svg";
const Hero = () => {
  return (
    <div className="xxs:container 2xl:max-w-[1440px] mx-4 xxs:mx-auto mt-8  lg:mt-[67px] mb-10 lg:mb-20 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-6 relative pt-[15px] ">
        <div className="px-5 py-2 inline-flex items-center gap-3 rounded-[50px] border border-[#B6CAFF]/50  h-12">
          <Image src={mapsLocation} className="w-6 h-6" alt="Location pin icon" title="San Jose, CA location" />
          <span className="text-lg !leading-6 font-dmSans  font-semibold text-[#1355FF] tracking-[-0.5px]">
            San Jose, CA/Bay Area
          </span>
        </div>

        <h1 className="font-dmSans mt-4 mb-6 text-5xl  xs:text-[56px] xs:!leading-[64px]  sm:text-6xl sm:!leading-[68px] xl:text-[64px] xl:!leading-[72px] 2xl:text-[72px] 2xl:!leading-[80px] font-bold tracking-[-2px] text-[#171A1D] capitalize lg:max-w-[711px]">
          Hire <br className="xs:hidden" /> Professional Security Guard Services In Bay area
        </h1>
        <p className="text-lg sm:text-xl sm:!leading-8 font-dmSans font-normal text-[#45535E] max-w-full lg:max-w-[589px]">
          Plaza Protection provides top-tier security guard services in San Jose. Our trained guards specialize in de-escalation, ensuring safety while maintaining professionalism.
        </p>

        <div className="w-full mt-12 flex sm:flex-row flex-col items-center gap-4 mb-[60px]">
          <Button
            icon={<Image src={right} alt="Right arrow icon" className="w-4 h-4" />}
            variant="blue"
            style={"w-full sm:max-w-[243px]"}
            name="Request Quote"
            path="/request-quote"
          />

          <Button
            variant="custom"
            icon={
              <Image
                src={rightDark}
                alt="Right arrow icon"
                className="w-4 h-4"
              />
            }
            style={"w-full sm:max-w-[162px]"}
            name="Contact Us"
            path="/contact-us"
          />
        </div>

        <div className="hidden xl:block relative xl:-right-[56px] xl:-top-[18px] 2xl:-right-[64px] 2xl:top-2  max-w-[687px]  ml-auto w-full xl:min-h-[105px] 2xl:min-h-[120px] bg-[linear-gradient(90deg,_rgba(255,255,255,0)_0%,_rgba(228,239,255,0.42)_50%,_rgba(228,239,255,1)_100%)] "></div>
      </div>
      <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0">
        <video autoPlay playsInline muted loop className="w-full h-full max-w-[620px] xl:max-w-[720px]">
          <source type="video/mp4" src="/PPS-Hero-Banner.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
