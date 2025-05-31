"use client";
import Header from "../../components/Header";
import FreeQuote from "../../components/FreeQuote";
import Heading from "../../utils/Heading";
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
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import person from "../../public/Residential/person-01.svg";
import Quote from "../../public/Residential/iconmonstr-quote.svg";
import LocationMonitoringA from "../../public/Residential/LocationMonitoring-01.svg";
import LocationMnitoringB from "../../public/Residential/LocationMonitoring-02.svg";
import LocationMnitoringC from "../../public/Residential/LocationMonitoring-03.svg";
import RealTimeA from "../../public/CommercialBuilding/Real-Time-01.svg";
import RealTimeB from "../../public/CommercialBuilding/Real-Time-02.svg";
import RealTimeC from "../../public/CommercialBuilding/Real-Time-03.svg";
import VisitorAssistanceB from "../../public/Residential/Community-Patrol-01.svg";
import VisitorAssistanceA from "../../public/CommercialBuilding/Visitor-Assistance-01.svg";
import VisitorAssistanceC from "../../public/CommercialBuilding/Visitor-Assistance-02.svg";
import SurveillanceMonitoring from "../../public/ShoppingCenter/Surveillance-And-Monitoring.svg";
import Realtime from "../../public/HospitalSecurity/Real-time-communication.svg";

const tabs = [
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

const SecurityStrategiesData = [
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
const residentialFeatures = [
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

const HospitalSecurity = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1342px] mt-20 mb-40 mx-auto">
        <div className="flex gap-12">
          <div className="relative pt-[14px]">
            <Image
              src={HospitalImage}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="HospitalImage"
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
              <h1 className="font-dmSans text-[56px] !leading-[64px] font-semibold text-[#222A5B] tracking-[-1px] mb-6">
                Ensuring Patient And Staff Safety With Professional Hospital
                Security
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-dmSans text-xl !leading-8 font-normal text-[#333333] max-w-[806px]">
                Protecting What Matters Most in Healthcare Spaces
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
              src={HospitalGuardImage}
              className="rounded-3xl min-w-[399px] h-auto"
              alt="HospitalGuardImage"
              loading="lazy"
            />

            <div className="z-[51] absolute -left-[105px] top-[121px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image src={Customsecurityplan} alt="Gun" className="w-4 h-4" />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Custom Security Plans
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto mb-20 bg-[#F0F6FF] rounded-[40px] p-20">
        <Heading
          className="!mb-6 !mt-0 !text-[#222A5B] !text-center"
          title="Seamless Security For Safe And Efficient Healthcare Operations"
        />
        <p className="text-center font-dmSans text-xl !leading-8 text-[#333333] font-normal">
          Seamless security ensures the safety and efficiency of healthcare
          operations by protecting staff, patients, visitors, and critical
          assets. Advanced surveillance, access control, and visitor management
          prevent unauthorized access and safeguard sensitive areas like
          emergency rooms and patient records.
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
          title="Ensuring Hospital Security With Trained And Reliable Security Personnel"
        />
        <p className="font-dmSans text-xl !leading-8 text-[#333333] font-normal !text-center">
          Ensure the safety and security of your hospital with our trained and
          reliable security personnel. Our team is equipped with the knowledge
          and expertise to handle any security challenges, from monitoring
          entrances and exits to managing emergency situations.
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
          title="Guarding Hospitals With Proactive Security Solutions For Optimal Protection"
        />
        <p className="font-dmSans text-xl !leading-8  text-[#333333] font-normal text-center">
          Hospitals face unique security challenges, requiring customized
          solutions to ensure safety and efficiency. Our tailored security
          strategies are designed to meet the unique needs of healthcare
          facilities, delivering peace of mind and ensuring the safety of
          everyone within your hospital, day and night.
        </p>

        <div className="grid grid-cols-12 gap-8 mt-[60px]">
          <div className=" col-span-4 ">
            <Image
              src={HospitalSecurityA}
              alt="HospitalSecurityA"
              className="w-full h-full rounded-[50px]"
              loading="lazy"
            />
          </div>
          <div className="col-span-8 ">
            <Image
              src={HospitalSecurityB}
              alt="HospitalSecurityB"
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

export default HospitalSecurity;
