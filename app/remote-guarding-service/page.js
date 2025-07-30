export const metadata = {
  title:
    "Remote Guarding Service | San Jose Bay Area Security Experts | Plaza Protection",
  description:
    "Experience cutting-edge security with our remote guarding services in the San Jose Bay Area. Our virtual security guards monitor your property 24/7 using advanced technology for rapid response and protection.",
  keywords: [
    "Remote guarding services in bay area",
    "Remote guarding services in san jose",
    "Remote guarding services",
    "Remote surveillance services",
    "Live video monitoring services",
    "Remote CCTV monitoring",
  ],
  abstract:
    "Enhance your security with Plaza Protection’s remote guarding services, combining live video surveillance, analytics, and trained operators for round-the-clock threat prevention.",
  metadataBase: new URL("https://www.plazaprotection.com"),
  alternates: {
    canonical: "/remote-guarding-service",
  },
  openGraph: {
    title:
      "Remote Guarding Service | San Jose Bay Area Security Experts | Plaza Protection",
    description:
      "Experience cutting-edge security with our remote guarding services in the San Jose Bay Area. Our virtual security guards monitor your property 24/7 using advanced technology for rapid response and protection.",
    url: "https://plazaprotection.com/remote-guarding-service",
    siteName: "PlazaProtection",
    images: [
      {
        url: "https://plazaprotection.com/includes/img/plazaprotection.png",
        width: 1200,
        height: 630,
        alt: "Plaza Protection",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@plazaprotection",
    creator: "@plazaprotection",
    title:
      "Remote Guarding Service | San Jose Bay Area Security Experts | Plaza Protection",
    description:
      "Experience cutting-edge security with our remote guarding services in the San Jose Bay Area. Our virtual security guards monitor your property 24/7 using advanced technology for rapid response and protection.",
    images: ["https://plazaprotection.com/includes/img/plazaprotection.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
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
  title: "Secure Your Property With Remote Guarding Services In bay area",
  desc: "By leveraging cutting-edge technology and a highly skilled team, Plaza Protection delivers comprehensive security solutions including video surveillance, security guards, remote guarding, alarms, and access control.",
  img: GuardImage,
  alt: "Remote Guarding Security Guard",
};
const coreFeaturesData = {
  title: "Smart Video Surveillance For Proactive Security",
  desc: "Plaza Protection’s remote surveillance services ensure real-time monitoring, rapid threat detection, and a safer business environment.",
  img: CoreFeature,
};

const KeyFeaturesData = {
  title: "AI-Powered Remote Guarding For 24/7 Security",
  desc: "Smart remote guarding combines AI-driven Live video monitoring Services, 24/7 surveillance, and instant threat response to ensure seamless security across multiple locations.",
};
const HighlightsData = {
  title: "How Smart Video Analytics Enhances Your Security",
  desc: "Smart video analytics continuously monitors your property, detecting potential threats in real time. With instant alerts and rapid response capabilities, it ensures proactive security and immediate action to protect what matters most.",
  image: BenefitsIMG,
};
const IndustriesWeServeData = {
  desc: "In today’s fast-paced world, effective security requires agility and precision. Our remote guarding services in San Jose Bay Area, We combine cutting-edge technology with vigilant monitoring teams to deliver continuous protection without the need for an on-site presence. Designed to adapt across industries, we provide scalable security solutions that enhance visibility, deter risks, and ensure rapid response—helping you safeguard your assets efficiently and confidently.",
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
    description:
      "Enables continuous surveillance for immediate threat detection.",
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
    description: "Provides continuous monitoring, even in high-risk areas.",
  },
  {
    icon: checkmark,
    title: "Rapid Incident Response",
    description: "Enables swift action to security threats.",
  },
];

const Highlight = [
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
const faqs = [
  {
    question: "What Are the Benefits of Remote Guarding vs. Security Guards?",
    answer:
      "While on-site security officers offer a physical presence, remote video surveillance provides broader, real-time coverage with fewer limitations. Though not a direct replacement, remote guarding can monitor virtually any location, often addressing risks and blind spots that on-site guards might miss.",
  },
  {
    question: "How Do Remote Guarding Services Work?",
    answer:
      "Remote guarding uses advanced cameras, sensors, and technology to monitor a property from a centralized location. Trained security professionals respond in real time to any threats, assess situations quickly, communicate with on-site personnel if needed, and take immediate action—enhancing or replacing traditional on-site security.",
  },
  {
    question: "What types of properties can benefit from remote guarding?",
    answer:
      "Remote guarding is ideal for almost every property type, especially commercial buildings, warehouses, construction sites, gated communities, parking lots, retail stores, and more.",
  },
  {
    question: "Are the recordings encrypted and secure?",
    answer:
      "Yes. All video data is encrypted during storage and transmission to prevent unauthorized access or tampering. ",
  },
];
const RemoteGuarding = () => {
  return (
    <>
      <Hero {...heroData} />
      <IndustriesWeServe {...IndustriesWeServeData} />
      <CoreFeatures data={accordionItems} {...coreFeaturesData} />
      <KeyFeatures data={KeyFeature} {...KeyFeaturesData} />
      <Highlights data={Highlight} {...HighlightsData} />
      <FAQ data={faqs} title={'Frequently asked questions about Remote guarding services'} />
      <FreeQuote />
    </>
  );
};

export default RemoteGuarding;
