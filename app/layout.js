import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Security Services San Jose Bay Area | Security Patrol Experts | Plaza Protection",
  description:
    "Protect your business and property with professional security guard services in the San Jose Bay Area.Our licensed and trained security guards offer 24/7 protection tailored to your specific needs.",
  keywords: [
    "Security guard services in bay area",
    "Security guard services in san jose",
    "Security Services",
    "Security Guards",
  ],
  robots: "index, follow",
  authors: [{ name: "Plaza Protection" }],
  metadataBase: new URL("https://www.plazaprotection.com"),
  openGraph: {
    title: "Plaza Protection | Security Services San Jose Bay Area | Security Patrol Experts",
    description:
      "Protect your business and property with professional security guard services in the San Jose Bay Area.Our licensed and trained security guards offer 24/7 protection tailored to your specific needs.",
    url: "https://www.plazaprotection.com",
    siteName: "Plaza Protection",
    images: [
      {
        url: "https://plazaprotection.com/includes/img/plazaprotection.png",
        width: 1200,
        height: 630,
        alt: "Plaza Protection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@plazaprotection",
    creator: "@plazaprotection",
    title: "Plaza Protection | Security Services San Jose Bay Area | Security Patrol Experts",
    description:
      "Protect your business and property with professional security guard services in the San Jose Bay Area.Our licensed and trained security guards offer 24/7 protection tailored to your specific needs.",
    images: ["https://plazaprotection.com/includes/img/plazaprotection.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
                        