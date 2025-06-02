"use client";
import Header from "../../components/Header";
import FreeQuote from "../../components/FreeQuote";
import Footer from "../../components/Footer";
import Heading from "../../utils/Heading";
import CommercialA from "../../public/CommercialBuilding/Commercial-image01.png";
import CommercialB from "../../public/CommercialBuilding/Commercial-image03.png";
import Image from "next/image";
import checkmarkCircle from "../../public/Residential/checkmark-circle.svg";
import VisitorManagement from "../../public/CommercialBuilding/Visitor-Management.svg";
import Continuousvigilance from "../../public/CommercialBuilding/Continuous-vigilance.svg";
import MonitorCCTV from "../../public/CommercialBuilding/Monitor-CCTV.svg";
import VisibleDitterence from "../../public/CommercialBuilding/Visible-Ditterence.svg";
import RealMonitoring from "../../public/CommercialBuilding/Real-time-Monitoring.svg";
import IncidentReporting from "../../public/CommercialBuilding/Incident-Reporting.svg";
import CustomSecurity from "../../public/CommercialBuilding/Custom-Security-Plan.svg";
import BuildingImage from "../../public/CommercialBuilding/Building-image-01.png";
import GuardImage from "../../public/CommercialBuilding/Guard-image-01.png";
import ConectElement from "../../public/Residential/Conect-element.svg";
import person from "../../public/Residential/person-02.svg";
import Card from "../../components/Card";
import RealTimeA from "../../public/CommercialBuilding/Real-Time-01.svg";
import RealTimeB from "../../public/CommercialBuilding/Real-Time-02.svg";
import RealTimeC from "../../public/CommercialBuilding/Real-Time-03.svg";
import IncidentManagementA from "../../public/Residential/IncidentManagement-01.svg";
import IncidentManagementB from "../../public/Residential/IncidentManagement-02.svg";
import IncidentManagementC from "../../public/Residential/IncidentManagement-03.svg";
import VisitorAssistanceB from "../../public/Residential/Community-Patrol-01.svg";
import VisitorAssistanceA from "../../public/CommercialBuilding/Visitor-Assistance-01.svg";
import VisitorAssistanceC from "../../public/CommercialBuilding/Visitor-Assistance-02.svg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Quote from "../../public/Residential/iconmonstr-quote.svg";

const CorporateBuildings = () => {
  const tabs = [
    {
      label: "Real-Time Monitoring",
      icon: RealMonitoring,
      image1: RealTimeA,
      image2: RealTimeB,
      image3: RealTimeC,
    },
    {
      label: "Incident Reporting",
      icon: IncidentReporting,
      image1: IncidentManagementA,
      image2: IncidentManagementB,
      image3: IncidentManagementC,
    },
    {
      label: "Visitor Assistance",
      icon: CustomSecurity,
      image1: VisitorAssistanceA,
      image2: VisitorAssistanceB,
      image3: VisitorAssistanceC,
    },
  ];
  const SecurityStrategiesData = [
    {
      icon: VisitorManagement,
      title: "Visitor Management",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
    },
    {
      icon: Continuousvigilance,
      title: "Continuous Vigilance",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
    },
    {
      icon: MonitorCCTV,
      title: "Monitor CCTV’s",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
    },
    {
      icon: VisibleDitterence,
      title: "Visible Deterrence",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
    },
  ];
  const residentialFeatures = [
    {
      icon: checkmarkCircle,
      title: "Seamless Security Operations",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
    },
    {
      icon: checkmarkCircle,
      title: "Smart Technology Integration",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
    },
    {
      icon: checkmarkCircle,
      title: "Expertly Trained Guards",
      description:
        "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
    },
    {
      icon: checkmarkCircle,
      title: "Custom Emergency Protocols",
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
              src={BuildingImage}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="BuildingImage"
              loading="lazy"
            />
            <div className="z-[51] absolute -right-[122px] bottom-[101px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image
                  src={VisitorManagement}
                  alt="Visitor Management"
                  className="w-4 h-4"
                />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Visitor Management
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <h1 className="font-dmSans text-[56px] !leading-[64px] font-semibold text-[#222A5B] tracking-[-1px] mb-6 capitalize">
                Comprehensive Security Services for All Types of Commercial
                Spaces
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-dmSans text-xl !leading-8 font-normal text-[#333333] max-w-[806px] ">
                At Plaza Protection provides customized security for commercial
                spaces of all sizes, ensuring reliable protection tailored to
                your needs.
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
              alt="GuardImage"
              loading="lazy"
            />

            <div className="z-[51] absolute -left-[60px] top-[121px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image
                  src={Continuousvigilance}
                  alt="Continuous vigilance"
                  className="w-4 h-4"
                />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Continuous Vigilance
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto mb-20 bg-[#F0F6FF] rounded-[40px] p-20 ">
       
          <Heading
            className="!mb-6 !mt-0 !text-[#222A5B] !text-center !tracking-[-3px]"
            title="Expert Security Solutions for Personalized Protection and Peace of Mind"
          />
          <p className="text-center font-dmSans text-xl !leading-8 text-[#333333] font-normal max-w-[1126px] mx-auto">
            Our expert security solutions are designed to offer peace of mind by
            blending advanced technology with experienced guards. We provide
            personalized protection plans tailored to your specific needs,
            ensuring that everyone feels safe and secure around the clock.
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
            title="Empowering your commercial space With Tailored Security solutions"
          />
          <p className="font-dmSans text-xl !leading-8 text-[#333333] font-normal !text-center max-w-[1126px] mx-auto">
            Elevate your security with customized solutions that fit your unique
            needs. Our tailored approach integrates professional guards,
            advanced technology, and proactive strategies to safeguard your
            workspace, protect your assets.
          </p>
       

        <div className="grid grid-cols-12  gap-y-10  gap-x-10 mt-[60px]">
          {SecurityStrategiesData.map((item, index) => (
            <Card key={index} item={item} className={"!border-[#FFF0E0]"} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto my-20 bg-[#EBFFF1]/30 rounded-[40px] p-20">
       
          <Heading
            className="!mb-6 !mt-0 !text-[#222A5B] !text-center !tracking-[-3px]"
            title="Round-The-Clock Vigilance For Your Peace Of Mind"
          />
          <p className="font-dmSans text-xl !leading-8  text-[#333333] font-normal text-center max-w-[1126px] mx-auto">
            True peace of mind starts with unyielding security. Our 24/7
            vigilance ensures every moment is covered, every corner protected,
            and every concern addressed—because your safety never takes a break,
            and neither do we.
          </p>
       

        <div className="grid grid-cols-12 gap-8 mt-[60px]">
          <div className="col-span-4 ">
            <Image
              src={CommercialA}
              alt="ResidentialA"
              className="w-full h-full rounded-[50px]"
              loading="lazy"
            />
          </div>
          <div className="col-span-8 ">
            <Image
              src={CommercialB}
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

export default CorporateBuildings;
