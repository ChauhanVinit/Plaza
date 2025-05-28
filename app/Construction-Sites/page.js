"use client";
import Header from "../../components/Header";
import FreeQuote from "../../components/FreeQuote";
import Heading from "../../utils/Heading";
import ConstructionB from "../../public/ConstructionSites/Construction-B.png";
import ConstructionA from "../../public/ConstructionSites/Construction-A.png";
import Image from "next/image";
import checkmarkCircle from "../../public/Residential/checkmark-circle.svg";
import Emergencyprotocol from "../../public/ConstructionSites/Emergency-protocol.svg";
import CameraMonitoring from "../../public/ConstructionSites/Surveillance-Camera-Monitoring.svg";
import TrainedSecurity from "../../public/ConstructionSites/Trained-Security.svg";
import PerimeterMonitoring from "../../public/ConstructionSites/Perimeter-Monitoring.svg";
import Tailoredsecurity from "../../public/ConstructionSites/Tailored-security-plan.svg";
import AcessControl from "../../public/ConstructionSites/Acess-Control.svg";
import Surveillance from "../../public/ConstructionSites/On-site-Surveillance.svg";
import Riskmitigation from "../../public/ConstructionSites/Risk-mitigation.svg";
import tabImageA from "../../public/ConstructionSites/site-tab-image-01.png";
import tabImageB from "../../public/ConstructionSites/site-tab-image-02.png";
import tabImageC from "../../public/ConstructionSites/site-tab-image-03.png";
import SiteImage from "../../public/ConstructionSites/Construction-Sites-Image.png";
import GuardImage from "../../public/ConstructionSites/Construction-Sites-Guard.png";
import ConectElement from "../../public/Residential/Conect-element.svg";
import Fire from "../../public/Residential/fire.svg";
import Gun from "../../public/Residential/gun.svg";
import Ellipse from "../../public/Ellipse.svg";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import person from "../../public/Residential/person-01.svg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const ConstructionSites = () => {
  const tabs = [
    {
      label: "Tailored Security Plans",
      icon: Tailoredsecurity,
      image1: tabImageA,
      image2: tabImageB,
      image3: tabImageC,
    },
    {
      label: "Access Control",
      icon: AcessControl,
      image1: tabImageC,
      image2: tabImageB,
      image3: tabImageA,
    },
    {
      label: "On-Site Surveillance",
      icon: Surveillance,
      image1: tabImageB,
      image2: tabImageC,
      image3: tabImageA,
    },
    {
      label: "Risk Mitigation",
      icon: Riskmitigation,
      image1: tabImageC,
      image2: tabImageA,
      image3: tabImageB,
    },
  ];
  const SecurityStrategiesData = [
    {
      icon: Emergencyprotocol,
      title: "Emergency Protocols",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
    },
    {
      icon: CameraMonitoring,
      title: "Surveillance Camera Monitoring",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
    },
    {
      icon: TrainedSecurity,
      title: "Trained Security Personnel",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
    },
    {
      icon: PerimeterMonitoring,
      title: "Perimeter Monitoring",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
    },
  ];
  const residentialFeatures = [
    {
      icon: checkmarkCircle,
      title: "24/7 Monitoring",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
    },
    {
      icon: checkmarkCircle,
      title: "Adaptability",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
    },
    {
      icon: checkmarkCircle,
      title: "Asset Protection",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
    },
    {
      icon: checkmarkCircle,
      title: "Theft And Vandalism Deterrence",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
    },
  ];
  return (
    <>
      <Header />
      <div className="w-full max-w-[1360px] mt-16 mb-[141px] mx-auto">
        <div className="flex gap-[93px]">
          <div className="relative">
            <Image
              src={SiteImage}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="Construction Site Image"
              loading="lazy"
            />
            <div className="z-[51] absolute -right-[120px] bottom-24 inline-flex items-center gap-2 pl-3 pr-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image src={Emergencyprotocol} alt="Emergency Protocols" className="w-4 h-4" />
              </div>
              <div className="font-urbanist text-xs font-semibold text-[#11205A]">
                
                  Emergency Protocols
              </div>
            </div>                                         
          </div>
          <div className="relative">
            <div>
              <h1 className="font-urbanist text-[56px] !leading-[64px] font-bold text-[#222A5B] mb-6">
                Comprehensive Security Guard Services For Construction Sites
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-jakarta text-lg !leading-[30px] font-normal text-[#6B7280] max-w-[572px] ">
                Protecting Your Investments with Expert Construction Site
                Security Solutions
              </p>
            </div>

            <div className="absolute bottom-0 -left-[126px] z-50">
              <Image
                src={ConectElement}
                alt="ConectElement"
                className="w-[713px]"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-11 mt-12 items-start">
          <div className="grow bg-[#2877FF]/5 p-6 rounded-3xl">
            <div className="flex items-center gap-6">
              <Image src={person} alt="person" className="w-[60px] h-[60px]" />
              <div>
                <h3 className="font-jakarta font-semibold text-xl !leading-[22px] text-[#171A1D] mb-1">
                  James Hall
                </h3>
                <p className="font-jakarta font-semibold text-base !leading-[22px] text-[#6B7280]">
                  Manager
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className=" font-jakarta italic text-base text-[#6B7280] max-w-[842px]">
                “Plaza Protection provides top-tier security without firearms.
                As San Jose’s leading unarmed security provider, our skilled
                guards prevent theft and vandalism, offering a reassuring
                defense.”
              </p>
            </div>
          </div>

          {/* <div className="p-6 rounded-3xl bg-[#2877FF]/5 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={Ellipse}
                  className=" w-[60px] h-[60px]"
                  alt="streetHouses"
                />
              </div>
              <div>
                <h3 className="font-jakarta text-xl !leading-6 font-semibold text-[#171A1D] mb-2">
                  Magna Architectural Design
                </h3>
                <p className="font-jakarta text-base font-semibold text-[#6B7280]">
                  Manager
                </p>
              </div>
            </div>
            <div>
              <p className=" font-jakarta text-base italic text-[#6B7280] max-w-[471px]">
                “Plaza Protection provides top-tier security without firearms.
                As San Jose’s leading unarmed security provider, our skilled
                guards prevent theft and vandalism, offering a reassuring
                defense.”
              </p>
            </div>
          </div> */}
          {/* <div className=" p-6 rounded-3xl border-[3px] border-[#F1F1F1]">
            <div className="mb-5 flex items-center justify-between">
              <h1 className="text-3xl font-semibold tracking-[1%] text-[#11205A]">
                85%
              </h1>
              <h3 className="font-jakarta text-base text-[#0C2459] font-bold">
                Daily activities
              </h3>
            </div>

            <div className="inline-flex items-center gap-[22px]">
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                  <div className="absolute bottom-0 w-full h-[70%] bg-[#1355FF] rounded-full"></div>
                </div>
                <span className=" font-jakarta font-semibold text-sm text-[#939393]">
                  Sun
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                  <div className="absolute bottom-0 w-full h-[65%] bg-[#1355FF] rounded-full"></div>
                </div>
                <span className=" font-jakarta font-semibold text-sm text-[#939393]">
                  Mon
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                  <div className="absolute bottom-0 w-full h-[45%] bg-[#1355FF] rounded-full"></div>
                </div>
                <span className=" font-jakarta font-semibold text-sm text-[#939393]">
                  Tue
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                  <div className="absolute bottom-0 w-full h-[35%] bg-[#1355FF] rounded-full"></div>
                </div>
                <span className=" font-jakarta font-semibold text-sm text-[#939393]">
                  Wed
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                  <div className="absolute bottom-0 w-full h-[25%] bg-[#1355FF] rounded-full"></div>
                </div>
                <span className=" font-jakarta font-semibold text-sm text-[#939393]">
                  Thu
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                  <div className="absolute bottom-0 w-full h-[80%] bg-[#1355FF] rounded-full"></div>
                </div>
                <span className=" font-jakarta font-semibold text-sm text-[#939393]">
                  Fri
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <div className="relative h-[78px] w-[10px] bg-[#E7E9EE] rounded-full">
                  <div className="absolute bottom-0 w-full h-[40%] bg-[#1355FF] rounded-full"></div>
                </div>
                <span className=" font-jakarta font-semibold text-sm text-[#939393]">
                  Sat
                </span>
              </div>
            </div>
          </div> */}
          <div className="relative mt-[-215px]">
            <Image
              src={GuardImage}
              className="rounded-3xl min-w-[399px] h-auto"
              alt="Guard Image"
              loading="lazy"
            />

            <div className="z-[51] absolute -left-[59px] top-[136px] inline-flex items-center gap-2 pl-3 pr-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image src={TrainedSecurity} alt="Gun" className="w-4 h-4" />
              </div>
              <div className="font-urbanist text-xs font-semibold text-[#11205A]">
               Trained Security Personnel
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto mb-20 bg-[#EDF5FF] rounded-[40px] p-20 flex flex-col gap-[60px]">
        <div className="text-center">
          <Heading
            className="!mb-6 !mt-0"
            title="Customized Security Solutions For Seamless Construction Operations"
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal  ">
            Every construction site has unique challenges, requiring tailored
            security solutions to ensure smooth and secure operations.By
            aligning security measures with the specific needs of your project,
            customized solutions ensure the safety of workers, equipment, and
            materials, fostering a secure environment that supports
            uninterrupted construction progress.
          </p>
        </div>

        <div>
          <TabGroup>
            <TabList className="flex items-center gap-8 p-4">
              {tabs.map((item, index) => (
                <Tab
                  key={index}
                  className="inline-flex items-center gap-2 flex-1 !text-left rounded border-b-2 border-transparent focus-visible:outline-none data-[selected]:border-[#1355FF]"
                  role="tab"
                >
                  <div className="h-[58px] w-[58px] inline-flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="font-urbanist text-xl font-bold text-[#171A1D]">
                    {item.label}
                  </span>
                </Tab>
              ))}
            </TabList>

            <TabPanels className="mt-[60px]">
              {tabs.map((item, index) => (
                <TabPanel key={index} className="grid grid-cols-12 gap-6">
                  {[item.image1, item.image2, item.image3].map(
                    (image, imgIndex) => (
                      <div key={imgIndex} className="col-span-4">
                        <Image
                          src={image}
                          alt={item.label}
                          className="rounded-3xl w-full h-[324px]"
                        />
                      </div>
                    )
                  )}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto mt-20  p-20 flex flex-col gap-[60px]">
        <div className="text-center max-w-[967px] mx-auto">
          <Heading
            className="!mb-6 !mt-0"
            title="Mitigating Risks And Enhancing Security At Construction Sites"
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal">
            Effective security at construction sites involves proactive measures
            to reduce risks like theft, vandalism, and accidents. Trained
            security personnel, access control systems, and surveillance tools
            help protect equipment, materials, and workers.
          </p>
        </div>

        <div className="grid grid-cols-12  gap-y-6  gap-x-6">
          {SecurityStrategiesData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto my-20 bg-[#EBFFF1]/30 rounded-[40px] p-20 flex flex-col gap-[60px]">
        <div className="text-center !max-w-[967px] mx-auto">
          <Heading
            className="!mb-6 !mt-0"
            title="Expert Security Solutions Designed For The Unique Needs Of Construction Sites."
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal">
            Construction sites present unique security challenges, from
            safeguarding valuable equipment and materials to managing access and
            preventing vandalism. Expert security solutions address these
            specific needs with a combination of advanced technology and
            professional personnel.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className=" col-span-4 ">
            <Image
              src={ConstructionB}
              alt="ResidentialA"
              className="w-full h-full rounded-[50px]"
              loading="lazy"
            />
          </div>
          <div className="col-span-8 ">
            <Image
              src={ConstructionA}
              alt="ResidentialB"
              className="w-full h-full rounded-[50px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-12  gap-y-6  gap-x-6">
          {residentialFeatures.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>

      <FreeQuote />
      <Footer />
    </>
  );
};

export default ConstructionSites;
