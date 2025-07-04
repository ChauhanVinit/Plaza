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
    "At Plaza Protection, we provide excellent private patrol services to businesses throughout California to ensure the safety of our clients and their assets.",
  keywords: [
    "Security Services In San Jose",
    "Security Guard Services",
    "Private Patrol Services",
    "vehicle patrol",
    "Security patrol",
    "Security Services San Jose Bay Area",
  ],
  robots: "index, follow",
  authors: [{ name: "Plaza Protection" }],
  metadataBase: new URL("https://www.plazaprotection.com"),
  openGraph: {
    title: "Plaza Protection | Security Services San Jose Bay Area | Security Patrol Experts",
    description:
      "At Plaza Protection, we provide excellent private patrol services to businesses throughout California to ensure the safety of our clients and their assets.",
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
      "At Plaza Protection, we provide excellent private patrol services to businesses throughout California to ensure the safety of our clients and their assets.",
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
                        