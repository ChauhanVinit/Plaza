"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FreeQuote from "../../components/FreeQuote";
import GuardImage from "../../public/Services/Hero-Guard-04.png";
import CoreFeature from "../../public/Services/Core-Features-Guard-04.png";
import collectionIcon from "../../public/AboutUs/collection.svg";
import checkmark from "../../public/Services/checkmark-circle.svg";
import "@splidejs/react-splide/css";
import Hero from "../../components/Services/Hero";
import CoreFeatures from "../../components/Services/CoreFeatures";
import KeyFeatures from "../../components/Services/KeyFeatures";
import IndustriesWeServe from "../../components/Services/IndustriesWeServe";
import FAQ from "@/components/Services/FAQ";
import Highlights from "@/components/Services/Highlights";
import BenefitsIMG from "../../public/Services/Benefits-image-04.png";
import Rapidincident from "../../public/ShoppingCenter/Rapid-incident-response.svg";
import Realtime from "../../public/Services/Real-time-communication.svg";
import VisibleDitterence from "../../public/Services/Visible-Ditterence.svg";
import ComprehensiveArea from "../../public/Services/Comprehensive-area-coverage.svg";

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


const KeyFeaturesData = {
  title: "Reliable Vehicle Patrol Services For Enhanced Security",
  desc: "Vehicle patrol services provide reliable and efficient security with frequent, scheduled checks to deter criminal activity. Security officers use marked vehicles equipped with communication tools and GPS for quick responses to incidents or emergencies.",
};
const HighlightsData = {
  title: "Understanding The Operation Of Our Vehicle Patrol Service",
  desc: "Our vehicle patrol service combines proactive surveillance with quick response times, ensuring your property is continuously monitored.",
  image:BenefitsIMG
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
    description: "Patrolling all areas to ensure full coverage.",
  },
  {
    icon: collectionIcon,
    title: "Reliable Service",
    description: "Dependable vehicle patrols for round-the-clock safety.",
  },
  {
    icon: collectionIcon,
    title: "Immediate Alerts",
    description: "Quick action and real-time notifications for any security incidents.",
  },
];

const KeyFeature = [
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
    description:
      "Proactively ensures safety through visible patrols and threat detection.",
  },
  {
    icon: checkmark,
    title: "24/7 Coverage",
    description:
      "Patrol services available around the clock, ensuring continuous security.",
  },
];

const Highlight = [
  {
    icon: Rapidincident,
    title: "Rapid Incident Response",
    description:
      "Quick intervention to handle security breaches.",
  },
  {
    icon: ComprehensiveArea,
    title: "Comprehensive Area Coverage",
    description:
      "Ensuring all key locations are consistently patrolled.",
  },
  {
    icon: Realtime,
    title: "Real-Time Communication",
    description:
      "Instant alerts and updates for immediate action.",
  },
  {
    icon: VisibleDitterence,
    title: "Enhanced Deterrence",
    description:
      "Visible patrols that prevent potential threats.",
  },
];
const Vehiclepatrol = () => {
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

export default Vehiclepatrol;
