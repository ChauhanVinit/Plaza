"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FreeQuote from "../../components/FreeQuote";
import GuardImage from "../../public/Services/Hero-Guard-03.png";
import CoreFeature from "../../public/Services/Core-Features-Guard-03.png";
import collectionIcon from "../../public/AboutUs/collection.svg";
import checkmark from "../../public/Services/checkmark-circle.svg";
import "@splidejs/react-splide/css";
import Hero from "../../components/Services/Hero";
import CoreFeatures from "../../components/Services/CoreFeatures";
import KeyFeatures from "../../components/Services/KeyFeatures";
import IndustriesWeServe from "../../components/Services/IndustriesWeServe";
import Highlights from "@/components/Services/Highlights";
import FAQ from "@/components/Services/FAQ";
import Realtimeincident from "../../public/Residential/Real-time-incident.svg";
import InstantAlert from "../../public/Services/Instant-Alert.svg";
import BenefitsIMG from "../../public/Services/Benefits-image-03.png";
import Rapidincident from "../../public/ShoppingCenter/Rapid-incident-response.svg";
import ProactiveSecurity from "../../public/Services/Proactive Security.svg";


const heroData = {
  title: "Secure Your Property With Remote Guarding Services",
  desc: "By leveraging cutting-edge technology and a highly skilled team, Plaza Protection delivers comprehensive security solutions including video surveillance, security guards, remote guarding, alarms, and access control.",
  img: GuardImage,
};
const coreFeaturesData = {
  title: "Smart Video Surveillance For Proactive Security",
  desc: "Plaza Protection’s video surveillance ensures real-time monitoring, rapid threat detection, and a safer business environment.",
  img: CoreFeature,
};

const KeyFeaturesData = {
  title: "AI-Powered Remote Guarding For 24/7 Security",
  desc: "Smart remote guarding combines AI-driven monitoring, 24/7 surveillance, and instant threat response to ensure seamless security across multiple locations.",
};
const HighlightsData = {
  title: "How Smart Video Analytics Enhances Your Security",
  desc: "Smart video analytics continuously monitors your property, detecting potential threats in real time. With instant alerts and rapid response capabilities, it ensures proactive security and immediate action to protect what matters most.",
  image:BenefitsIMG,
};
const accordionItems = [
  {
    icon: collectionIcon,
    title: "High-Definition Cameras",
    description: "Delivers clear, detailed footage for accurate monitoring.",
  },
  {
    icon: collectionIcon,
    title: "Real-Time Monitoring",
    description: "Enables continuous surveillance for immediate threat detection.",
  },
  {
    icon: collectionIcon,
    title: "Advanced Analytics",
    description: "Constant and dependable protection.",
  },
  {
    icon: collectionIcon,
    title: "Instant Incident Alerts",
    description: "Ensures swift response to potential risks.",
  },
];

const KeyFeature = [
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
    description:
      "Provides continuous monitoring, even in high-risk areas.",
  },
  {
    icon: checkmark,
    title: "Rapid Incident Response",
    description:
      "Enables swift action to security threats.",
  },
];


const Highlight = [
  {
    icon: Realtimeincident,
    title: "Real-Time Threat Detection",
    description:
      "Immediate identification of potential risks.",
  },
  {
     icon: InstantAlert,
    title: "Instant Alerts",
    description:
      "Prompt notifications to respond quickly to incidents.",
  },
  {
    icon: Rapidincident,
    title: "Rapid Response Capabilities",
    description:
      "Fast action to address security concerns.",
  },
  {
    icon: ProactiveSecurity,
    title: "Proactive Security",
    description:
      "Preventative measures to safeguard your property.",
  },
];                                                
const RemoteGuarding = () => {
  return (
    <>
      <Header />
      <Hero {...heroData} />
       <IndustriesWeServe />
      <CoreFeatures data={accordionItems} {...coreFeaturesData} />
        <KeyFeatures data={KeyFeature} {...KeyFeaturesData} />
      <Highlights data={Highlight} {...HighlightsData} />
      <FAQ />
      <FreeQuote />
      <Footer />
    </>
  );       
};                  

export default RemoteGuarding;
