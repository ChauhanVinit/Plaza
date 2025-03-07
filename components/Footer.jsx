"use client";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import { footerContentData as data } from "../data/FooterContent"
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="px-[120px] pt-20 pb-8 bg-[#EDF5FF] ">
      <div className=" w-full max-w-[1200px] mx-auto">
        
        <div className="flex items-center justify-between pb-10 border-b border-[#212121]/20">
          {data.topSection.map((item, index) => (
            <div
              key={index}
              className="px-1  flex items-center gap-4 w-1/3 justify-center first:justify-start last:justify-end"
            >
              <div className="w-11 h-11 inline-flex items-center justify-center bg-[#D7E8FF] rounded-[66.67px]">
                <Image src={item.icon} alt={item.title} className=" w-5 h-5" />
              </div>
              <div>
                <h3 className="font-urbanist text-lg !leading-[22px] font-semibold text-[#1355FF]">
                  {item.title}
                </h3>
                <p className="mt-[7px] font-urbanist text-base !leading-[19px] font-bold text-[#374049]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      
        <div className="flex items-start py-10 border-b border-[#212121]/20">
          <div className="w-1/3">
            <div className="inline-flex items-center gap-3 mb-6 ">
              <Image src={Logo} alt="Logo" className="w-[37.45px] h-[40px]" />
              <h3 className="text-[30px] !leading-9 font-bold font-urbanist text-[#061237]">
                Plaza<span className="text-[#1355FF]">Protection</span>
              </h3>
            </div>
            <p className="mb-8 font-jakarta text-sm !leading-6 font-normal text-[#374049] max-w-[260px]">
              {data.description}
            </p>
            <div className="flex items-center gap-3">
              {data.socialMedia.map((media, index) => (
                <Link href={media.path} target="_blank"
                  key={index}
                  className=" w-8 h-8 inline-flex items-center justify-center bg-white rounded-[9.14px] border-[0.57px] border-[#8F9AB3]"
                >
                  <Image
                    src={media.icon}
                    alt={media.alt}
                    className=" w-[14px] h-[14px]"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="grow pl-[60px] flex items-start justify-between">
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
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

       
        <div className=" pt-6 flex items-center justify-between">
          <p className=" font-jakarta font-semibold text-[13px] leading-[18px] text-[#344054]">
            {data.bottomSection.copyRight}
          </p>
          <div className=" inline-flex items-center gap-8">
            {data.bottomSection.links.map((link, index) => (
              <div
                key={index}
                className={`font-jakarta font-semibold text-[13px] leading-[18px] text-[#344054] relative ${
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
