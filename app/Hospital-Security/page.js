"use client";
import Header from "../../components/Header";
import FreeQuote from "../../components/FreeQuote";
import Heading from "../../utils/Heading";
import Image from "next/image";
import checkmarkCircle from "../../public/Residential/checkmark-circle.svg";
import tabImageA from "../../public/HospitalSecurity/Tab-image-A.png";
import tabImageB from "../../public/HospitalSecurity/Tab-image-B.png";
import tabImageC from "../../public/HospitalSecurity/Tab-image-C.png";
import HospitalImage from "../../public/HospitalSecurity/HospitalImage.png";
import HospitalGuardImage from "../../public/HospitalSecurity/HospitalGuardImage.png";
import ConectElement from "../../public/Residential/Conect-element.svg";
import Fire from "../../public/Residential/fire.svg";
import Gun from "../../public/Residential/gun.svg";
import Ellipse from "../../public/Ellipse.svg";
import Security24 from "../../public/Residential/Security-24.svg";
import AcessControl from "../../public/HospitalSecurity/AccessControl.svg";
import IncidentReporting from "../../public/HospitalSecurity/IncidentReporting.svg";
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
  const tabs = [
    {
      label: "24/7 Surveillance And Monitoring",
      icon: Security24,
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
      label: "Rapid Incident Response",
      icon: IncidentReporting,
      image1: tabImageB,
      image2: tabImageC,
      image3: tabImageA,
    },
    {
      label: "Visitor Management",
      icon:  VisitorManagement,
      image1: tabImageC,
      image2: tabImageA,
      image3: tabImageB,
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
      title: "Emergency Protocols",
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
      <div className="w-full max-w-[1360px] mt-16 mb-[141px] mx-auto">
        <div className="flex gap-[93px]">
          <div className="relative">
            <Image
              src={HospitalImage}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="HospitalImage"
              loading="lazy"
            />
            <div className="z-[51] absolute -right-[104px] bottom-24 inline-flex items-center gap-2 pl-3 pr-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-[#E8EEFF]">
                <Image src={Gun} alt="Gun" className="w-4 h-4" />
              </div>
              <div className="font-urbanist text-xs font-semibold text-[#11205A]">
                Unarmed Security
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <h1 className="font-urbanist text-[56px] !leading-[64px] font-bold text-[#222A5B] mb-6">
                Ensuring Patient And Staff Safety With Professional Hospital
                Security
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-jakarta text-lg !leading-[30px] font-normal text-[#6B7280] max-w-[575px] ">
                Protecting What Matters Most in Healthcare Spaces
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

        <div className="flex gap-6 mt-12 items-start">
          <div className="p-6 rounded-3xl bg-[#2877FF]/5 flex flex-col gap-4">
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
          </div>
          <div className=" p-6 rounded-3xl border-[3px] border-[#F1F1F1]">
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
          </div>
          <div className="relative mt-[-215px]">
            <Image
              src={HospitalGuardImage}
              className="rounded-3xl min-w-[399px] h-auto"
              alt="HospitalGuardImage"
              loading="lazy"
            />

            <div className="z-[51] absolute -left-[59px] top-[136px] inline-flex items-center gap-2 pl-3 pr-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-[#E8EEFF]">
                <Image src={Fire} alt="Gun" className="w-4 h-4" />
              </div>
              <div className="font-urbanist text-xs font-semibold text-[#11205A]">
                Fire Watch
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto mb-20 bg-[#EDF5FF] rounded-[40px] p-20 flex flex-col gap-[60px]">
        <div className="text-center">
          <Heading
            className="!mb-6 !mt-0"
            title="Seamless Security For Safe And Efficient Healthcare Operations"
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal  ">
          Seamless security ensures the safety and efficiency of healthcare operations by protecting staff, patients, visitors, and critical assets. Advanced surveillance, access control, and visitor management prevent unauthorized access and safeguard sensitive areas like emergency rooms and patient records.
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
                          className="rounded-3xl !w-full h-[324px] object-cover"
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
            title="Ensuring Hospital Security With Trained And Reliable Security Personnel"
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal">
          Ensure the safety and security of your hospital with our trained and reliable security personnel. Our team is equipped with the knowledge and expertise to handle any security challenges, from monitoring entrances and exits to managing emergency situations.
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
            title="Guarding Hospitals With Proactive Security Solutions For Optimal Protection"
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal">
          Hospitals face unique security challenges, requiring customized solutions to ensure safety and efficiency. Our tailored security strategies are designed to meet the unique needs of healthcare facilities, delivering peace of mind and ensuring the safety of everyone within your hospital, day and night.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
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
}

export default HospitalSecurity
