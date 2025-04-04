import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import NavbarSm from "@/components/shared/NavbarSm";
import type { Metadata } from "next";
import "./globals.css";
import ClientAnalytics from "@/components/shared/ClientAnalytics";
import Analytics from "@/components/shared/Analytics";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const title = "KIN: Family Calendar - AI-Powered Family Scheduling App";
const description =
  "Streamline your family's schedule with KIN, the voice-first AI-powered family calendar app. Perfect for busy families, featuring smart scheduling, reminders, and seamless coordination.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kincalendar.com"),
  title,
  description,
  keywords: [
    "family calendar app",
    "AI calendar",
    "voice calendar",
    "family scheduling",
    "family organization",
    "iOS app",
    "family planner",
    "smart calendar",
    "family coordination",
    "voice assistant calendar",
    "family time management",
    "family schedule app",
    "family calendar for iOS",
    "AI family planner",
    "family calendar with voice",
  ],
  authors: [{ name: "Sanket Patel" }],
  creator: "Sanket Patel",
  publisher: "KIN: Family Calendar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title,
    description,
    images: ["https://www.kincalendar.com/assets/kin-calendar-social.png"],
    type: "website",
    locale: "en_US",
    siteName: "KIN: Family Calendar",
    url: "https://www.kincalendar.com",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://www.kincalendar.com/assets/kin-calendar-social.png"],
    site: "@realsanketp",
    creator: "@realsanketp",
  },
  other: {
    "apple-itunes-app": "app-id=6714457940",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://www.kincalendar.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${figtree.variable} relative`}>
        <Analytics />
        <div className="fixed top-6 left-0 right-0 z-50">
          <Navbar />
        </div>

        <div>
          <NavbarSm />
        </div>

        {children}

        <Footer />
        <ClientAnalytics />
      </body>
    </html>
  );
}
