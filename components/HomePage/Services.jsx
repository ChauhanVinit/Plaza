"use client";
import { useState } from "react";
import UnarmedSecurity from "../../public/UnarmedSecurity.svg";
import fire from "../../public/fire.svg";
import tvSmart from "../../public/tv-smart.svg";
import car from "../../public/car-03.svg";
import Image from "next/image";
// import validation from "../../public/validation.svg";
// import HomeServicesBanner from "../../public/HomeServicesBanner.png";
import FeaturesImg from "../../public/Features-img.png";
import Tag from "../../utils/Tag";
import Heading from "../../utils/Heading";
import Button from "../../utils/Button";
import right from "../../public/right.svg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);

  const tabs = [
    {
      label: "Unarmed Security",
      icon: UnarmedSecurity,
      title: "Unarmed Security That You Can Blindly Trust",
      description:
        "At Plaza Protection, we understand that the presence of firearms can make people uneasy. That’s why our highly trained guards provide top-tier security without the need for weapons. As San Jose's leading unarmed security provider, our officers effectively deter crimes like theft and vandalism, serving as a reassuring first line of defense.",
      path: "/Unarmed-Security",
    },
    {
      label: "Fire Watch",
      icon: fire,
      title: "Prevent Fire Hazards with Expert Monitoring",
      description:
        "Our fire watch services ensure compliance and safety during high-risk situations. Stay protected with our dedicated fire watch personnel.",
      path: "/Fire-Watch",
    },
    {
      label: "Remote Monitoring",
      icon: tvSmart,
      title: "24/7 Surveillance with Advanced Technology",
      description:
        "Our remote monitoring solutions provide constant vigilance. We utilize cutting-edge technology to secure your premises at all times.",
      path: "/Remote-Guarding-Service",
    },
    {
      label: "Vehicle Patrol",
      icon: car,
      title: "Mobile Security with Vehicle Patrol Services",
      description:
        "Our vehicle patrol services offer a visible and active security presence, ensuring extensive coverage and rapid response.",
      path: "/Vehicle-patrol",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mt-[60px] mx-auto py-20 px-[60px] rounded-[40px] bg-[#F0F6FF] text-center">
      <Tag title="Why Choose Us?" />
      <Heading
        className="!mt-4"
        title="Explore Our Range Of Security Solutions"
      />
      <div className="mt-[60px] !text-left">
        <TabGroup className="flex items-center gap-20">
          <TabList className="flex flex-col gap-[22px]  pl-[34px] min-w-[291px]">
            {tabs.map((item, index) => (
              <div key={index} className="relative flex items-center">
                {/* Connector Line - Only show if not the last tab */}
                {index !== tabs.length - 1 && (
                  <div
                    className={`absolute -left-[30px] top-[33px] w-[2px] h-[80px] transition-colors duration-1000 ease-out ${
                      index < activeTab ? "bg-[#1355FF]" : "bg-[#88C0FF]"
                    }`}
                  ></div>
                )}

                {/* Circular Indicator */}
                <div
                  className={`w-[10px] h-[10px] rounded-full absolute left-[-34px] top-[48%] transform -translate-y-1/2 transition-colors duration-1000 ease-out ${
                    index <= activeTab ? "bg-[#1355FF]" : "bg-[#88C0FF]"
                  }`}
                ></div>

                <div
                  className={`smooth relative w-full p-[1px] rounded-2xl hover:bg-gradient-to-r from-[#1355FF] to-[rgb(182,202,255)]   ${
                    activeTab === index
                      ? "bg-gradient-to-r from-[#1355FF] to-[#B6CAFF] "
                      : "bg-[linear-gradient(to_right,_rgba(176,198,255,0.5)_0%,_rgba(182,202,255,0.5)_100%)] "
                  }`}
                >
                  <Tab
                    onClick={() => setActiveTab(index)}
                    className="w-full rounded-2xl flex items-center justify-start whitespace-nowrap px-5  min-h-[60px] leading-normal !bg-[#e6eeff] gap-4 !text-[20px] font-dmSans font-semibold text-[#1355FF] transition-all focus-visible:outline-none data-[selected]:!bg-white data-[selected]:text-[#1355FF] tracking-[-0.5px]"
                  >
                    <Image src={item.icon} alt={item.label} className="w-6 h-6" />
                    <span>{item.label}</span>
                  </Tab>
                </div>
              </div>                                                                        
            ))}
          </TabList>
          <TabPanels className="grow py-8 w-[75%]">
            {tabs.map((item, index) => (
              <TabPanel key={index}>
                <div className="flex items-center gap-[60px]">
                  <div>
                    <Image
                      src={FeaturesImg}
                      alt="HomeServicesBanner"
                      className="min-w-[428px] h-[445px]"
                    />
                  </div>
                  <div className="grow">
                    <div className="mb-4">
                      <h3 className="font-dmSans text-2xl !leading-8 font-semibold text-[#1355FF] tracking-[-0.5px]">
                        {item.label}
                      </h3>
                    </div>
                    <h1 className="mb-6 font-dmSans text-[32px] !leading-10 font-bold text-[#171A1D] tracking-[-0.1px]">
                      {item.title}
                    </h1>
                    <p className="font-dmSans font-normal  text-base text-[#45535E] ">
                      {item.description}
                    </p>
                    <div className="mt-10 inline-flex items-center gap-4">
                      <Button
                        icon={<Image src={right} alt="right" className="w-4 h-4" />}
                        variant="blue"
                        style="!min-w-[243px]"
                        name="Request Quote"
                        path="/Request-A-Quote"
                      />

                      <Button
                        variant="custom"
                        style="!min-w-[162px]  !bg-[#EDF5FF]"
                        name="Learn More"
                        path={item.path}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}                                          
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default Services;
