"use client";
import Header from "../../components/Header";
import FreeQuote from "../../components/FreeQuote";
import Heading from "../../utils/Heading";
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
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import person from "../../public/Residential/person-01.svg";
import Quote from "../../public/Residential/iconmonstr-quote.svg";
import TrainedSecurity from "../../public/ConstructionSites/Trained-Security.svg";
import RealTimeA from "../../public/CommercialBuilding/Real-Time-01.svg";
import RealTimeB from "../../public/CommercialBuilding/Real-Time-02.svg";
import RealTimeC from "../../public/CommercialBuilding/Real-Time-03.svg";
import IncidentManagementA from "../../public/Residential/IncidentManagement-01.svg";
import IncidentManagementB from "../../public/Residential/IncidentManagement-02.svg";
import IncidentManagementC from "../../public/Residential/IncidentManagement-03.svg";
import VisitorAssistanceB from "../../public/Residential/Community-Patrol-01.svg";
import VisitorAssistanceA from "../../public/CommercialBuilding/Visitor-Assistance-01.svg";
import VisitorAssistanceC from "../../public/CommercialBuilding/Visitor-Assistance-02.svg";
const tabs = [
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

const SecurityStrategiesData = [
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
const residentialFeatures = [
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

const ShoppingCenter = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1342px] mt-20 mb-40 mx-auto">
        <div className="flex gap-12">
          <div className="relative pt-[14px]">
            <Image
              src={Shoppingmall}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="streetHouses"
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
                Comprehensive Security Services To Safeguard Your Shopping
                Center
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-dmSans text-xl !leading-8 font-normal text-[#333333] max-w-[806px]">
                Ensuring peace of mind with reliable protection for your
                shopping center
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
              src={guard}
              className="rounded-3xl min-w-[399px] h-auto"
              alt="Security-Guard"
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
          className="!mb-6 !mt-0 !text-[#222A5B] !text-center"
          title="Securing Your Shopping Center With Experienced And Trusted Guards"
        />
        <p className="text-center font-dmSans text-xl !leading-8 text-[#333333] font-normal">
          Safeguard your shopping center with the expertise of our experienced
          and trusted security guards. With tailored solutions to meet your
          center's unique needs, we help you create a safe space that enhances
          shopper confidence and supports your business operations seamlessly.
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
            className="!mb-6 !mt-0 !text-[#222A5B] !text-center"
            title="Expert Shopping Mall Security For A Safe And Enjoyable Experience"
          />
          <p className="font-dmSans text-xl !leading-8 text-[#333333] font-normal !text-center">
            Deliver a secure and welcoming atmosphere with expert shopping mall
            security designed for a safe and enjoyable experience. By
            maintaining order and deterring theft or vandalism, we ensure your
            mall operates smoothly and remains a trusted destination. Tailored
            to the unique dynamics of your mall, our comprehensive security
            solutions prioritize safety without compromising the shopping
            experience.
          </p>
  

        <div className="grid grid-cols-12  gap-y-10  gap-x-10 mt-[60px]">
          {SecurityStrategiesData.map((item, index) => (
            <Card key={index} item={item} className={"!border-[#FFF0E0]"} />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto my-20 bg-[#EBFFF1]/30 rounded-[40px] p-20">
      
          <Heading
            className="!mb-6 !mt-0 !text-[#222A5B] !text-center"
            title="Round-The-Clock Security Guard Services For Shopping Centers"
          />
          <p className="font-dmSans text-xl !leading-8  text-[#333333] font-normal text-center">
            Maintain a secure shopping environment day and night with our 24/7
            security guard services. Our experienced security personnel are
            always on duty, conducting regular patrols, monitoring surveillance
            systems, and ensuring the safety of everyone on your premises.
          </p>
       

        <div className="grid grid-cols-12 gap-8 mt-[60px]">
          <div className=" col-span-4 ">
            <Image
              src={ShoppingCanterA}
              alt="ShoppingCanterA"
              className="w-full h-full rounded-[50px]"
              loading="lazy"
            />
          </div>
          <div className="col-span-8 ">
            <Image
              src={ShoppingCanterB}
              alt="ShoppingCanterB"
              className="w-full h-full rounded-[50px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-12  gap-y-6  gap-x-6 mt-[60px]">
          {residentialFeatures.map((item, index) => (
            <Card key={index} item={item}  />
          ))}
        </div>
      </div>
      <FreeQuote />
      <Footer />
    </>
  );
};

export default ShoppingCenter;
