export { metadata } from './metadata';
import FreeQuote from "../../components/FreeQuote";
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
import person from "../../public/Residential/person-06.png";
import Quote from "../../public/Residential/iconmonstr-quote.svg";
import VisibleDitterence from "../../public/CommercialBuilding/Visible-Ditterence.svg";
import AccessControlA from "../../public/ConstructionSites/Access-Control-01.png";
import AccessControlB from "../../public/ConstructionSites/Access-Control-02.png";
import AccessControlC from "../../public/ConstructionSites/Access-Control-03.png";
import VisitorAssistanceB from "../../public/Residential/Community-Patrol-01.png";
import VisitorAssistanceA from "../../public/CommercialBuilding/Visitor-Assistance-01.png";
import VisitorAssistanceC from "../../public/CommercialBuilding/Visitor-Assistance-02.png";
import LocationMonitoringA from "../../public/Residential/LocationMonitoring-01.png";
import LocationMnitoringB from "../../public/Residential/LocationMonitoring-02.png";
import LocationMnitoringC from "../../public/Residential/LocationMonitoring-03.png";
import ConstructionC from "../../public/ConstructionSites/Construction-C.png";
import IndustryTabs from "@/components/Industries/IndustryTabs";
import IndustryHighlights from "@/components/Industries/IndustryHighlights";
import IndustryFeatureList from "@/components/Industries/IndustryFeatureList";

const ConstructionSites = () => {
  const tabsdata = [
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
  const IndustryHighlightsData = [
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
  const featuresListdata = [
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
const industryTabContent  = {
  title:"Customized Security Solutions For Seamless Construction Operations",
  desc: "Every construction site has unique challenges, requiring tailored security solutions to ensure smooth and secure operations.By aligning security measures with the specific needs of your project, customized solutions ensure the safety of workers equipment, and materials, fostering a secure environment that supports uninterrupted construction progress.",
};
 const HighlightsContent  = {
  title:"Mitigating Risks And Enhancing Security At Construction Sites",
  desc: "Effective security at construction sites involves proactive measures to reduce risks like theft, vandalism, and accidents. Trained security personnel, access control systems, and surveillance tools help protect equipment, materials, and workers.",
};
const featuresListContent  = {
  title:"Expert Security Solutions Designed For The Unique Needs Of Construction Sites.",
  desc: "Construction sites present unique security challenges, from safeguarding valuable equipment and materials to managing access and preventing vandalism. Expert security solutions address these specific needs with a combination of advanced technology and professional personnel.",
  imgA:ConstructionB,
  imgB:ConstructionA,
  imgC:ConstructionC,
};

  return (
    <>
      
      <div className="w-full px-4 sm:px-6 xl:px-10 2xl:px-0 2xl:max-w-[1342px] mt-10 2xl:mt-20 mb-20 2xl:mb-40 2xl:mx-auto">
        <div className="flex gap-12">
          <div className="relative pt-[14px] hidden xl:block">
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
              <h1 className="font-dmSans text-5xl !leading-[56px] lg:text-[52px] lg:!leading-[60px] 2xl:text-[56px] 2xl:!leading-[64px] font-semibold text-[#222A5B] tracking-[-3px] mb-6 capitalize">
                Comprehensive Security Guard Services For Construction Sites
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-dmSans text-lg  2xl:text-xl 2xl:!leading-8 font-normal text-[#45535E] max-w-[806px] ">
                Plaza Protection delivers construction-site security through trained guards who secure equipment, materials, and personnel via strict access control, regular patrols, and proactive hazard monitoring.
              </p>
            </div>

            <div className="hidden xl:block absolute bottom-[9px] -left-20 z-50">
              <Image
                src={ConectElement}
                alt=""
                className="w-[713px]"
              />
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
                    src={Emergencyprotocol}
                    alt="Emergency Protocols"
                    className="w-[10px] h-[10px] sm:w-4 sm:h-4"
                  />
                </div>
                <div className="font-dmSans text-[8.46px]   sm:text-xs font-medium text-[#1A1A1A]">
                  Emergency Protocols
                </div>
              </div>

              <div className="z-[51] absolute right-0 -translate-x-6 bottom-0 -translate-y-[8px]  inline-flex items-center gap-1  sm:gap-2 px-2 sm:px-3 py-[5px] sm:py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
                <div className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                  <Image
                    src={TrainedSecurity}
                    alt="Trained Security Personnel"
                    className="w-[10px] h-[10px] sm:w-4 sm:h-4"
                  />
                </div>
                <div className="font-dmSans text-[8.46px] !leading-[9.5px] sm:!leading-4 sm:text-xs font-medium text-[#1A1A1A]">
                  Trained Security Personnel
                </div>
              </div>
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
                    className="hidden md:block w-[43px] h-[43px]"
                  />
                </div>
                <h3 className="mt-1 text-base font-dmSans font-semibold text-[#171A1D]">
                  Marvin McKinney

                </h3>
                <p className="text-sm font-dmSans font-normal text-[#6B7280]">
                  Manager
                </p>
                <p className="text-sm font-dmSans font-normal text-[#333333]">
                  Essex
                </p>
              </div>
              <div className="md:hidden">
               
                <Image src={Quote} alt="Quote icon representing client testimonial" className="w-[43px] h-[43px]" />
              </div>
            </div>

            <div>
              <p className="font-dmSans text-xl font-semibold text-[#45535E] tracking-[-0.5px] xl:max-w-[595px]">
               “They are always on time, always professional and reliable. They handle access control, fire watch, and equipment monitoring with total professionalism. Plaza protection kept the site secure the entire time.”

              </p>
            </div>
          </div>

          <div className="relative -mt-[232px] hidden xl:block">
            <Image
              src={GuardImage}
              className="rounded-3xl min-w-[399px] h-auto"
              alt="Security Guard at Construction Site"
              loading="lazy"
            />

            <div className="z-[51] absolute -left-[105px] top-[121px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image src={TrainedSecurity} alt="Trained Security Personnel" className="w-4 h-4" />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Trained Security Personnel
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndustryTabs data={tabsdata} {...industryTabContent } />
       <IndustryHighlights data={IndustryHighlightsData} {...HighlightsContent} />
       <IndustryFeatureList data={featuresListdata} {...featuresListContent}  />
      <FreeQuote />
     
    </>
  );
};

export default ConstructionSites;
