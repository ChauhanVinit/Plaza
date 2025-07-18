export { metadata } from './metadata';
import FreeQuote from "../../components/FreeQuote";
import Image from "next/image";
import checkmarkCircle from "../../public/Residential/checkmark-circle.svg";
import Shoppingmall from "../../public/ShoppingCenter/Shopping-mall.png";
import guard from "../../public/ShoppingCenter/Shopping-mall-guard.png";
import ConectElement from "../../public/Residential/Conect-element.svg";
import Advancesurveilance from "../../public/ShoppingCenter/Advance-surveilance.svg";
import Rapidincident from "../../public/ShoppingCenter/Rapid-incident-response.svg";
import VisitorManagement from "../../public/ShoppingCenter/Visitor-Management.svg";
import SurveillanceMonitoring from "../../public/ShoppingCenter/Surveillance-And-Monitoring.svg";
import AssetProtection from "../../public/ShoppingCenter/Asset-Protection.svg";
import Customsecurityplan from "../../public/ShoppingCenter/Custom-security-plan.svg";
import Emergencyprotocol from "../../public/ShoppingCenter/Emergency-protocol.svg";
import ShoppingCanterA from "../../public/ShoppingCenter/ShoppingCanterA.png";
import ShoppingCanterB from "../../public/ShoppingCenter/ShoppingCanterB.png";
import ShoppingCanterC from "../../public/ShoppingCenter/ShoppingCanterC.png";
import Card from "../../components/Card";
import person from "../../public/Residential/person-07.png";
import Quote from "../../public/Residential/iconmonstr-quote.svg";
import TrainedSecurity from "../../public/ConstructionSites/Trained-Security.svg";
import RealTimeA from "../../public/CommercialBuilding/Real-Time-01.png";
import RealTimeB from "../../public/CommercialBuilding/Real-Time-02.png";
import RealTimeC from "../../public/CommercialBuilding/Real-Time-03.png";
import IncidentManagementA from "../../public/Residential/IncidentManagement-01.png";
import IncidentManagementB from "../../public/Residential/IncidentManagement-02.png";
import IncidentManagementC from "../../public/Residential/IncidentManagement-03.png";
import VisitorAssistanceB from "../../public/Residential/Community-Patrol-01.png";
import VisitorAssistanceA from "../../public/CommercialBuilding/Visitor-Assistance-01.png";
import VisitorAssistanceC from "../../public/CommercialBuilding/Visitor-Assistance-02.png";
import IndustryTabs from "@/components/Industries/IndustryTabs";
import IndustryHighlights from "@/components/Industries/IndustryHighlights";
import IndustryFeatureList from "@/components/Industries/IndustryFeatureList";

const tabsdata = [
  {
    label: "Advanced Surveillance",
    icon: Advancesurveilance,
    image1: RealTimeA,
    image2: RealTimeB,
    image3: RealTimeC,
  },

  {
    label: "Rapid Incident Response",
    icon: Rapidincident,
    image1: IncidentManagementA,
    image2: IncidentManagementB,
    image3: IncidentManagementC,
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
    icon: SurveillanceMonitoring,
    title: "24/7 Surveillance And Monitoring",
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
    title: "Emergency Protocols",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
];
const featuresListdata = [
  {
    icon: checkmarkCircle,
    title: "Real-Time Monitoring",
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
    title: "Continuous Vigilance",
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
const industryTabContent  = {
  title:"Securing Your Shopping Center With Experienced And Trusted Guards",
  desc: "Safeguard your shopping center with the expertise of our experienced and trusted security guards. With tailored solutions to meet your center's unique needs, we help you create a safe space that enhances shopper confidence and supports your business operations seamlessly.",
};
 
const HighlightsContent  = {
  title:"Expert Shopping Mall Security For A Safe And Enjoyable Experience",
  desc: "Deliver a secure and welcoming atmosphere with expert shopping mall security designed for a safe and enjoyable experience. By maintaining order and deterring theft or vandalism, we ensure your mall operates smoothly and remains a trusted destination. Tailored to the unique dynamics of your mall, our comprehensive security solutions prioritize safety without compromising the shopping experience.",
};
const featuresListContent  = {
  title:"Round-The-Clock Security Guard Services For Shopping Centers",
  desc: "Maintain a secure shopping environment day and night with our 24/7 security guard services. Our experienced security personnel are always on duty, conducting regular patrols, monitoring surveillance systems, and ensuring the safety of everyone on your premises.",
  imgA:ShoppingCanterA,
  imgB:ShoppingCanterB,
  imgC:ShoppingCanterC,
};
const ShoppingCenter = () => {
  

  return (
    <>
      <div className="w-full px-4 sm:px-6 xl:px-10 2xl:px-0 2xl:max-w-[1342px] mt-10 2xl:mt-20 mb-20 2xl:mb-40 2xl:mx-auto">
        <div className="flex gap-12">
          <div className="relative pt-[14px] hidden xl:block">
            <Image
              src={Shoppingmall}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="Shopping Mall Exterior"
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
                Comprehensive Security Services To Safeguard Your Shopping
                Center
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-dmSans text-lg  2xl:text-xl 2xl:!leading-8 font-normal text-[#45535E] max-w-[820px] ">
                Plaza Protection offers full-spectrum security services to keep your shopping center safe and secure. Our experienced guards maintain a strong, visible presence while our patrols and monitoring systems help prevent theft, vandalism, and disturbances. 
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
                  Wade Warren
                </h3>
                <p className="text-sm font-dmSans font-normal text-[#6B7280]">
                  Manager
                </p>
                <p className="text-sm font-dmSans font-normal text-[#333333]">
                 Country Club Villa
                </p>
              </div>
              <div className="md:hidden">
                <Image src={Quote} alt="Quote icon representing client testimonial" className="w-[43px] h-[43px]" />
              </div>
            </div>

            <div>
              <p className="font-dmSans text-xl font-semibold text-[#45535E] tracking-[-0.5px] xl:max-w-[595px]">
                “Plaza protection provides outstanding security. Their guards
                are visible, approachable, and handle all situations with
                professionalism. They are truly reliable security partners.”
              </p>
            </div>
          </div>

          <div className="relative -mt-[232px] hidden xl:block">
            <Image
              src={guard}
              className="rounded-3xl min-w-[399px] h-auto"
              alt="Professional Security Guard Standing on Duty"
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

export default ShoppingCenter;
