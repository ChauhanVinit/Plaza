"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FreeQuote from "../../components/FreeQuote";
import GuardImage from "../../public/Services/Hero-Guard-01.png";
import CoreFeature from "../../public/Services/Core-Features-Guard-01.png";
// import HowitworksA from "../../public/Services/How-it-works-02.svg";
// import HowitworksB from "../../public/Services/How-it-works-02.svg";
// import HowitworksC from "../../public/Services/How-it-works-02.svg";
import collectionIcon from "../../public/AboutUs/collection.svg";
import checkmark from "../../public/Services/checkmark-circle.svg";
import "@splidejs/react-splide/css";
import Hero from "../../components/Services/Hero";
import CoreFeatures from "../../components/Services/CoreFeatures";
// import Howitworks from "../../components/Services/Howitworks";
import WhenNeeded from "../../components/Services/WhenNeeded";
// import Visitorcheckin from "../../public/Services/Visitor-check-in.svg";
import IndustriesWeServe from "../../components/Services/IndustriesWeServe";
import Benefits from "@/components/Services/Benefits";
import FAQ from "@/components/Services/FAQ";
// import TechnologyDriven from "../../public/Services/Technology-Driven.svg";
import fireRiskPrevention from "../../public/Services/Fire-risk-prevention.svg";
import InstantThreat from "../../public/ConstructionSites/Perimeter-Monitoring.svg";
import InstantAlert from "../../public/Services/Instant-Alert.svg";
import BenefitsIMG from "../../public/Services/Benefits-image-02.png";
import Security24 from "../../public/Residential/Security-24.svg";
import CustomizedPlans from "../../public/ConstructionSites/Tailored-security-plan.svg";            


const heroData = {
  title: "Reliable Fire Watch Services in South Bay Area",
  desc: "Plaza Protection offers expert fire watch security, ensuring continuous monitoring and rapid response during fire system failures to keep properties and occupants safe.",
  img: GuardImage,
};
const coreFeaturesData = {
  title: "24/7 Unarmed Security For Reliable Protection And Rapid Response",
  desc: "Plaza Protection provides 24/7 unarmed security with trained guards and advanced technology. Our team ensures rapid response and a strong, visible presence for constant safety. ",
  img: CoreFeature,
};

// const howItworksData = {
//   title: "How Our Expert Fire Watch Service Ensures Safety",
//   desc: "With our expert fire watch service, we provide constant monitoring to detect potential fire hazards, ensuring rapid response and immediate alerts.",
// };
const whenNeededData = {
  title: "Professional Fire Watch Services For Hazard Prevention And Safety Compliance",
  desc: "Professional fire watch services provide critical protection by monitoring high-risk areas to prevent potential fire hazards. Trained fire watch personnel ensure compliance with fire safety regulations and respond quickly to any signs of danger.",
};
const benefitData = {
  title: "Expert Fire Watch Service For Continuous Monitoring And Rapid Response",
  desc: "With our expert fire watch service, we provide constant monitoring to detect potential fire hazards, ensuring rapid response and immediate alerts.",
  image:BenefitsIMG,
};

const accordionItems = [
  {
    icon: collectionIcon,
    title: "Trained Fire Watch Guards",
    description: "Swift action in case of fire incidents.",
  },
  {
    icon: collectionIcon,
    title: "Emergency Response",
    description: "Swift action in case of fire incidents.",
  },
  {
    icon: collectionIcon,
    title: "Hazard Detection",
    description: "Swift action in case of fire incidents.",
  },
  {
    icon: collectionIcon,
    title: "Fire Prevention Maintenance",
    description: "Swift action in case of fire incidents.",
  },
];

const whenNeeded = [
  {
    icon: checkmark,
    title: "Immediate Response",
    description:
      "Quickly act to address any potential fire risks or emergencies.",
  },
  {
    icon: checkmark,
    title: "Emergency Assistance",
    description:
      "Provide on-site support during fire incidents, minimizing damage.",
  },
  {
    icon: checkmark,
    title: "24/7 Coverage",
    description: "Round-the-clock fire watch to ensure continuous safety.",
  },
  {
    icon: checkmark,
    title: "Routine Inspections",
    description:
      "Conduct regular checks on fire alarms, equipment, and premises.",
  },
];

const benefit = [
  {
    icon: fireRiskPrevention,
    title: "Fire Risk Prevention",
    description:
      "Proactive measures to minimize fire threats.",
  },
  {
    icon: Security24,
    title: "Round-The-Clock Protection",
    description:
      "Fire watch services available at all times for maximum safety.",
  },
  {
    icon: CustomizedPlans,
    title: "Customized Patrol Plans",
    description:
      "Tailored to fit the specific needs of your property.",
  },
  {
    icon: InstantAlert,
    title: "Quick Detection",
    description:
      "Early identification of fire hazards to prevent escalation.",
  },
];

// const howItworks = [
//   {
//     id: 1,
//     title: "Fire Risk Prevention",
//     description: "Proactive measures to minimize fire threats.",
//     imageSrc: HowitworksA,
//     icon: Visitorcheckin,
//   },
//   {
//     id: 2,
//     title: "Emergency Response",
//     description: "Ensuring rapid response in critical situations.",
//     imageSrc: HowitworksB,
//     icon: Visitorcheckin,
//   },
//   {
//     id: 3,
//     title: "Safety Training",
//     description: "Comprehensive training to handle fire incidents.",
//     imageSrc: HowitworksC,
//     icon: Visitorcheckin,
//   },
// ];

const FireWatch = () => {
  return (
    <>
      <Header />
      <Hero {...heroData} />
       <IndustriesWeServe />
      <CoreFeatures data={accordionItems} {...coreFeaturesData} />
      {/* <Howitworks data={howItworks} {...howItworksData} /> */}
      <WhenNeeded data={whenNeeded} {...whenNeededData} />
      <Benefits data={benefit} {...benefitData} />
      <FAQ />
      <FreeQuote />
      <Footer />
    </>
  );
};

export default FireWatch;
