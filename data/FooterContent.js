import callRinging from "../public/call-ringing.svg";
import estimate from "../public/estimate-02.svg";
import location from "../public/location-04.svg";
import Logo from "../public/Logo.svg";
import facebook from "../public/facebook.svg";
import X from "../public/Icon-X.svg";
import linkedin from "../public/linkedin.svg";
import instagram from "../public/instagram.svg";
import youtube from "../public/youtube.svg";

export const footerContentData = {
    topSection: [
      {
        icon: callRinging,
        title: "Help line",
        description: "1-844-55-PLAZA (557-5292)",
      },
      {
        icon: estimate,
        title: "Make A Quote",
        description: "contact@plazaprotection.com",
      },
      {
        icon: location,
        title: "Location",
        description: "1256, San Jose, Area",
      },
    ],
    description:
      "Plaza Protection delivers top-tier protection across the San Jose Bay Area with personalized onsite services that put your safety front and center.",
    socialMedia: [
      { icon: facebook, alt: "facebook" , path:'https://www.facebook.com/plazaprotection' },
      { icon: youtube, alt: "youtube",path:'https://www.youtube.com/channel/UCnQsLIB-ebKJ_J6oW78GDRA' },
      { icon: X, alt: "twitter",path:'https://x.com/plazaprotection?mx=2' },
      { icon: linkedin, alt: "linkedin",path:'https://www.linkedin.com/company/plaza-protection' },
      { icon: instagram, alt: "instagram",path:'https://www.instagram.com/plazaprotection/' },
    ],
    sections: [
      {
        title: "Services",
        links: [
          "Unarmed Security",
          "Standing Guards",
          "Foot Patrol",
          "Fire Watch",
        ],
      },
      {
        title: "Learn More",
        links: ["FAQs", "Product info", "Security", "Support Center"],
      },
      {
        title: "Company",
        links: ["About Us", "Contact Us", "Blog", "Pricing"],
      },
    ],
    bottomSection: {
      copyRight: "All Right Reserved by PlazaProtection Copyright ©2024",
      links: ["Terms", "Privacy", "Security"],
    },
  };