"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FreeQuote from "../../components/FreeQuote";
import GuardImage from "../../public/Services/Hero-Guard-03.png";
import CoreFeature from "../../public/Services/Core-Features-Guard-03.png";
import HowitworksA from "../../public/Services/How-it-works-02.svg";
import HowitworksB from "../../public/Services/How-it-works-02.svg";
import HowitworksC from "../../public/Services/How-it-works-02.svg";
import collectionIcon from "../../public/AboutUs/collection.svg";
import checkmark from "../../public/Services/checkmark-circle.svg";
import "@splidejs/react-splide/css";
import Hero from "../../components/Services/Hero";
import CoreFeatures from "../../components/Services/CoreFeatures";
import Howitworks from "../../components/Services/Howitworks";
import Morefeatures from "../../components/Services/Morefeatures";
import Visitorcheckin from "../../public/Services/Visitor-check-in.svg";
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

const howItworksData = {
  title: "How Smart Video Analytics Enhances Your Security",
  desc: "Smart video analytics continuously monitors your property, detecting potential threats in real time. With instant alerts and rapid response capabilities, it ensures proactive security and immediate action to protect what matters most.",
};
const moreFeaturesData = {
  title: "AI-Powered Remote Guarding For 24/7 Security",
  desc: "Smart remote guarding combines AI-driven monitoring, 24/7 surveillance, and instant threat response to ensure seamless security across multiple locations.",
};
const accordionItems = [
  {
    icon: collectionIcon,
    title: "High-Definition Cameras",
    description: "Delivers clear, detailed footage for accurate monitoring.",
  },
  {
    icon: collectionIcon,
    title: "Rapid Response",
    description: "Delivers clear, detailed footage for accurate monitoring.",
  },
  {
    icon: collectionIcon,
    title: "Advanced Monitoring",
    description: "Delivers clear, detailed footage for accurate monitoring.",
  },
  {
    icon: collectionIcon,
    title: "Smart Video Analytics",
    description: "Delivers clear, detailed footage for accurate monitoring.",
  },
];

const moreFeatures = [
  {
    icon: checkmark,
    title: "Live Video Monitoring",
    description: "Ensures real-time surveillance for instant threat detection.",
  },
  {
    icon: checkmark,
    title: "Cost-effective Security",
    description: "Minimizes on-site staff while ensuring top security.",
  },
  {
    icon: checkmark,
    title: "Scalable Solutions",
    description:
      "Easily adaptable to various property sizes and security requirements.",
  },
  {
    icon: checkmark,
    title: "Incident Documentation",
    description:
      "Continuous recording of video footage for evidence and review.",
  },
];
const howItworks = [
  {
    id: 1,
    title: "Real-Time Threat Detection",
    description: "Immediate identification of potential risks.",
    imageSrc: HowitworksA,
    icon: Visitorcheckin,
  },
  {
    id: 2,
    title: "Emergency Response",
    description: "Ensuring rapid response in critical situations.",
    imageSrc: HowitworksB,
    icon: Visitorcheckin,
  },
  {
    id: 3,
    title: "Safety Training",
    description: "Comprehensive training to handle fire incidents.",
    imageSrc: HowitworksC,
    icon: Visitorcheckin,
  },
];

const RemoteGuarding = () => {
  return (
    <>
      <Header />
      <Hero {...heroData} />
      <CoreFeatures data={accordionItems} {...coreFeaturesData} />
      <Howitworks data={howItworks} {...howItworksData} />
      <Morefeatures data={moreFeatures} {...moreFeaturesData} />
      <FreeQuote />
      <Footer />
    </>
  );       
};                  

export default RemoteGuarding;
