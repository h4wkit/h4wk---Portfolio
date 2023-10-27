import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/navbar";
import ModalProvider from "@/app/providers/modal-provider";
import Footer from "@/app/components/Footer/footer";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "500", "900", "800", "700", "600"],
});

export const metadata: Metadata = {
  title: "Kacper Siniło - Fullstack Developer",
  description: "Kacper Siniło Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
