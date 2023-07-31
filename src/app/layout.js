import DesktopMenu from "@/components/DesktopMenu";
import { Tilt_Neon, Lora, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const tiltNeon = Tilt_Neon({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "LEONARDO DIMAN MARTINS - DESENVOLVEDOR",
  description: "Portfolio criado e desenvolvido por Leonardo Diman Martins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${lora.className} ${tiltNeon.className} ${montserrat.className} `}
      >
        <DesktopMenu />
        <MobileMenu />
        <main className="text-white max-w-[1024px] mx-auto">{children}</main>
        <Footer />
        <script type="text/javascript"></script>
      </body>
    </html>
  );
}
