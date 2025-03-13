import facebook from "../public/facebook.svg";
import X from "../public/X.svg";
import linkedin from "../public/linkedin.svg";
import instagram from "../public/instagram.svg";
import youtube from "../public/youtube.svg";

export const footerContentData = {
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
          "Fire Watch",
          "Remote Guarding Service",
          "Vehicle Patrol",
        ],
      },
      {
        title: "INDUSTRIES",
        links: ["Residential Communities", "Commercial Buildings", "Construction Sites", "Shopping Centers","Healthcare Facilities"],
      },
      {
        title: "Company",
        links: ["About Us", "Contact Us", "Blog", "Request A Quote"],
      },
    ],
    bottomSection: {
      copyRight: "All Right Reserved by PlazaProtection Copyright ©2024",
      links: ["Terms", "Privacy", "Security"],
    },
  };