import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Progressbar from "@/components/Progressbar";
const outfit = Outfit({ subsets: ["latin"] });
import Providers from "./providers";



export const metadata: Metadata = {
  title: "PCCOE | ACM",
  description: "PCCOE ACM Student Chapter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} w-screen h-screen`}>
        <Providers>
          <Progressbar />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
