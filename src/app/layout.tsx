import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import NavbarSm from "@/components/shared/NavbarSm";
import type { Metadata } from "next";
import logo from "@/assets/logo.svg";
import "./globals.css";

const title = "Kin: Family Calendar";
const description = "Voice-first AI powered Family Calendar.";

export const metadata: Metadata = {
  metadataBase: new URL('https://kincalendar.com'),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [logo.src],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [logo.src],
    site: "@realsanketp",
    creator: "@realsanketp",
  },
  other: {
    "apple-itunes-app": "app-id=6714457940",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="fixed top-6 left-0 right-0 z-50">
          <Navbar />
        </div>

        <div>
          <NavbarSm />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}
