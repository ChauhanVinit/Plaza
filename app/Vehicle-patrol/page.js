"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FreeQuote from "../../components/FreeQuote";
import GuardImage from "../../public/Services/Hero-Guard-04.png";
import CoreFeature from "../../public/Services/Core-Features-Guard-04.png";
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

const heroData = {
  title: "24/7 Vehicle Patrols For Constant Protection",
  desc: "With 24/7 vehicle patrols, we provide continuous security to ensure your property is always protected.",
  img: GuardImage,
};
const coreFeaturesData = {
  title: "Unmatched Security With Vehicle Patrol Services",
  desc: "Our vehicle patrol services offer unmatched security by ensuring continuous, on-the-go protection. With mobile units patrolling your property 24/7, we provide a proactive and swift response to any potential threats.",
  img: CoreFeature,
};

const howItworksData = {
  title: "Understanding The Operation Of Our Vehicle Patrol Service",
  desc: "Our vehicle patrol service combines proactive surveillance with quick response times, ensuring your property is continuously monitored.",
};
const moreFeaturesData = {
  title: "Essential Features Of Vehicle Patrol Services",
  desc: "Vehicle patrol services provide reliable and efficient security with frequent, scheduled checks to deter criminal activity. Security officers use marked vehicles equipped with communication tools and GPS for quick responses to incidents or emergencies.",
};

const accordionItems = [
  {
    icon: collectionIcon,
    title: "Proactive Protection",
    description: "Preventive security to deter potential threats.",
  },
  {
    icon: collectionIcon,
    title: "Comprehensive Security",
    description: "Preventive security to deter potential threats.",
  },
  {
    icon: collectionIcon,
    title: "Reliable Service",
    description: "Preventive security to deter potential threats.",
  },
  {
    icon: collectionIcon,
    title: "Immediate Alerts",
    description: "Preventive security to deter potential threats.",
  },
];

const moreFeatures = [
  {
    icon: checkmark,
    title: "GPS Tracking",
    description:
      "Allows for efficient coordination and real-time monitoring of patrols.",
  },
  {
    icon: checkmark,
    title: "Flexible Coverage",
    description:
      "Provides adaptable security solutions for various security needs.",
  },
  {
    icon: checkmark,
    title: "Enhanced Safety",
    description: "Proactively ensures safety through visible patrols and threat detection.",
  },
  {
    icon: checkmark,
    title: "24/7 Coverage",
    description:
      "Patrol services available around the clock, ensuring continuous security.",
  },
];
const howItworks = [
  {
    id: 1,
    title: "Rapid Incident Response",
    description: "Quick intervention to handle security breaches.",
    imageSrc: HowitworksC,
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
    imageSrc: HowitworksA,
    icon: collectionIcon,
  },
];

const Vehiclepatrol = () => {
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

export default Vehiclepatrol
