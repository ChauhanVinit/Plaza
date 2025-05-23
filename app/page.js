"use client";
import Header from "../components/Header";
import Hero from "../components/HomePage/Hero";
import TopIndustries from "../components/HomePage/TopIndustries";
import Image from "next/image";
import aiSecurity from "../public/ai-security-01.svg";
import folderSecurity from "../public/folder-security.svg";
import licenseThird from "../public/license-third-party.svg";
import videoBanner from "../public/video-banner.png";
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

export default function Home() {
  const excelData = [
    {
      icon: licenseThird,
      title: "Licensed And Trained Security Professionals",
      description:
        "Bringing a decade of expertise to ensure top-notch security solutions.",
    },
    {
      icon: aiSecurity,
      title: "Security Powered By Cutting-Edge Technology",
      description:
        "Our guards are certified and skilled to provide superior protection.",
    },
    {
      icon: folderSecurity,
      title: "Custom Security Services For Your Unique Needs",
      description:
        "Tailoring our services to fit your specific security requirements.",
    },
  ];
  return (
    <>
      <Header />
      <Hero />
      <TopIndustries />
      <div className="max-w-[1300px] mx-auto px-[60px] py-20 bg-[#FAFAFA] rounded-[40px]">
        <div className="flex items-start gap-[90px]">
          <div className="w-[45%]">
            <Image src={ExpertSecurity} alt="ExpertSecurity" />
          </div>
          <div className="w-[55%]">
            <Tag title={"Ensuring Safety With Expertise"} />

            <Heading
              title={
                "Cutting-Edge Security Solutions For A Rapidly Evolving World"
              }
            />
            <p className="mt-6 font-urbanist text-[20px] font-normal leading-8 text-[#45535E]">
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
                    <h3 className="font-urbanist text-xl leading-6  font-bold text-[#171A1D]">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-urbanist font-normal text-base leading-5 text-[#45535E] ">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 inline-flex items-center gap-4">
              <Button
                variant="blue"
                style={"!min-w-[243px]"}
                name="Request Quote"
                path="/Request-A-Quote"
              />

              <Button
                variant="custom"
                style={"min-w-[158px] !bg-transparent"}
                name="About Us"
                path="/About-us"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-[120px] py-20">
        <Image src={videoBanner} className="w-full" alt="Video_banner" />
      </div>
      <Services />
      <KeyFeature />
      <AboutUs />
      <OurServices />
      <FreeQuote />
      <Footer />
    </>
  );                       
}          
