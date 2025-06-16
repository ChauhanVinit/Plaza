"use client";
import Header from "../components/Header";
import Hero from "../components/HomePage/Hero";
import TopIndustries from "../components/HomePage/TopIndustries";
import Image from "next/image";
import aiSecurity from "../public/ai-security-01.svg";
import folderSecurity from "../public/folder-security.svg";
import licenseThird from "../public/license-third-party.svg";
// import videoBanner from "../public/video-banner.png";
import ExpertSecurity from "../public/ExpertSecurity.png";
import Tag from "../utils/Tag";
import Heading from "../utils/Heading";
import Footer from "../components/Footer";
import FreeQuote from "../components/FreeQuote";
import OurServices from "../components/HomePage/OurServices";
import AboutUs from "../components/HomePage/AboutUs";
import KeyFeature from "../components/HomePage/KeyFeature";
import Services from "../components/HomePage/Services";
import Button from "../utils/Button";
import right from "../public/right.svg";
import rightDark from "../public/right-dark.svg";
export default function Home() {                   
  const excelData = [
    {
      icon: licenseThird,
      title: "Over 10 Years Of Industry Experience",
      description:
        "Bringing a decade of expertise to ensure top-notch security solutions.",
    },
    {
      icon: aiSecurity,
      title: "Licensed And Highly Trained Security Professionals",
      description:
        "Our guards are certified and skilled to provide superior protection.",
    },
    {
      icon: folderSecurity,
      title: "Custom Security Guard Services To Meet Your Unique Needs",
      description:
        "Tailoring our services to fit your specific security requirements.",
    },
  ];
  return (
    <>
      <Header />
      <Hero />
      <TopIndustries />
      <div className="mx-4 sm:mx-6  xl:mx-10  2xl:container 2xl:mx-auto mt-10 2xl:mt-[60px] py-8 px-4 sm:py-10 sm:px-6  xl:px-8  2xl:px-[60px] 2xl:py-20 bg-[#FAFAFA] rounded-[40px]">
        <div className="flex flex-col xl:flex-row items-start gap-8 xl:gap-10 2xl:gap-[140px]">
          <div className="w-full xl:w-[42%]">
            <Image src={ExpertSecurity} className="object-cover" alt="ExpertSecurity" />
          </div>
          <div className="w-full xl:w-[58%]">
            <Tag title={"Ensuring Safety With Expertise"} />

            <Heading
              title={
                "Cutting-Edge Security Solutions For A Rapidly Evolving World"
              }
            />
            <p className="mt-6 font-dmSans text-lg 2xl:text-xl 2xl:!leading-8 font-normal  text-[#45535E]">
              Our commitment to excellence ensures a safe, secure environment
              for all, giving you peace of mind under our vigilant protection.
            </p>

            <div className=" mt-8 px-4 bg-[#EDF5FF]/20 rounded-3xl ">
              {excelData.map((item, index) => (
                <div
                  key={index}
                  className="py-4 flex items-center gap-4 border-b border-[#1355FF]/10 last:border-none"
                >
                  <div className=" inline-flex items-center justify-center w-[58px] h-[58px] rounded-[83px] bg-[#EDF5FF]">
                    <Image
                      src={item.icon}
                      alt={item.icon}
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-dmSans text-base  lg:text-lg  2xl:text-xl !leading-6  font-semibold text-[#171A1D] tracking-[-0.5px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-dmSans font-normal text-[15px] lg:text-base leading-5 text-[#45535E] ">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full mt-12 inline-flex sm:flex-row flex-col items-center gap-4">
              <Button
              icon={<Image src={right} alt="right" className="w-4 h-4" />}
                variant="blue"
                style={"!min-w-full sm:!min-w-[243px]"}
                name="Request Quote"
                path="/Request-A-Quote"
              />

              <Button
                variant="custom"
                 icon={<Image src={rightDark} alt="right" className="sm:hidden w-4 h-4" />}
                style={"!min-w-full sm:!min-w-[158px] !bg-transparent"}
                name="About Us"
                path="/About-us"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-[1440px] mx-auto px-[120px] py-20">
        <Image src={videoBanner} className="w-full" alt="Video_banner" />
      </div> */}
      <Services />
      <KeyFeature />
      <AboutUs />
      <OurServices />
      <FreeQuote />
      <Footer />
    </>
  );                       
}          
