import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import NavbarSm from "@/components/shared/NavbarSm";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kin Landing",
  description: "Smart planning for busy families, powered by voice.",
  openGraph: {
    title: "Kin Landing",
    description: "Smart planning for busy families, powered by voice.",
    images: ["https://yourwebsite.com/preview-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kin Landing - Smart Planning for Busy Families",
    description: "Smart planning for busy families, powered by voice.",
    images: ["https://yourwebsite.com/preview-image.jpg"],
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kin Landing",
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
