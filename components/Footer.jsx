"use client";
import Image from "next/image";
import Logo from "../public/pps-logo.png";
import { footerContentData as data } from "../data/FooterContent";
import callRinging from "../public/call-ringing.svg";
import estimate from "../public/estimate-02.svg";
import location from "../public/location-04.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-[120px] pt-20 pb-8 bg-[#EDF5FF] ">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between pb-10 border-b border-[#212121]/20">
          <div className="w-1/3">
            <Image src={Logo} alt="Logo" className="w-[182px] h-12" />
          </div>

          <div className="w-1/3 flex items-center gap-4  justify-center ">
            <div className="w-11 h-11 inline-flex items-center justify-center bg-[#D7E8FF] rounded-full">
              <Image src={callRinging} alt={callRinging} className=" w-5 h-5" />
            </div>
            <div>
              <h3 className="font-urbanist text-base !leading-5 font-bold text-[#1355FF]">
                Call
              </h3>
              <p className="mt-[7px] font-urbanist text-lg !leading-[22px] font-semibold text-[#374049]">
                1-844-55-557-5292
              </p>
            </div>
          </div>
          <div className="w-1/3 flex items-center gap-4 justify-end ">
            <div className="w-11 h-11 inline-flex items-center justify-center bg-[#D7E8FF] rounded-full">
              <Image src={estimate} alt={estimate} className=" w-5 h-5" />
            </div>
            <div>
              <h3 className="font-urbanist text-base !leading-5 font-bold text-[#1355FF]">
                Email
              </h3>
              <p className="mt-[7px] font-urbanist text-lg !leading-[22px] font-semibold text-[#374049]">
                contact@plazaprotection.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start py-10 border-b border-[#212121]/20">
          <div className="w-1/3">
            <div className="flex  gap-4 justify-start items-start ">
              <div className="w-11 h-11 inline-flex items-center justify-center bg-[#D7E8FF] rounded-full">
                <Image src={location} alt={location} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-urbanist text-base !leading-5 font-bold text-[#1355FF]">
                  Location
                </h3>
                <p className="mt-[7px] font-urbanist text-lg !leading-[22px] font-semibold text-[#374049] max-w-[268px]">
                  1900 Camden Ave San Jose, CA 95124 United States
                </p>
              </div>
            </div>
            <p className="mt-6 mb-8 font-urbanist text-base  font-normal text-[#374049] max-w-[340px]">
              Plaza Protection delivers top-tier protection across the San Jose
              Bay Area with your safety front and center.
            </p>
            <div className="flex items-center gap-4">
              {data.socialMedia.map((media, index) => (
                <Link href={media.path} target="_blank" key={index}>
                  <Image
                    src={media.icon}
                    alt={media.alt}
                    className=" w-10 h-10"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="grow pl-20 flex items-start justify-between">
            {data.sections.map((section, index) => (
              <div key={index} className=" min-w-[198px]">
                <h3 className="mb-4 px-2 font-jakarta text-[13px] !leading-[26px] font-bold text-[#0C2459] uppercase">
                  {section.title}
                </h3>
                <ul className="list-none">
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="p-2 font-urbanist text-base font-medium text-[#171A1D] !leading-5"
                    >
                      <a href={link.path} target="_blank">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between">
          <p className="font-urbanist font-semibold text-sm leading-5 text-[#344054]">
            {data.bottomSection.copyRight}
          </p>
          <div className=" inline-flex items-center gap-8">
            {data.bottomSection.links.map((link, index) => (
              <div
                key={index}
                className={`font-urbanist font-semibold text-sm leading-5 text-[#344054] relative ${
                  index > 0
                    ? "before:absolute before:top-2 before:-left-4 before:w-1 before:h-1 before:rounded-[100px] before:bg-[#344054]"
                    : ""
                }`}
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
