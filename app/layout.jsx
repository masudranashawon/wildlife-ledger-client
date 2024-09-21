import { Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import "./globals.css";

export const metadata = {
  title: "WildLedger Client",
  description:
    "A backend API built with Node.js, Express, and MongoDB for managing categories and animals, featuring image uploads and filtering capabilities.",
};

const spaceGroster = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGroster.className} bg-dark text-light antialiased`}
      >
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
