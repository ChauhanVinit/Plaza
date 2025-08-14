"use client";
import { useEffect } from "react";
import Image from "next/image";
import lineShape from "../public/line-shape-08.svg";
import Tag from "../utils/Tag";
import Heading from "../utils/Heading";
import Button from "../utils/Button";
import right from "../public/right.svg";

const FreeQuote = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://webforms.pipedrive.com/f/loader";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="lg:mb-[400px] 2xl:mb-[360px]">
      <div className="max-h-auto lg:max-h-[440px] 2xl:max-h-[500px] relative 2xl:max-w-[1200px] mx-4 sm:mx-6 xl:mx-10 2xl:mx-auto mb-10 mt-10 lg:mt-0 lg:mb-[160px] 2xl:mb-[140px] px-4 sm:px-6 xl:px-8 2xl:px-[60px] bg-[#0C2459] rounded-[40px]">
        <Image
          src={lineShape}
          className="z-0 absolute top-0 left-0 max-h-[612px]"
          alt=""
        />
        <div className="relative grid grid-cols-12 lg:grid-cols-11 lg:gap-10 text-center lg:text-left">
          <div className="col-span-12 lg:col-span-4 py-6 lg:pb-0  lg:pt-10 2xl:pt-[60px]">
            <Tag
              title={"Security you can blindly trust"}
              className={"!bg-gradient-to-t from-[#E2EAFF] to-[#E2EAFF]"}
            />
            <Heading
              title={"Plaza Protection Securing San Jose Inside Out"}
              className={"!text-white max-w-[500px] mx-auto lg:mx-0 lg:!max-w-[350px]"}
            />
            <p className="mt-6 font-dmSans font-normal text-base text-white  max-w-[500px] mx-auto lg:mx-0">
              Serving the San Jose area, our expert team is ready to protect what
              matters most. Contact us today for a free risk assessment!
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start">
              <Button
                variant="custom"
                bgtransparent={"!bg-transparent !text-white"}
                icon={
                  <Image src={right} alt="Right arrow icon" className="w-4 h-4" />
                }
                path={"/contact-us"}
                style={"w-full sm:max-w-[190px] !text-white"}
                name={"Contact Us"}
              />
            </div>
          </div>

          <div className="lg:col-span-1"></div>
          <div className="col-span-12 lg:col-span-6 py-6 lg:pb-0 lg:pt-10 2xl:pt-[60px]">
            <div
              className="pipedriveWebForms bg-white py-8 px-4 sm:px-0 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#E5E7EB]  lg:min-h-[740px] mx-auto max-w-[580px]"
              data-pd-webforms="https://webforms.pipedrive.com/f/ctsaBF7z4k5UwFt2BkGMdiBP8TJSgch1V6qPCnkyC7dmotBUGp9x52iNkmvQjIeCuD"
            ></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FreeQuote;
