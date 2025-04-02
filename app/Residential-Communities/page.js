"use client";
import Header from "../../components/Header";
import FreeQuote from "../../components/FreeQuote";
import Heading from "../../utils/Heading";
import ResidentialA from "../../public/Residential/residential-image-01.png";
import ResidentialB from "../../public/Residential/residential-image-02.png";
import Image from "next/image";
import checkmarkCircle from "../../public/Residential/checkmark-circle.svg";
import Visitorcheck from "../../public/Residential/Visitor-check-in.svg";
import Surveillance from "../../public/Residential/Surveillance-and-camera-monitoring.svg";
import FrontDesk from "../../public/Residential/Front-Desk-Support.svg";
import CommunityParking from "../../public/Residential/Community-Parking.svg";
import Security24 from "../../public/Residential/Security-24.svg";
import SecureGate from "../../public/Residential/Secure-Gate.svg";
import Vehicle from "../../public/Residential/Vehicle.svg";
import Realincident from "../../public/Residential/Real-time-incident.svg";
import residential_C from "../../public/Residential/residential-image-03.png";
import residential_E from "../../public/Residential/residential-image-05.png";
import residential_D from "../../public/Residential/residential-image-04.png";
import streetHouses from "../../public/Residential/street-amidst-houses-against-sky.png";
import GuardImage from "../../public/Residential/GuardImage.png";
import ConectElement from "../../public/Residential/Conect-element.svg";
import Fire from "../../public/Residential/fire.svg";
import Gun from "../../public/Residential/gun.svg";
import Ellipse from "../../public/Ellipse.svg";
import Footer from "../../components/Footer";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Card from "../../components/Card";

const tabs = [
  {
    label: "24/7 On-Site Security Coverage",
    icon: Security24,
    image1: residential_C,
    image2: residential_D,
    image3: residential_E,
  },
  {
    label: "Secure Gate & Entry Monitoring",
    icon: SecureGate,
    image1: residential_D,
    image2: residential_C,
    image3: residential_E,
  },
  {
    label: "Vehicle and Pedestrian Patrols",
    icon: Vehicle,
    image1: residential_C,
    image2: residential_D,
    image3: residential_E,
  },
  {
    label: "Real-Time Incident Reporting",
    icon: Realincident,
    image1: residential_E,
    image2: residential_D,
    image3: residential_C,
  },
];

const residentialFeatures = [
  {
    icon: checkmarkCircle,
    title: "24/7 Security Personnel Availability",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
  },
  {
    icon: checkmarkCircle,
    title: "Regularly Scheduled Patrols",
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
    title: "Detailed Daily Activity Reporting (DAR)",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. ",
  },
];

const SecurityStrategiesData = [
  {
    icon: Visitorcheck,
    title: "Visitor & Vendor Check-In Services",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
  {
    icon: Surveillance,
    title: "Surveillance Camera Monitoring",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
  {
    icon: FrontDesk,
    title: "Concierge and Front Desk Support",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
  {
    icon: CommunityParking,
    title: "Enforcing Community Parking Regulations",
    description:
      "Our tailored security services are designed to provide each community with a personalized approach to safety. From sophisticated surveillance systems to expertly ",
  },
];

const ResidentialCommunities = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1360px] mt-16 mb-[141px] mx-auto">
        <div className="flex gap-[93px]">
          <div className="relative">
            <Image
              src={streetHouses}
              width={302}
              height={470}
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
                Trusted Security Guards For Gated Neighborhoods
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-jakarta text-lg !leading-[30px] font-normal text-[#6B7280] max-w-[572px] ">
                Professional, highly-trained security personnel offering
                reliable protection and peace of mind for your gated community.
              </p>
            </div>

            <div className="absolute bottom-0 -left-[126px] z-50">
              <Image src={ConectElement} alt="ConectElement" width={713} />
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-12 items-start">
          <div className="p-6 rounded-3xl bg-[#2877FF]/5 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={Ellipse}
                  width={60}
                  height={60}
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
              src={GuardImage}
              width={399}
              height={429}
              className="rounded-3xl"
              alt="Guard Image"
              loading="lazy"
            />

            <div className="z-[51] absolute -left-[59px] top-[136px] inline-flex items-center gap-2 pl-3 pr-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-6 h-6 inline-flex justify-center items-center rounded-full bg-[#E8EEFF]">
                <Image src={Fire} alt="Fire" width={16} height={16} />
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
            title="Comprehensive Security Services For Gated Neighborhoods"
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal">
            Plaza Protection offers comprehensive security solutions tailored
            for gated neighborhoods, ensuring residents feel safe and secure
            24/7. Our expert security guards are equipped with the latest
            technology and training to monitor entrances, patrol perimeters,
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
                      height={32}
                      width={32}
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
                          className="rounded-3xl"
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
        <div className="text-center">
          <Heading
            className="!mb-6 !mt-0"
            title="Tailored Security Strategies For Your Gated Community"
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal">
            Every gated neighborhood is unique, and Plaza Protection understands
            that one size doesn’t fit all. We work closely with your community
            to develop a security plan that’s personalized to meet your specific
            needs. From concierge services to monitoring visitor access, our
            team ensures that your residents are safe and your community is
            well-protected.
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
            title="Consistent, Round-The-Clock Protection For Gated Communities"
          />
          <p className="font-jakarta text-lg leading-8 text-[#374049] font-normal">
            With Plaza Protection, your gated community benefits from continuous
            security coverage. Our well-trained guards maintain vigilance 24/7,
            providing a visible deterrent to crime and responding quickly to any
            incidents. Whether it's a minor complaint or a major security
            concern, our team is ready to address it promptly and
            professionally.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className=" col-span-4 ">
            <Image
              src={ResidentialA}
              alt="ResidentialA"
              className="w-full h-full rounded-[50px]"
              loading="lazy"
            />
          </div>
          <div className="col-span-8 ">
            <Image
              src={ResidentialB}
              alt="ResidentialB"
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
};

export default ResidentialCommunities;
