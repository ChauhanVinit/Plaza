"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FreeQuote from "../../components/FreeQuote";
import GuardImage from "../../public/Services/Hero-Guard-01.png";
import CoreFeature from "../../public/Services/Core-Features-Guard-01.png";
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
  title: "Expert Fire Watch Security Guards At Your Service",
  desc: "Our expert fire watch security guards provide proactive patrols to detect fire hazards and ensure swift response. With trained professionals on duty, your safety is always a top priority.",
  img: GuardImage,
};
const coreFeaturesData = {
  title: "Essential Fire Watch Services For Enhanced Protection",
  desc: "Our essential fire watch services offer continuous patrols to detect potential hazards and ensure a quick response. With trained guards on-site, we prioritize your safety and provide peace of mind.",
  img: CoreFeature,
};

const howItworksData = {
  title: "How Our Expert Fire Watch Service Ensures Safety",
  desc: "With our expert fire watch service, we provide constant monitoring to detect potential fire hazards, ensuring rapid response and immediate alerts.",
};
const moreFeaturesData = {
  title: "Essential Features Of Professional Fire Watch Services",
  desc: "Professional fire watch services provide critical protection by monitoring high-risk areas to prevent potential fire hazards. Trained fire watch personnel ensure compliance with fire safety regulations and respond quickly to any signs of danger.",
};

const accordionItems = [
  {
    icon: collectionIcon,
    title: "Continuous Patrols",
    description: "Ongoing monitoring to detect fire hazards.",
  },
  {
    icon: collectionIcon,
    title: "Trained Guards",
    description: "Ongoing monitoring to detect fire hazards.",
  },
  {
    icon: collectionIcon,
    title: "Swift Response",
    description: "Ongoing monitoring to detect fire hazards.",
  },
  {
    icon: collectionIcon,
    title: "Enhanced Safety",
    description: "Ongoing monitoring to detect fire hazards.",
  },
];

const moreFeatures = [
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
const howItworks = [
  {
    id: 1,
    title: "Fire Risk Prevention",
    description: "Proactive measures to minimize fire threats.",
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

const FireWatch = () => {
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

export default FireWatch;
