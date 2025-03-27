"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FreeQuote from "../../components/FreeQuote";
import GuardImage from "../../public/Services/Hero-Guard-02.svg";
import CoreFeature from "../../public/Services/Core-Features-Guard-02.png";
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
  title: "Professional Unarmed Security Guard Services For Every Environment",
  desc: "Providing 24/7 unarmed security services, our guards ensure safety with a constant, reassuring presence. More than just patrols, we foster peace of mind for businesses and communities alike.",
  img: GuardImage,
};
const coreFeaturesData = {
  title: "Unarmed Security Guards: Vigilant, Professional, Reliable",
  desc: "Plaza Protection provides 24/7 unarmed security with trained guards and advanced technology. Our team ensures rapid response and a strong, visible presence for constant safety.",
  img: CoreFeature,
};

const howItworksData = {
  title: "Enhanced Control With Our Security Guard Management System",
  desc: "Our cutting edge security guard management system puts you in control of every aspect of your security. ",
};
const moreFeaturesData = {
  title: "Essential Features Of Unarmed Security Guard Solutions",
  desc: "Unarmed security guard services provide vital protection through professional presence, conflict resolution, and vigilant surveillance. These guards are trained to de-escalate situations, manage access control, and monitor premises for suspicious activity.",
};
const accordionItems = [
  {
    icon: collectionIcon,
    title: "24/7 Unarmed Security",
    description: "Constant and dependable protection.",
  },
  {
    icon: collectionIcon,
    title: "Advanced Technology",
    description: "Cutting-edge monitoring for safety.",
  },
  {
    icon: collectionIcon,
    title: "Rapid Threat Response",
    description: "Cutting-edge monitoring for safety.",
  },
  {
    icon: collectionIcon,
    title: "Strong, Visible Presence",
    description: "Cutting-edge monitoring for safety.",
  },
];

const moreFeatures = [
  {
    icon: checkmark,
    title: "Patrols And Inspections",
    description:
      "Conducting regular site patrols to ensure safety and security.",
  },
  {
    icon: checkmark,
    title: "Incident Reporting",
    description:
      "Detailed documentation of incidents and security-related events.",
  },
  {
    icon: checkmark,
    title: "Risk Assessment",
    description: " Identifying and addressing potential security vulnerabilities.",
  },
  {
    icon: checkmark,
    title: "Conflict De-escalation",
    description:
      "Trained to handle and diffuse tense situations effectively.",
  },
];
const howItworks = [
  {
    id: 1,
    title: "Technology-Driven Security Insights",
    description: "Leverage advanced tools to enhance and monitor security operations.",
    imageSrc: HowitworksB,
    icon: collectionIcon,
  },
  {
    id: 2,
    title: "Emergency Response",
    description: "Ensuring rapid response in critical situations.",
    imageSrc: HowitworksA,
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
const UnarmedSecurity = () => {
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

export default UnarmedSecurity
