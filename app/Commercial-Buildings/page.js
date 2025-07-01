"use client";
import FreeQuote from "../../components/FreeQuote";
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
import person from "../../public/Residential/person-04.png";
import RealTimeA from "../../public/CommercialBuilding/Real-Time-01.png";
import RealTimeB from "../../public/CommercialBuilding/Real-Time-02.png";
import RealTimeC from "../../public/CommercialBuilding/Real-Time-03.png";
import IncidentManagementA from "../../public/Residential/IncidentManagement-01.png";
import IncidentManagementB from "../../public/Residential/IncidentManagement-02.png";
import IncidentManagementC from "../../public/Residential/IncidentManagement-03.png";
import VisitorAssistanceB from "../../public/Residential/Community-Patrol-01.png";
import VisitorAssistanceA from "../../public/CommercialBuilding/Visitor-Assistance-01.png";
import VisitorAssistanceC from "../../public/CommercialBuilding/Visitor-Assistance-02.png";
import Quote from "../../public/Residential/iconmonstr-quote.svg";
import "@splidejs/react-splide/css";
import CommercialC from "../../public/CommercialBuilding/Commercial-image02.png";
import IndustryTabs from "@/components/Industries/IndustryTabs";
import IndustryHighlights from "@/components/Industries/IndustryHighlights";
import IndustryFeatureList from "@/components/Industries/IndustryFeatureList";
const CorporateBuildings = () => {
  const tabsdata = [
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
  const IndustryHighlightsData = [
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
  const featuresListdata = [
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
  const industryTabContent = {
    title: "Expert Security Solutions for Personalized Protection and Peace of Mind ",
    desc: "Our expert security solutions are designed to offer peace of mind by blending advanced technology with experienced guards. We provide personalized protection plans tailored to your specific needs, ensuring that everyone feels safe and secure around the clock.",
  };
  const HighlightsContent = {
    title: "Empowering your commercial space With Tailored Security solutions",
    desc: "Elevate your security with customized solutions that fit your unique needs. Our tailored approach integrates professional guards, advanced technology, and proactive strategies to safeguard your workspace, protect your assets.",
  };
  const featuresListContent = {
    title: "Round-The-Clock Vigilance For Your Peace Of Mind",
    desc: "True peace of mind starts with unyielding security. Our 24/7 vigilance ensures every moment is covered, every corner protected, and every concern addressed—because your safety never takes a break, and neither do we.",
    imgA: CommercialA,
    imgB: CommercialB,
    imgC: CommercialC,
  };
  return (
    <>
      <div className="w-full px-4 sm:px-6 xl:px-10 2xl:px-0 2xl:max-w-[1342px] mt-10 2xl:mt-20 mb-20 2xl:mb-40 2xl:mx-auto">
        <div className="flex gap-12">
          <div className="relative pt-[14px] hidden xl:block">
            <Image
              src={BuildingImage}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="Commercial Building"
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
              <h1 className="font-dmSans text-5xl !leading-[56px] lg:text-[52px] lg:!leading-[60px] 2xl:text-[56px] 2xl:!leading-[64px] font-semibold text-[#222A5B] tracking-[-3px] mb-6 capitalize">
                Comprehensive Security Services for All Types of Commercial Spaces

              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-dmSans text-lg  2xl:text-xl 2xl:!leading-8 font-normal text-[#45535E] max-w-[830px] ">
                 Plaza Protection offers tailored security solutions for commercial environments—office buildings, retail centers, warehouses, and more—with vigilant guards, advanced surveillance, and proactive patrols to protect your assets, employees, and customers.
              </p>
            </div>

            <div className="hidden xl:block absolute bottom-[9px] -left-20 z-50">
              <Image
                src={ConectElement}
                alt=""
                className="w-[713px]"
              />
            </div>
          </div>
        </div>
        <div className="xl:hidden relative mt-8  w-full max-w-[713px] mx-auto z-50">
          <Image
            src={ConectElement}
            alt=""
            className=" object-cover"
          />

          <div className="z-[51] absolute left-0 translate-x-6  top-0 translate-y-[3px] inline-flex items-center gap-1  sm:gap-2 px-2 sm:px-3 py-[5px] sm:py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
            <div className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
              <Image
                src={VisitorManagement}
                alt="Visitor Management"
                className="w-[10px] h-[10px] sm:w-4 sm:h-4"
              />
            </div>
            <div className="font-dmSans text-[8.46px]   sm:text-xs font-medium text-[#1A1A1A]">
              Visitor Management
            </div>
          </div>

          <div className="z-[51] absolute right-0 -translate-x-6 bottom-0 -translate-y-[8px]  inline-flex items-center gap-1  sm:gap-2 px-2 sm:px-3 py-[5px] sm:py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
            <div className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
              <Image
                src={Continuousvigilance}
                alt="Continuous Vigilance"
                className="w-[10px] h-[10px] sm:w-4 sm:h-4"
              />
            </div>
            <div className="font-dmSans text-[8.46px] !leading-[9.5px] sm:!leading-4 sm:text-xs font-medium text-[#1A1A1A]">
              Continuous Vigilance
            </div>
          </div>
        </div>
        <div className="flex items-start mt-8 xl:mt-[74px] gap-[52px] ">
          <div className="grow flex flex-col item-start md:flex-row md:items-center  gap-5 p-6 lg:p-[35px] rounded-3xl bg-[#FFB82E]/5">
            <div className="flex items-end gap-[14px]">
              <div className="min-w-[206px]">
                <div className="flex items-end justify-between">
                  <Image
                    src={person}
                    alt="Client profile photo"
                    className="w-[60px] h-[60px]"
                  />
                  <Image
                    src={Quote}
                    alt="Quote icon representing client testimonial"
                    className=" hidden md:block w-[43px] h-[43px]"
                  />
                </div>
                <h3 className="mt-1 text-base font-dmSans font-semibold text-[#171A1D]">
                  Arlene McCoy
                </h3>
                <p className="text-sm font-dmSans font-normal text-[#6B7280]">
                  Manager
                </p>
                <p className="text-sm font-dmSans font-normal text-[#333333]">
                  Carnegie Foundation
                </p>
              </div>
              <div className="md:hidden">
                <Image src={Quote} alt="Quote icon representing client testimonial" className="w-[43px] h-[43px]" />
              </div>
            </div>

            <div>
              <p className="font-dmSans text-xl font-semibold text-[#45535E] tracking-[-0.5px] xl:max-w-[595px]">
                We’ve been with plaza protection for over three years, and
                they’ve been consistently excellent. Their guards are
                dependable, their management is responsive.
              </p>
            </div>
          </div>
          <div className="relative -mt-[232px] hidden xl:block">
            <Image
              src={GuardImage}
              className="rounded-3xl min-w-[399px] h-auto"
              alt="Security Guard Monitoring Property"
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

      <IndustryTabs data={tabsdata} {...industryTabContent} />
      <IndustryHighlights
        data={IndustryHighlightsData}
        {...HighlightsContent}
      />
      <IndustryFeatureList data={featuresListdata} {...featuresListContent} />
      <FreeQuote />
    </>
  );
};

export default CorporateBuildings;
