"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FreeQuote from "../../components/FreeQuote";
import GuardImage from "../../public/Services/Hero-Guard-03.png";
import CoreFeature from "../../public/Services/Core-Features-Guard-03.png";
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
import Realtimeincident from "../../public/Residential/Real-time-incident.svg";
import InstantAlert from "../../public/Services/Instant-Alert.svg";
import BenefitsIMG from "../../public/Services/Benefits-image-03.png";
import Rapidincident from "../../public/ShoppingCenter/Rapid-incident-response.svg";
import ProactiveSecurity from "../../public/Services/Proactive Security.svg";

const heroData = {
  title: "CCTV Installation Services for Reliable Property Surveillance",
  desc: "Secure your home or business with professional CCTV installation services by Plaza Protection. Get reliable, 24/7 surveillance and real-time monitoring tailored to your property.",
  img: GuardImage,
};
const coreFeaturesData = {
  title: "Why Plaza Protection Is the Smart Choice for CCTV Installation",
  desc: "Plaza Protection’s video surveillance ensures real-time monitoring, rapid threat detection, and a safer business environment.",
  img: CoreFeature,
};

// const howItworksData = {
//   title: "How Smart Video Analytics Enhances Your Security",
//   desc: "Smart video analytics continuously monitors your property, detecting potential threats in real time. With instant alerts and rapid response capabilities, it ensures proactive security and immediate action to protect what matters most.",
// };
const whenNeededData = {
  title: "AI-Powered Remote Guarding For 24/7 Security",
  desc: "Smart remote guarding combines AI-driven monitoring, 24/7 surveillance, and instant threat response to ensure seamless security across multiple locations.",
};
const benefitData = {
  title: "How Smart Video Analytics Enhances Your Security",
  desc: "Smart video analytics continuously monitors your property, detecting potential threats in real time. With instant alerts and rapid response capabilities, it ensures proactive security and immediate action to protect what matters most.",
  image: BenefitsIMG,
};
const accordionItems = [
  {
    icon: collectionIcon,
    title: "High-Definition Cameras",
    description:
      "Enables continuous surveillance for immediate threat detection.",
  },
  {
    icon: collectionIcon,
    title: "Real-Time Monitoring",
    description:
      "Enables continuous surveillance for immediate threat detection.",
  },
  {
    icon: collectionIcon,
    title: "Advanced Analytics",
    description:
      "Enables continuous surveillance for immediate threat detection.",
  },
  {
    icon: collectionIcon,
    title: "Instant Incident Alerts",
    description:
      "Enables continuous surveillance for immediate threat detection.",
  },
];

const whenNeeded = [
  {
    icon: checkmark,
    title: "Live Video Monitoring",
    description: "Enhances security with intelligent risk assessment.",
  },
  {
    icon: checkmark,
    title: "AI-Powered Analytics",
    description: "Enhances security with intelligent risk assessment.",
  },
  {
    icon: checkmark,
    title: "24/7 Protection",
    description: "Provides continuous monitoring, even in high-risk areas.",
  },
  {
    icon: checkmark,
    title: "Rapid Incident Response",
    description: "Enables swift action to security threats.",
  },
];
// const howItworks = [
//   {
//     id: 1,
//     title: "Real-Time Threat Detection",
//     description: "Immediate identification of potential risks.",
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
const benefit = [
  {
    icon: Realtimeincident,
    title: "Real-Time Threat Detection",
    description: "Immediate identification of potential risks.",
  },
  {
    icon: InstantAlert,
    title: "Instant Alerts",
    description: "Prompt notifications to respond quickly to incidents.",
  },
  {
    icon: Rapidincident,
    title: "Rapid Response Capabilities",
    description: "Fast action to address security concerns.",
  },
  {
    icon: ProactiveSecurity,
    title: "Proactive Security",
    description: "Preventative measures to safeguard your property.",
  },
];
const CCTVInstallation = () => {
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

export default CCTVInstallation;
