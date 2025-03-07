"use client";
import Header from "../../components/Header";
import FreeQuote from "../../components/FreeQuote";
import Heading from "../../utils/Heading";
import Image from "next/image";
import checkmarkCircle from "../../public/Residential/checkmark-circle.svg";
import tabImageA from "../../public/ShoppingCenter/Shopping-image-A.png";
import tabImageB from "../../public/ShoppingCenter/Shopping-image-B.png";
import tabImageC from "../../public/ShoppingCenter/Shopping-image-C.png";
import Shoppingmall from "../../public/ShoppingCenter/Shopping-mall.png";
import guard from "../../public/ShoppingCenter/Shopping-mall-guard.png";
import ConectElement from "../../public/Residential/Conect-element.svg";
import Fire from "../../public/Residential/fire.svg";
import Gun from "../../public/Residential/gun.svg";
import Ellipse from "../../public/Ellipse.svg";
import Advancesurveilance from "../../public/ShoppingCenter/Advance-surveilance.svg";
import AcessControl from "../../public/ConstructionSites/Acess-Control.svg";
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
  const tabs = [
    {
      label: "Advanced Surveillance",
      icon: Advancesurveilance,
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
      icon: Rapidincident,
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
      <div className="w-full max-w-[1360px] mt-16 mb-[141px] mx-auto">
        <div className="flex gap-[93px]">
          <div className="relative">
            <Image
              src={Shoppingmall}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="streetHouses"
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
              Comprehensive Security Services To Safeguard Your Shopping Center
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-jakarta text-lg !leading-[30px] font-normal text-[#6B7280] max-w-[575px] ">
              Ensuring peace of mind with reliable protection for your shopping center
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
              src={guard}
              className="rounded-3xl min-w-[399px] h-auto"
              alt="Security-Guard"
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
            title="Securing Your Shopping Center With Experienced And Trusted Guards"
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal  ">
          Safeguard your shopping center with the expertise of our experienced and trusted security guards. With tailored solutions to meet your center's unique needs, we help you create a safe space that enhances shopper confidence and supports your business operations seamlessly.
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
            title="Expert Shopping Mall Security For A Safe And Enjoyable Experience"
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal">
          Deliver a secure and welcoming atmosphere with expert shopping mall security designed for a safe and enjoyable experience. By maintaining order and deterring theft or vandalism, we ensure your mall operates smoothly and remains a trusted destination. Tailored to the unique dynamics of your mall, our comprehensive security solutions prioritize safety without compromising the shopping experience.
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
            title="Round-The-Clock Security Guard Services For Shopping Centers"
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal">
          Maintain a secure shopping environment day and night with our 24/7 security guard services. Our experienced security personnel are always on duty, conducting regular patrols, monitoring surveillance systems, and ensuring the safety of everyone on your premises.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
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

export default ShoppingCenter
