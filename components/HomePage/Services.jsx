"use client";
import { useState } from "react";
import gun from "../../public/gun.svg";
import gunWhite from "../../public/gun-white.svg";
import mentorWhite from "../../public/mentor-white.svg";
import fireWhite from "../../public/fire-white.svg";
import tvSmartWhite from "../../public/tv-smart-white.svg";
import carWhite from "../../public/car-white.svg";
import mentor from "../../public/mentor.svg";
import fire from "../../public/fire.svg";
import tvSmart from "../../public/tv-smart.svg";
import car from "../../public/car-03.svg";
import Image from "next/image";
import validation from "../../public/validation.svg";
import HomeServicesBanner from "../../public/HomeServicesBanner.png";
import Tag from "@/utils/Tag";
import Heading from "@/utils/Heading";
import Button from "@/utils/Button";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);

  const tabs = [
    {
      label: "Unarmed Security",
      icon: gun,
      activeIcon: gunWhite,
      title: "Effective Security Without The Use Of Firearms",
      description:
        "Plaza Protection provides top-tier security without firearms. As San Jose’s leading unarmed security provider, our skilled guards prevent theft and vandalism, offering a reassuring defense.",
    },
    {
      label: "Standing Guards",
      icon: mentor,
      activeIcon: mentorWhite,
      title: "Experienced Standing Guards for Your Safety",
      description:
        "Our standing guards are well-trained professionals ensuring safety and security in various environments. Count on us for unmatched reliability and presence.",
    },
    {
      label: "Fire Watch",
      icon: fire,
      activeIcon: fireWhite,
      title: "Prevent Fire Hazards with Expert Monitoring",
      description:
        "Our fire watch services ensure compliance and safety during high-risk situations. Stay protected with our dedicated fire watch personnel.",
    },
    {
      label: "Remote Monitoring",
      icon: tvSmart,
      activeIcon: tvSmartWhite,
      title: "24/7 Surveillance with Advanced Technology",
      description:
        "Our remote monitoring solutions provide constant vigilance. We utilize cutting-edge technology to secure your premises at all times.",
    },
    {
      label: "Vehicle Patrol",
      icon: car,
      activeIcon: carWhite,
      title: "Mobile Security with Vehicle Patrol Services",
      description:
        "Our vehicle patrol services offer a visible and active security presence, ensuring extensive coverage and rapid response.",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto p-[60px] rounded-[40px] bg-[#EDF5FF] text-center">
      <Tag title="Explore Our Diverse Range of Security Solutions" />
      <Heading
        className="!mt-4"
        title="Services That Perfectly Fit Your Security Needs"
      />
      <div className="mt-[80px] !text-left">
        <TabGroup className="flex items-start gap-[80px]">
          <TabList className="flex flex-col py-14 gap-6 pl-[34px] w-[292px]">
            {tabs.map((item, index) => (
              <Tab
                key={index}
                onClick={() => setActiveTab(index)}
                className={`inline-flex items-center justify-start whitespace-nowrap rounded-2xl p-4 py-3 h-[60px] leading-normal bg-[#EDF5FF] border border-[#B6CAFF]/50 gap-4 text-[20px] font-urbanist font-semibold text-[#1355FF] transition-all focus-visible:outline-none  data-[selected]:!bg-[#11205A] data-[selected]:bg-[linear-gradient-0]   data-[selected]:text-white relative smooth before:h-[10px] before:w-[10px] before:absolute before:top-1/2 before:-left-[34px] before:rounded-full before:transition-colors before:duration-1000 ease-out ${
                  index <= activeTab
                    ? "before:bg-[#11205A]"
                    : "before:bg-[#88C0FF]"
                } ${
                  index !== tabs.length - 1
                    ? `after:w-[2px] after:h-[80px] after:absolute after:-left-[30px] after:top-[39px] after:transition-colors after:duration-1000 ease-out ${
                        index < activeTab
                          ? "after:bg-[#11205A]"
                          : "after:bg-[#88C0FF]"
                      }`
                    : ""
                } `}
              >
                <Image
                  src={index === activeTab ? item.activeIcon : item.icon}
                  alt={item.label}
                />
                <span>{item.label}</span>
              </Tab>
            ))}
          </TabList>
          <TabPanels className="grow py-8 w-[75%]">
            {tabs.map((item, index) => (
              <TabPanel key={index}>
                <div className="flex items-start gap-20">
                  <div className="px-[14px]">
                    <Image
                      src={HomeServicesBanner}
                      alt="HomeServicesBanner"
                      className="min-w-[428px] h-[441px]"
                    />
                  </div>
                  <div className="py-3">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={validation}
                        alt="validation"
                        className="w-[22.22px] h-[22.22px]"
                      />
                      <h3 className="font-urbanist text-2xl leading-normal font-bold text-[#0A3DEB]">
                        {item.label}
                      </h3>
                    </div>
                    <h1 className="mb-6 font-urbanist text-[32px] leading-[42px] font-bold text-[#171A1D] max-w-[412px]">
                      {item.title}
                    </h1>
                    <p className="font-jakarta font-normal text-lg leading-8 text-[#374049] max-w-[412px]">
                      {item.description}
                    </p>
                    <div className="mt-10 inline-flex items-center gap-4">
                      <Button
                        variant="blue"
                        style="!min-w-[221px] rounded-2xl"
                        name="Request Quote"
                      />

                      <Button
                        variant="custom"
                        style="!min-w-[175px] rounded-2xl !bg-[#EDF5FF]"
                        name="View More"
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
