import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const JetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "H-Linc",
  description: "Empowering Knowledge and Creativity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header />
        {children}
        <Footer />
        </body>
        
    </html>
  );
}
