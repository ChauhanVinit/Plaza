export const metadata = {
  title: "Request Quote | San Jose Bay Area Security Patrol Experts | Plaza Protection",
  description:
    "Request a quote customized to your needs today to hire San Jose Bay Area's most dependable security services without any hassle.",
  keywords: [
    "Security guard services in bay area",
    "Security Guard Services",
    "Security Services",
    "Security Guards",
    "Security guard services in san jose",
  ],
  abstract:
    "Plaza Protection offers special pricing for custom plans. Request a quote to know more.",
  metadataBase: new URL("https://www.plazaprotection.com"),
  alternates: {
    canonical: "/request-quote",
  },
  openGraph: {
    title: "Request Quote | San Jose Bay Area Security Patrol Experts | Plaza Protection",
    description:
      "Request a quote customized to your needs today to hire San Jose Bay Area's most dependable security services without any hassle.",
    url: "https://www.plazaprotection.com/request-quote",
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
    title: "Request Quote | San Jose Bay Area Security Patrol Experts | Plaza Protection",
    description:
      "Request a quote customized to your needs today to hire San Jose Bay Area's most dependable security services without any hassle.",
    images: ["https://plazaprotection.com/includes/img/plazaprotection.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import RequestQuoteForm from "@/components/RequestQuoteForm";
import SecurityTrustBanner from "@/components/SecurityTrustBanner";

const RequestAQuote = () => {
  const SecurityTrustData = {
    title: (
      <>
        Plaza Protection : <br className="hidden sm:block" /> Securing San Jose
        Inside Out
      </>
    ),
   path:'/contact-us',
   btnText:'Contact Us'
   
  };
  return (
    <>
      <div className="mx-4 sm:mx-6 xl:max-w-[1160px] xl:mx-auto sm:text-center mt-10 2xl:mt-[100px] mb-12 2xl:mb-[116px]">
        <h1 className="mb-8 font-dmSans text-5xl !leading-[56px] xl:text-[52px] xl:!leading-[60px] 2xl:text-[56px]  2xl:!leading-[64px] font-semibold text-[#222A5B] tracking-[-3px]">
          Request A Quote
        </h1>
        <p className="px-4 sm:px-0 rounded sm:rounded-none border-l-[3px] sm:border-0 border-[#B0BABF]  font-dmSans text-lg  2xl:text-xl 2xl:!leading-8 font-normal text-[#45535E]">
          Select the security service you are interested in, fill out the form
          below to request a quote customized to your needs, & we will get back
          to you as soon as possible.
        </p>
      </div>
      <RequestQuoteForm />
      <SecurityTrustBanner {...SecurityTrustData} />
    </>
  );
};

export default RequestAQuote;
