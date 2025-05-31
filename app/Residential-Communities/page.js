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
import Vehicle from "../../public/Residential/Vehicle.svg";
import streetHouses from "../../public/Residential/banner-image-01.png";
import GuardImage from "../../public/Residential/GuardImage.png";
import ConectElement from "../../public/Residential/Conect-element.svg";
import person from "../../public/Residential/person-01.svg";
import Footer from "../../components/Footer";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Card from "../../components/Card";
import InstantAlerts from "../../public/Residential/Instant-Threat-Alerts.svg";
import LocationMonitoringA from "../../public/Residential/LocationMonitoring-01.svg";
import LocationMnitoringB from "../../public/Residential/LocationMonitoring-02.svg";
import LocationMnitoringC from "../../public/Residential/LocationMonitoring-03.svg";
import IncidentManagementA from "../../public/Residential/IncidentManagement-01.svg";
import IncidentManagementB from "../../public/Residential/IncidentManagement-02.svg";
import IncidentManagementC from "../../public/Residential/IncidentManagement-03.svg";
import CommunityPatrolA from "../../public/Residential/Community-Patrol-01.svg";
import CommunityPatrolB from "../../public/Residential/Community-Patrol-02.svg";
import CommunityPatrolC from "../../public/Residential/Community-Patrol-03.svg";
import Quote from "../../public/Residential/iconmonstr-quote.svg";

const tabs = [
  {
    label: "Advance Location Monitoring",
    icon: Security24,
    image1: LocationMonitoringA,
    image2: LocationMnitoringB,
    image3: LocationMnitoringC,
  },
  {
    label: "Effective Incident Management",
    icon: InstantAlerts,
    image1: IncidentManagementA,
    image2: IncidentManagementB,
    image3: IncidentManagementC,
  },
  {
    label: "Community Patrol",
    icon: Vehicle,
    image1: CommunityPatrolA,
    image2: CommunityPatrolB,
    image3: CommunityPatrolC,
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
      <div className="w-full max-w-[1342px] mt-20 mb-40 mx-auto">
        <div className="flex gap-12">
          <div className="relative pt-[14px]">
            <Image
              src={streetHouses}
              width={302}
              height={470}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="streetHouses"
              loading="lazy"
            />
            <div className="z-[51] absolute -right-[180px] bottom-[101px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image
                  src={Surveillance}
                  alt="Surveillance"
                  className="w-4 h-4"
                />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Surveillance Camera Monitoring
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <h1 className="font-dmSans text-[56px] !leading-[64px] font-semibold text-[#222A5B] tracking-[-1px] mb-6">
                Comprehensive Security Services For Residential Communities In
                San Jose
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-dmSans text-xl !leading-8 font-normal text-[#333333] max-w-[806px] ">
                Ensuring the safety and security of residential communities in
                San Jose is our top priority. We provide professional security
                services tailored to the unique needs of gated communities,
                apartment complexes, and private neighborhoods.
              </p>
            </div>

            <div className="absolute bottom-[9px] -left-20 z-50">
              <Image src={ConectElement} alt="ConectElement" width={713} />
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
              <h3 className="mt-1 text-base font-dmSans font-semibold text-[#171A1D]">Bradley Lawlor</h3>
              <p className="text-sm font-dmSans font-normal text-[#6B7280]">Manager</p>
              <p className="text-sm font-dmSans font-normal text-[#333333]">Total Network Development</p>
            </div>
            <div>
               <p className="font-dmSans text-xl font-semibold text-[#45535E] tracking-[-0.5px] max-w-[595px]">Plaza Protection provides top-tier security without firearms. As San Jose’s leading unarmed security provider, our skilled guards prevent theft and vandalism, offering a reassuring defense.</p>
            </div>
          </div>

          <div className="relative -mt-[232px]">
            <Image
              src={GuardImage}
              width={399}
              height={429}
              className="rounded-3xl"
              alt="Guard Image"
              loading="lazy"
            />

            <div className="z-[51] absolute -left-[52px] top-[121px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image src={Visitorcheck} alt="Fire" width={16} height={16} />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Visitor & Vendor Check-In Services
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto mb-20 bg-[#F0F6FF] rounded-[40px] p-20">
       
          <Heading
            className="!mb-6 !mt-0 !text-[#222A5B] !text-center"
            title="Advanced Security Services for Protecting Residential Communities"
          />
          <p className="text-center font-dmSans text-xl !leading-8 text-[#333333] font-normal ">
            With highly trained security personnel, advanced surveillance
            systems, and a proactive approach to threat prevention, we create a
            safe and secure environment for residents. Whether it's access
            control, mobile patrols, or emergency response, our team is
            committed to delivering reliable protection and peace of mind for
            your community.
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
                      height={32}
                      width={32}
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
            title="Tailored Security Strategies For Your Gated Community"
          />
          <p className="font-dmSans text-xl !leading-8 text-[#333333] font-normal !text-center">
            Every gated neighborhood is unique, and Plaza Protection understands that one size doesn’t fit all. We work closely with your community to develop a security plan that’s personalized to meet your specific needs. From concierge services to monitoring visitor access, our team ensures that your residents are safe and your community is well-protected.
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
            title="Consistent, Round-The-Clock Protection For Gated Communities"
          />
          <p className="font-dmSans text-xl !leading-8  text-[#333333] font-normal text-center">
            With Plaza Protection, your gated community benefits from continuous
            security coverage. Our well-trained guards maintain vigilance 24/7,
            providing a visible deterrent to crime and responding quickly to any
            incidents. Whether it's a minor complaint or a major security
            concern, our team is ready to address it promptly and
            professionally.
          </p>
       

        <div className="grid grid-cols-12 gap-8 mt-[60px]">
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

export default ResidentialCommunities;
