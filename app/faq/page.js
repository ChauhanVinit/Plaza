export const metadata = {
    title: "FAQ | Plaza Protection | San Jose Bay Area Security Experts",
    description:
        "Find clear answers to common questions about Plaza Protection’s customizable security guard and patrol services in the San Jose Bay Area. Learn how to monitor your property with our client portal, explore service options, and connect with our team for a free consultation",
    keywords: [
        "Plaza Protection FAQ",
        "Security Guard and Patrol Services",
        "Security Guard Services",
         "Security Guard Services In San Jose Bay Area",
          "Customizable security solutions",
    ],
    metadataBase: new URL("https://www.plazaprotection.com"),
    alternates: {
        canonical: "/faq",
    },
    openGraph: {
        title: "FAQ | Plaza Protection | San Jose Bay Area Security Experts",
        description:
            "Find clear answers to common questions about Plaza Protection’s customizable security guard and patrol services in the San Jose Bay Area. Learn how to monitor your property with our client portal, explore service options, and connect with our team for a free consultation",
        url: "https://www.plazaprotection.com/faq",
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
        title: "FAQ | Plaza Protection",
        description:
            "Find clear answers to common questions about Plaza Protection’s customizable security guard and patrol services in the San Jose Bay Area. Learn how to monitor your property with our client portal, explore service options, and connect with our team for a free consultation",
        images: ["https://plazaprotection.com/includes/img/plazaprotection.png"],
    },
    icons: {
        icon: "/favicon.ico",
    },
};
import FaqContent from "@/components/FAQ/FaqContent";
import OurServices from "@/components/HomePage/OurServices";
import SecurityTrustBanner from "@/components/SecurityTrustBanner";


export default function FAQPage() {
     const SecurityTrustData = {
    title: (
      <>
        Plaza Protection : <br className="hidden sm:block" /> Securing San Jose
        Inside Out
      </>
    ),
   path:'/contact-us',
   btnText:'Contact Us'
}
    return (
        <>
            <FaqContent />
            <OurServices/>
              <SecurityTrustBanner {...SecurityTrustData} />
        </>
    );
}

