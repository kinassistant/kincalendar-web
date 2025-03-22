import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import NavbarSm from "@/components/shared/NavbarSm";
import type { Metadata } from "next";
import Head from "next/head";
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        {/*  Apple App Store Meta Tag */}
        <meta name="apple-itunes-app" content="app-id=6714457940" />
        {/* Twitter (X) Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kin Landing - Smart Planning for Busy Families"
        />
        <meta
          name="twitter:description"
          content="Smart planning for busy families, powered by voice."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/preview-image.jpg"
        />{" "}
        <meta name="twitter:site" content="@yourTwitterHandle" />{" "}
        <meta name="twitter:creator" content="@yourTwitterHandle" />{" "}
      </Head>
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
