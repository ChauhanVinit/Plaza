"use client";
import FreeQuote from "../../components/FreeQuote";
import ResidentialA from "../../public/Residential/residential-image-01.png";
import ResidentialB from "../../public/Residential/residential-image-02.png";
import ResidentialC from "../../public/Residential/residential-image-06.png";
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
import person from "../../public/Residential/person-03.png";
import InstantAlerts from "../../public/Residential/Instant-Threat-Alerts.svg";
import LocationMonitoringA from "../../public/Residential/LocationMonitoring-01.png";
import LocationMnitoringB from "../../public/Residential/LocationMonitoring-02.png";
import LocationMnitoringC from "../../public/Residential/LocationMonitoring-03.png";
import IncidentManagementA from "../../public/Residential/IncidentManagement-01.png";
import IncidentManagementB from "../../public/Residential/IncidentManagement-02.png";
import IncidentManagementC from "../../public/Residential/IncidentManagement-03.png";
import CommunityPatrolA from "../../public/Residential/Community-Patrol-01.png";
import CommunityPatrolB from "../../public/Residential/Community-Patrol-02.png";
import CommunityPatrolC from "../../public/Residential/Community-Patrol-03.png";
import Quote from "../../public/Residential/iconmonstr-quote.svg";
import IndustryTabs from "@/components/Industries/IndustryTabs";
import IndustryHighlights from "@/components/Industries/IndustryHighlights";
import IndustryFeatureList from "@/components/Industries/IndustryFeatureList";

const tabsdata = [
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

const featuresListdata = [
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

const IndustryHighlightsData = [
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

const industryTabContent  = {
  title:"Advanced Security Services for Protecting Residential Communities",
  desc: "With highly trained security personnel, advanced surveillance systems, and a proactive approach to threat prevention, we create a safe and secure environment for residents. Whether it's access control, mobile patrols, or emergency response, our team is committed to delivering reliable protection and peace of mind for your community.",
};

const HighlightsContent  = {
  title:"Customized Security Plans for Optimal Protection of Your Community",
  desc: "We understand that one size doesn’t fit all. We work closely with your community to develop a security plan that’s personalized to meet your specific needs. From concierge services to monitoring visitor access, our team ensures that your residents are safe and your community is well-protected.",
};
const featuresListContent  = {
  title:"24/7 Vigilant Security Guards for Reliable Protection and Quick Response",
  desc: "Our well-trained guards maintain vigilance 24/7, providing a visible deterrent to crime and responding quickly to any incidents. Whether it's a minor complaint or a major security concern, our team is always ready to address it promptly and professionally.",
  imgA:ResidentialA,
  imgB:ResidentialB,
  imgC:ResidentialC,
};
const ResidentialCommunities = () => {

  return (
    <>
      
      <div className="w-full px-4 sm:px-6 xl:px-10 2xl:px-0 2xl:max-w-[1342px] mt-10 2xl:mt-20 mb-20 2xl:mb-40 2xl:mx-auto">
        <div className="flex gap-12">
          <div className="relative pt-[14px] hidden xl:block">
            <Image
              src={streetHouses}
              width={302}
              height={470}
              className="rounded-3xl min-w-[302px] h-auto"
              alt="Security guard standing in front of residential houses"
              loading="lazy"
            />
            <div className="z-[51] absolute -right-[180px] bottom-[101px] inline-flex items-center gap-2  px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image
                  src={Surveillance}
                  alt="Surveillance Camera Monitoring"
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
              <h1 className="font-dmSans text-5xl !leading-[56px] lg:text-[52px] lg:!leading-[60px] 2xl:text-[56px] 2xl:!leading-[64px] font-semibold text-[#222A5B] tracking-[-3px] mb-6 capitalize">
                Comprehensive Security Services For Residential Communities In
                San Jose
              </h1>
              <p className="px-4 rounded border-l-[3px] border-l-[#B0BABF] font-dmSans text-lg  2xl:text-xl 2xl:!leading-8 font-normal text-[#45535E] max-w-[806px] ">
                Ensuring the safety and security of residential communities in
                San Jose is our top priority. We provide professional security
                services tailored to the unique needs of gated communities,
                apartment complexes, and private neighborhoods.
              </p>
            </div>

            <div className="hidden xl:block absolute bottom-[9px] -left-20 z-50">
              <Image src={ConectElement} alt="" width={713} />
            </div>
          </div>
        </div>

        <div className="xl:hidden relative mt-8  w-full max-w-[713px] mx-auto z-50">
          <Image
            src={ConectElement}
            alt=""
            className="object-cover"
          />

          <div className="z-[51] absolute left-0 translate-x-6  top-0 translate-y-[3px] inline-flex items-center gap-1  sm:gap-2 px-2 sm:px-3 py-[5px] sm:py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
            <div className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
              <Image
                src={Surveillance}
                alt="Surveillance Camera Monitoring"
                className="w-[10px] h-[10px] sm:w-4 sm:h-4"
              />
            </div>
            <div className="font-dmSans text-[8.46px]   sm:text-xs font-medium text-[#1A1A1A]">
              Surveillance Camera Monitoring
            </div>
          </div>

          <div className="z-[51] absolute right-0 -translate-x-6 bottom-0 -translate-y-[8px]  inline-flex items-center gap-1  sm:gap-2 px-2 sm:px-3 py-[5px] sm:py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
            <div className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
              <Image
                src={Visitorcheck}
                alt="Visitor & Vendor Check-In Services"
                className="w-[10px] h-[10px] sm:w-4 sm:h-4"
              />
            </div>
            <div className="font-dmSans text-[8.46px] !leading-[9.5px] sm:!leading-4 sm:text-xs font-medium text-[#1A1A1A]">
              Visitor & Vendor
              <br /> Check-In Services
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
                    className="hidden md:block w-[43px] h-[43px]"
                  />
                </div>
                <h3 className="mt-1 text-base font-dmSans font-semibold text-[#171A1D]">
                  James Hall
                </h3>
                <p className="text-sm font-dmSans font-normal text-[#6B7280]">
                  Manager
                </p>
                <p className="text-sm font-dmSans font-normal text-[#333333]">
                   Wallmart
                </p>
              </div>
              <div className="md:hidden">
                
                <Image src={Quote} alt="Quote icon representing client testimonial" className="w-[43px] h-[43px]" />
              </div>
            </div>

            <div>
              <p className="font-dmSans text-xl font-semibold text-[#45535E] tracking-[-0.5px] xl:max-w-[595px]">
                Plaza Protection offers outstanding security patrol services in the Bay Area. They understand our community's needs and collaborate effectively with our staff. Highly recommended. 

              </p>
            </div>
          </div>

          <div className="relative -mt-[232px] hidden xl:block">
            <Image
              src={GuardImage}
              width={399}
              height={429}
              className="min-w-[399px] h-auto rounded-3xl"
              alt="Security guard standing in front of residential houses"
              loading="lazy"
            />

            <div className="z-[51] absolute -left-[52px] top-[121px] inline-flex items-center gap-2 px-3 py-[9px] rounded-[50px] bg-white border-[1.5px] border-[#E7E7E7]  shadow-[0_17.33px_25.99px_0_rgba(0,0,0,0.05)]">
              <div className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-full bg-[#EDF5FF]">
                <Image src={Visitorcheck} alt="Visitor & Vendor Check-In Services" width={16} height={16} />
              </div>
              <div className="font-dmSans text-xs font-medium text-[#1A1A1A]">
                Visitor & Vendor Check-In Services
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

export default ResidentialCommunities;
