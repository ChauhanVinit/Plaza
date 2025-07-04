export const metadata = {
  title: "Contact Us | San Jose Bay Area Security Patrol Experts | Plaza Protection",
  description:
    "Plaza Protection - San Jose Bay Area Security Patrol Experts. Contact us today to find how our security solutions can help your business 1-844-557-5292",
  keywords: [
    "Security Services In San Jose",
    "Security Guard Services",
    "Private Patrol Services",
    "vehicle patrol",
    "Security patrol",
    "Security Services San Jose Bay Area",
  ],
  abstract:
    "Contact us if you have any queries, want to share feedback, or want to know more about how our security solutions can help your business.",
  metadataBase: new URL("https://www.plazaprotection.com"),
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | San Jose Bay Area Security Patrol Experts | Plaza Protection",
    description:
      "Plaza Protection - San Jose Bay Area Security Patrol Experts. Contact us today to find how our security solutions can help your business 1-844-557-5292",
    url: "https://www.plazaprotection.com/contact-us",
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
    title: "Contact Us | San Jose Bay Area Security Patrol Experts | Plaza Protection",
    description:
      "Plaza Protection - San Jose Bay Area Security Patrol Experts. Contact us today to find how our security solutions can help your business 1-844-557-5292",
    images: ["https://plazaprotection.com/includes/img/plazaprotection.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
import Image from "next/image";
import GoogleMapComponent from "../../components/ContactUs/GoogleMapComponent";
import ContactBannerA from "../../public/Contact-01.png";
import ContactBannerB from "../../public/Contact-02.png";
import SecurityTrustBanner from "@/components/SecurityTrustBanner";
import ContactForm from "@/components/ContactUs/ContactForm";

const Contact = () => {             
  const SecurityTrustData = {
    title: (
      <>
        Plaza Protection : <br className="hidden sm:block" /> Trusted Security
        Guard Company
      </>
    ),
    btnText: "Request A Quote",
    path:'/request-quote'
  };
  return (
    <>
      <div className="mx-4 sm:mx-6  xl:mx-10 2xl:max-w-[1360px] 2xl:mx-auto mt-10 2xl:mt-[91px] mb-8 2xl:mb-[70px] sm:text-center">
        <h1 className="font-dmSans text-5xl !leading-[56px] xl:text-[52px] xl:!leading-[60px] 2xl:text-[56px]  2xl:!leading-[64px] font-semibold text-[#222A5B] tracking-[-3px] mb-8">
          Contact Us
        </h1>
        <p className="px-4 sm:px-0 rounded sm:rounded-none border-l-[3px] sm:border-0 border-[#B0BABF]  font-dmSans text-lg  2xl:text-xl 2xl:!leading-8 font-normal text-[#45535E] max-w-[1326px] mx-auto ">
          Whether you're looking for on-site security, patrol services, or
          advanced monitoring, our team is here to assist you. Reach out to us
          today to learn more about our services or request a quote now. We’re
          available 24/7 to ensure your peace of mind and protect what matters
          most.
        </p>
      </div>

      <div className="hidden sm:flex items-center justify-center mx-4 sm:mx-6 xl:max-w-[1200px] xl:mx-auto  mb-10 2xl:mb-20">
        <Image
          src={ContactBannerA}
            alt="Plaza Protection security team standing in formation, ready to serve"
          className="object-cover rounded-[40px]"
        />
      </div>

      <div className="sm:hidden flex items-center justify-start mx-4 sm:mx-6 xl:max-w-[1200px] xl:mx-auto  mb-10 2xl:mb-20">
        <Image
          src={ContactBannerB}
          alt="Trained Plaza Protection security guards ensuring safety and readiness"
          className="object-cover rounded-[40px]"
        />
      </div>

      <ContactForm/>

      <div className="mx-4 sm:mx-6  xl:mx-10 2xl:container 2xl:mx-auto mb-10 2xl:mb-20 rounded-[40px] overflow-hidden">
        <GoogleMapComponent />
      </div>
      <SecurityTrustBanner {...SecurityTrustData} />
    </>
  );
};
export default Contact;
