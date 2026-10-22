import "./globals.css";
import { Urbanist } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.revelationafricasafari.com"),
  title: {
    default: "Revelation Africa Safari | Tanzania Safaris, Kilimanjaro & Zanzibar",
    template: "%s | Revelation Africa Safari",
  },
  description:
    "Discover the heart of Africa — safaris, Kilimanjaro climbs, and Zanzibar escapes.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${urbanist.variable} light`} style={{ colorScheme: "light" }}>
      <body className="min-h-screen flex flex-col bg-white text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#ffffff",
              color: "#000000",
              border: "1px solid #e5e7eb",
              borderRadius: "0.75rem",
              fontSize: "0.9rem",
            },
            success: { iconTheme: { primary: "#16A34A", secondary: "#ffffff" } },
            error: { iconTheme: { primary: "#F97316", secondary: "#ffffff" } },
          }}
        />
      </body>
    </html>
  );
}