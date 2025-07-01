"use client";
import FreeQuote from "../../components/FreeQuote";
import Image from "next/image";
import checkmarkCircle from "../../public/Residential/checkmark-circle.svg";
import HospitalImage from "../../public/HospitalSecurity/HospitalImage.png";
import HospitalGuardImage from "../../public/HospitalSecurity/HospitalGuardImage.png";
import ConectElement from "../../public/Residential/Conect-element.svg";
import VisitorManagement from "../../public/ShoppingCenter/Visitor-Management.svg";
import PatientStaff from "../../public/HospitalSecurity/Patient-Staff-Safety.svg";
import AssetProtection from "../../public/HospitalSecurity/Asset-Protection.svg";
import Customsecurityplan from "../../public/HospitalSecurity/Custom-Security-Plan.svg";
import Emergencyprotocol from "../../public/HospitalSecurity/Emergency Preparedness.svg";
import HospitalSecurityA from "../../public/HospitalSecurity/HospitalSecurityA.png";
import HospitalSecurityB from "../../public/HospitalSecurity/HospitalSecurityB.png";
import HospitalSecurityC from "../../public/HospitalSecurity/HospitalSecurityC.png";
import person from "../../public/Residential/person-08.png";
import Quote from "../../public/Residential/iconmonstr-quote.svg";
import LocationMonitoringA from "../../public/Residential/LocationMonitoring-01.png";
import LocationMnitoringB from "../../public/Residential/LocationMonitoring-02.png";
import LocationMnitoringC from "../../public/Residential/LocationMonitoring-03.png";
import RealTimeA from "../../public/CommercialBuilding/Real-Time-01.png";
import RealTimeB from "../../public/CommercialBuilding/Real-Time-02.png";
import RealTimeC from "../../public/CommercialBuilding/Real-Time-03.png";
import VisitorAssistanceB from "../../public/Residential/Community-Patrol-01.png";
import VisitorAssistanceA from "../../public/CommercialBuilding/Visitor-Assistance-01.png";
import VisitorAssistanceC from "../../public/CommercialBuilding/Visitor-Assistance-02.png";
import SurveillanceMonitoring from "../../public/ShoppingCenter/Surveillance-And-Monitoring.svg";
import Realtime from "../../public/HospitalSecurity/Real-time-communication.svg";
import IndustryTabs from "@/components/Industries/IndustryTabs";
import IndustryHighlights from "@/components/Industries/IndustryHighlights";
import IndustryFeatureList from "@/components/Industries/IndustryFeatureList";
const tabsdata = [
  {
    label: "24/7 Surveillance And Monitoring",
    icon: SurveillanceMonitoring,
    image1: LocationMonitoringA,
    image2: LocationMnitoringB,
    image3: LocationMnitoringC,
  },

  {
    label: "Alarm Response",
    icon: Realtime,
    image1: RealTimeA,
    image2: RealTimeB,
    image3: RealTimeC,
  },
  {
    label: "Visitor Management",
    icon: VisitorManagement,
    image1: VisitorAssistanceA,
    image2: VisitorAssistanceB,
    image3: VisitorAssistanceC,
  },
];

const IndustryHighlightsData = [
  {
    icon: PatientStaff,
    title: "Patient And Staff Safety",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
  {
    icon: AssetProtection,
    title: "Asset Protection",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
  {
    icon: Customsecurityplan,
    title: "Custom Security Plans",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
  {
    icon: Emergencyprotocol,
    title: "Emergency Preparedness",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
];
const featuresListdata = [
  {
    icon: checkmarkCircle,
    title: "Patient Escort Services",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
  },
  {
    icon: checkmarkCircle,
    title: "Fire Watch Services",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
  },
  {
    icon: checkmarkCircle,
    title: "Secure Parking Management",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
  },
  {
    icon: checkmarkCircle,
    title: "Remote Area Surveillance",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
  },
];

const industryTabContent = {
  title: "Seamless Security For Safe And Efficient Healthcare Operations",
  desc: "Seamless security ensures the safety and efficiency of healthcare operations by protecting staff, patients, visitors, and critical assets. Advanced surveillance, access control, and visitor management prevent unauthorized access and safeguard sensitive areas like emergency rooms and patient records.",
};
const HighlightsContent = {
  title:
    "Ensuring Hospital Security With Trained And Reliable Security Personnel",
  desc: "Ensure the safety and security of your hospital with our trained and reliable security personnel. Our team is equipped with the knowledge and expertise to handle any security challenges, from monitoring entrances and exits to managing emergency situations.",
};

const featuresListContent = {
  title:
    "Guarding Hospitals With Proactive Security Solutions For Optimal Protection",
  desc: "Hospitals face unique security challenges, requiring customized solutions to ensure safety and efficiency. Our tailored security strategies are designed to meet the unique needs of healthcare facilities, delivering peace of mind and ensuring the safety of everyone within your hospital, day and night.",
  imgA: HospitalSecurityA,
  imgB: HospitalSecurityB,
  imgC: HospitalSecurityC,
};

const HospitalSecurity = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-6 xl:px-10 2xl:px-0 2xl:max-w-[1342px] mt-10 2xl:mt-20 mb-20 2xl:mb-40 2xl:mx-auto">
        <div className="flex gap-12">
          <div className="relative pt-[14px] hidden xl:block">
            <Image
              src={HospitalImage}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="Exterior View of a Modern Hospital Building"
              loading="lazy"
            />
            <div className="z-[51] absolute -right-[144px] bottom-[101px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-[#E8EEFF]">
                <Image
                  src={PatientStaff}
                  alt="Patient And Staff Safety"
                  className="w-4 h-4"
                />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Patient And Staff Safety
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <h1 className="font-dmSans text-5xl !leading-[56px] lg:text-[52px] lg:!leading-[60px] 2xl:text-[56px] 2xl:!leading-[64px] font-semibold text-[#222A5B] tracking-[-3px] mb-6 capitalize">
                Comprehensive Security for Patient and Staff Safety
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-dmSans text-lg  2xl:text-xl 2xl:!leading-8 font-normal text-[#45535E] max-w-[806px] ">
                Plaza Protection delivers expert security for healthcare
                facilities—our trained personnel ensure vigilant monitoring,
                access control, and rapid response to keep patients, staff, and
                visitors safe and compliant.
              </p>
            </div>

            <div className="hidden xl:block absolute bottom-[9px] -left-20 z-50">
              <Image src={ConectElement} alt="" className="w-[713px]" />
            </div>
          </div>
        </div>
        <div className="xl:hidden relative mt-8  w-full max-w-[713px] mx-auto z-50">
          <Image src={ConectElement} alt="" className="object-cover" />

          <div className="z-[51] absolute left-0 translate-x-6  top-0 translate-y-[3px] inline-flex items-center gap-1  sm:gap-2 px-2 sm:px-3 py-[5px] sm:py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
            <div className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
              <Image
                src={PatientStaff}
                alt="Patient And Staff Safety"
                className="w-[10px] h-[10px] sm:w-4 sm:h-4"
              />
            </div>
            <div className="font-dmSans text-[8.46px]   sm:text-xs font-medium text-[#1A1A1A]">
              Patient And Staff Safety
            </div>
          </div>

          <div className="z-[51] absolute right-0 -translate-x-6 bottom-0 -translate-y-[8px]  inline-flex items-center gap-1  sm:gap-2 px-2 sm:px-3 py-[5px] sm:py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
            <div className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
              <Image
                src={Customsecurityplan}
                alt="Custom Security Plans"
                className="w-[10px] h-[10px] sm:w-4 sm:h-4"
              />
            </div>
            <div className="font-dmSans text-[8.46px] !leading-[9.5px] sm:!leading-4 sm:text-xs font-medium text-[#1A1A1A]">
              Custom Security Plans
            </div>
          </div>
        </div>
        <div className="flex items-start mt-[74px] gap-[52px] ">
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
                  Jerome Bell
                </h3>
                <p className="text-sm font-dmSans font-normal text-[#6B7280]">
                  Manager
                </p>
                <p className="text-sm font-dmSans font-normal text-[#333333]">
                  Willis & Company
                </p>
              </div>
              <div className="md:hidden">
                <Image
                  src={Quote}
                  alt="Quote icon representing client testimonial"
                  className="w-[43px] h-[43px]"
                />
              </div>
            </div>

            <div>
              <p className="font-dmSans text-lg font-semibold text-[#45535E] tracking-[-0.5px] xl:max-w-[595px]">
                “We appreciate Plaza protection’s attention to detail and their
                compassionate approach. Their team is always vigilant, and quick
                to respond to any situation without disrupting care.”
              </p>
            </div>
          </div>

          <div className="relative -mt-[232px] hidden xl:block">
            <Image
              src={HospitalGuardImage}
              className="rounded-3xl min-w-[399px] h-auto"
              alt="Hospital Security Guard Ensuring Safety"
              loading="lazy"
            />

            <div className="z-[51] absolute -left-[105px] top-[121px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image
                  src={Customsecurityplan}
                  alt="Custom Security Plans"
                  className="w-4 h-4"
                />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Custom Security Plans
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

export default HospitalSecurity;
