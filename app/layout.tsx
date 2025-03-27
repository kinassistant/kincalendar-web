import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import NavbarSm from "@/components/shared/NavbarSm";
import "./globals.css";
import ClientAnalytics from "@/components/shared/ClientAnalytics";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} relative`}>
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
