"use client";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import FreeQuote from "@/Components/FreeQuote";
import GuardImage from "@/public/Services/Hero-Guard-03.png";
import CoreFeature from "@/public/Services/Core-Features-Guard-03.png";
import HowitworksA from "@/public/Services/How-it-works-02.svg";
import HowitworksB from "@/public/Services/How-it-works-02.svg";
import HowitworksC from "@/public/Services/How-it-works-02.svg";
import collectionIcon from "@/public/AboutUs/collection.svg";
import checkmark from "@/public/Services/checkmark-circle.svg";
import "@splidejs/react-splide/css";
import Hero from "@/Components/Services/Hero";
import CoreFeatures from "@/Components/Services/CoreFeatures";
import Howitworks from "@/Components/Services/Howitworks";
import Morefeatures from "@/Components/Services/Morefeatures";

const heroData = {
  title: "Secure Your Property With Remote Guarding Services",
  desc: "Our remote guarding services offer cutting-edge security through real-time video surveillance, remote monitoring, and rapid response capabilities.",
  img: GuardImage,
};
const coreFeaturesData = {
  title: "Smart Video Analytics For Real-Time Protection",
  desc: "Smart video analytics provide real-time threat detection, ensuring immediate alerts and rapid response to any security breach.",
  img: CoreFeature,
};

const howItworksData = {
  title: "How Smart Video Analytics Enhances Your Security",
  desc: "Smart video analytics continuously monitors your property, detecting potential threats in real time. With instant alerts and rapid response capabilities, it ensures proactive security and immediate action to protect what matters most.",
};
const moreFeaturesData = {
  title: "Essential Features Of Remote Guarding Services",
  desc: "Remote guarding services combine advanced technology and expert monitoring to deliver 24/7 security solutions. Trained operators monitor live video feeds and security systems to detect unusual activity and respond instantly.",
};
const accordionItems = [
  {
    icon: collectionIcon,
    title: "Real-Time Threat Detection",
    description: "Instant identification of potential security risks.",
  },
  {
    icon: collectionIcon,
    title: "Rapid Response",
    description: "Instant identification of potential security risks.",
  },
  {
    icon: collectionIcon,
    title: "Advanced Monitoring",
    description: "Instant identification of potential security risks.",
  },
  {
    icon: collectionIcon,
    title: "Smart Video Analytics",
    description: "Instant identification of potential security risks.",
  },
];

const moreFeatures = [
  {
    icon: checkmark,
    title: "24/7 Monitoring",
    description:
      "Continuous surveillance of your property via live video feeds.",
  },
  {
    icon: checkmark,
    title: "Cost-effective Security",
    description:
      "Minimizes on-site staff while ensuring top security.",
  },
  {
    icon: checkmark,
    title: "Scalable Solutions",
    description: "Easily adaptable to various property sizes and security requirements.",
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
    icon: collectionIcon,
  },
  {
    id: 2,
    title: "Emergency Response",
    description: "Ensuring rapid response in critical situations.",
    imageSrc: HowitworksB,
    icon: collectionIcon,
  },
  {
    id: 3,
    title: "Safety Training",
    description: "Comprehensive training to handle fire incidents.",
    imageSrc: HowitworksC,
    icon: collectionIcon,
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
  )
}

export default RemoteGuarding
