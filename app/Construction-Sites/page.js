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
import AcessControl from "../../public/ConstructionSites/Acess-Control.svg";
import Surveillance from "../../public/ConstructionSites/On-site-Surveillance.svg";
import SiteImage from "../../public/ConstructionSites/Construction-Sites-Image.png";
import GuardImage from "../../public/ConstructionSites/Construction-Sites-Guard.png";
import ConectElement from "../../public/Residential/Conect-element.svg";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import person from "../../public/Residential/person-01.svg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Quote from "../../public/Residential/iconmonstr-quote.svg";
import VisibleDitterence from "../../public/CommercialBuilding/Visible-Ditterence.svg";
import AccessControlA from "../../public/ConstructionSites/Access-Control-01.svg";
import AccessControlB from "../../public/ConstructionSites/Access-Control-02.svg";
import AccessControlC from "../../public/ConstructionSites/Access-Control-03.svg";
import VisitorAssistanceB from "../../public/Residential/Community-Patrol-01.svg";
import VisitorAssistanceA from "../../public/CommercialBuilding/Visitor-Assistance-01.svg";
import VisitorAssistanceC from "../../public/CommercialBuilding/Visitor-Assistance-02.svg";
import LocationMonitoringA from "../../public/Residential/LocationMonitoring-01.svg";
import LocationMnitoringB from "../../public/Residential/LocationMonitoring-02.svg";
import LocationMnitoringC from "../../public/Residential/LocationMonitoring-03.svg";
const ConstructionSites = () => {
  const tabs = [
    {
      label: "Access Control",
      icon: AcessControl,
      image1: AccessControlA,
      image2: AccessControlB,
      image3: AccessControlC,
    },
    {
      label: "On-Site Surveillance",
      icon: Surveillance,
      image1: LocationMonitoringA,
      image2: LocationMnitoringB,
      image3: LocationMnitoringC,
    },
    {
      label: "Intruder Prevention",
      icon: VisibleDitterence,
      image1: VisitorAssistanceA,
      image2: VisitorAssistanceB,
      image3: VisitorAssistanceC,
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
      <div className="w-full max-w-[1342px] mt-20 mb-40 mx-auto">
        <div className="flex gap-12">
          <div className="relative pt-[14px]">
            <Image
              src={SiteImage}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="Construction Site Image"
              loading="lazy"
            />
            <div className="z-[51] absolute -right-[126px] bottom-[101px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image
                  src={Emergencyprotocol}
                  alt="Emergency Protocols"
                  className="w-4 h-4"
                />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Emergency Protocols
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <h1 className="font-dmSans text-[56px] !leading-[64px] font-semibold text-[#222A5B] tracking-[-1px] mb-6">
                Comprehensive Security Guard Services For Construction Sites
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-dmSans text-xl !leading-8 font-normal text-[#333333] max-w-[806px] ">
                Protecting Your Investments with Expert Construction Site
                Security Solutions
              </p>
            </div>

            <div className="absolute bottom-[9px] -left-20 z-50">
              <Image
                src={ConectElement}
                alt="ConectElement"
                className="w-[713px]"
              />
            </div>
          </div>
        </div>

        <div className="flex items-start mt-[74px] gap-[52px] ">
          <div className="grow flex items-center gap-5 p-[35px] rounded-3xl bg-[#FFB82E]/5">
            <div className="min-w-[206px]">
              <div className="flex items-end justify-between">
                <Image
                  src={person}
                  alt="person"
                  className="w-[60px] h-[60px]"
                />
                <Image src={Quote} alt="person" className="w-[43px] h-[43px]" />
              </div>
              <h3 className="mt-1 text-base font-dmSans font-semibold text-[#171A1D]">
                Jane Cooper
              </h3>
              <p className="text-sm font-dmSans font-normal text-[#6B7280]">
                Manager
              </p>
              <p className="text-sm font-dmSans font-normal text-[#333333]">
                Total Network Development
              </p>
            </div>
            <div>
              <p className="font-dmSans text-xl font-semibold text-[#45535E] tracking-[-0.5px] max-w-[595px]">
                Plaza Protection provides top-tier security without firearms. As
                San Jose’s leading unarmed security provider, our skilled guards
                prevent theft and vandalism, offering a reassuring defense.
              </p>
            </div>
          </div>

          <div className="relative -mt-[232px]">
            <Image
              src={GuardImage}
              className="rounded-3xl min-w-[399px] h-auto"
              alt="Guard Image"
              loading="lazy"
            />

            <div className="z-[51] absolute -left-[105px] top-[121px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image src={TrainedSecurity} alt="Gun" className="w-4 h-4" />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Trained Security Personnel
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto mb-20 bg-[#F0F6FF] rounded-[40px] p-20">
        <Heading
          className="!mb-6 !mt-0 !text-[#222A5B] !text-center !tracking-[-3px]"
          title="Customized Security Solutions For Seamless Construction Operations"
        />
        <p className="text-center font-dmSans text-xl !leading-8 text-[#333333] font-normal max-w-[1126px] mx-auto">
          Every construction site has unique challenges, requiring tailored
          security solutions to ensure smooth and secure operations.By aligning
          security measures with the specific needs of your project, customized
          solutions ensure the safety of workers, equipment, and materials,
          fostering a secure environment that supports uninterrupted
          construction progress.
        </p>

        <div className="mt-14">
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
                  <span className="font-dmSans text-xl font-semibold text-[#171A1D] tracking-[-0.5px]">
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
                          className="h-full w-full shadow-[0_21px_32px_0_rgba(0,88,250,0.1)] rounded-3xl"
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

      <div className="w-full max-w-[1440px] mx-auto mt-20  p-20">
        <Heading
          className="!mb-6 !mt-0 !text-[#222A5B] !text-center !tracking-[-3px]"
          title="Mitigating Risks And Enhancing Security At Construction Sites"
        />
        <p className="font-dmSans text-xl !leading-8 text-[#333333] font-normal !text-center max-w-[1126px] mx-auto">
          Effective security at construction sites involves proactive measures
          to reduce risks like theft, vandalism, and accidents. Trained security
          personnel, access control systems, and surveillance tools help protect
          equipment, materials, and workers.
        </p>

        <div className="grid grid-cols-12  gap-y-10  gap-x-10 mt-[60px]">
          {SecurityStrategiesData.map((item, index) => (
            <Card key={index} item={item} className={"!border-[#FFF0E0]"} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto my-20 bg-[#EBFFF1]/30 rounded-[40px] p-20 ">
        <Heading
          className="!mb-6 !mt-0 !text-[#222A5B] !text-center !tracking-[-3px] !max-w-[1126px] !mx-auto"
          title="Expert Security Solutions Designed For The Unique Needs Of Construction Sites."
        />
        <p className="font-dmSans text-xl !leading-8  text-[#333333] font-normal text-center max-w-[1126px] mx-auto">
          Construction sites present unique security challenges, from
          safeguarding valuable equipment and materials to managing access and
          preventing vandalism. Expert security solutions address these specific
          needs with a combination of advanced technology and professional
          personnel.
        </p>

        <div className="grid grid-cols-12 gap-8 mt-[60px]">
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

        <div className="grid grid-cols-12  gap-y-6  gap-x-6 mt-[60px]">
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
