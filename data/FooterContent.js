import facebook from "../public/facebook.svg";
import X from "../public/X.svg";
import linkedin from "../public/linkedin.svg";
import instagram from "../public/instagram.svg";
import youtube from "../public/youtube.svg";

export const footerContentData = {
  description:
    "Plaza Protection delivers top-tier protection across the San Jose Bay Area with personalized onsite services that put your safety front and center.",
socialMedia: [
  {
    icon: facebook,
    alt: "Facebook icon - Plaza Protection",
    path: "https://www.facebook.com/plazaprotection",
  },
  {
    icon: youtube,
    alt: "YouTube icon - Plaza Protection channel",
    path: "https://www.youtube.com/channel/UCnQsLIB-ebKJ_J6oW78GDRA",
  },
  {
    icon: X,
    alt: "X (formerly Twitter) icon - Plaza Protection",
    path: "https://x.com/plazaprotection?mx=2",
  },
  {
    icon: linkedin,
    alt: "LinkedIn icon - Plaza Protection profile",
    path: "https://www.linkedin.com/company/plaza-protection",
  },
  {
    icon: instagram,
    alt: "Instagram icon - Plaza Protection",
    path: "https://www.instagram.com/plazaprotection/",
  },
],

  sections: [
    {
      title: "Services",
      links: [
        {
          label: "Unarmed Security",
          path: "/unarmed-security",
        },
        {
          label: "Fire Watch",
          path: "/fire-watch",
        },
        {
          label: "Remote Monitoring",
          path: "/remote-guarding-service",
        },
        {
          label: "Vehicle Patrol",
          path: "/vehicle-patrol",
        },
        {
          label: "CCTV Installation",
          path: "/cctv-installation",
        },
      ],
    },
    {
      title: "INDUSTRIES",
      links: [
        {
          label: "Residential Communities",
          path: "/residential-communities",
        },
        {
          label: "Commercial Buildings",
          path: "/commercial-buildings",
        },
        {
          label: "Construction Sites",
          path: "/construction-sites",
        },
        {
          label: "Shopping Centers",
          path: "/shopping-centers",
        },
        {
          label: "Healthcare Facilities",
          path: "/healthcare-facilities",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "About Us",
          path: "/about-us",
        },
        {
          label: "Contact Us",
          path: "/contact-us",
        },
        {
          label: "Client Portal",
          path: "/client-portal",
        },
        {
          label: "Blog",
          path: "https://blog.plazaprotection.com/",
        },
        {
          label: "Request A Quote",
          path: "/request-quote",
        },
         
      ],
    },
  ],
  bottomSection: {
    copyRight: "All Right Reserved by PlazaProtection Copyright © 2025",
    links: ["Terms", "Privacy", "Security"],
  },
};
