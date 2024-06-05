import Link from "next/link";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Abril_Fatface } from "next/font/google";
import Footer from "@/components/footer";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "200",
});

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  display: "auto",
  weight: "400",
});

export const metadata = {
  title: {
    default: "NiceFood&NiceBody",
    template: "%s | NiceFood&NiceBody",
  },
  description: "Nice food make Nice body.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className} data-theme="garden">
      <body>
        <div>
          <header
            className={`${abrilFatface.className} flex flex-col justify-center w-full`}
          >
            <Image
              className="w-screen h-96 object-cover brightness-90"
              src="/heroImage.jpg"
              alt="hero_image"
              width={1024}
              height={500}
            />
            <div className="absolute w-full flex flex-col justify-center items-center text-stone-300 p-4 sm:p-0">
              <h3>Wellnesss blog</h3>
              <h1 className="text-5xl sm:text-6xl drop-shadow-xl">
                Nice Foods Make Nice Body
              </h1>
            </div>
            <nav className="w-full bg-slate-50 shadow-md text-lg grid grid-flow-col justify-center">
              {navChild("/", "Home")}
              {navChild("about", "About")}
              {navChild("foods", "Foods")}
              {navChild("meditation", "Meditation")}
            </nav>
          </header>
          {children}
        </div>
        <Footer></Footer>
        <Analytics />
      </body>
    </html>
  );
}

function navChild(url: string, display: string) {
  return (
    <Link
      href={`/${url}`}
      className="hover:text-teal-400 hover:shadow-inner hover:shadow-stone-500 duration-200 p-2"
    >
      {display}
    </Link>
  );
}
