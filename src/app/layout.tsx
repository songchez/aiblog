import Link from "next/link";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/footer";
import Script from "next/script";

const open_Sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

//head.js가 없어지고 오지는 SEO를 위한 metadata가 생겼다!!!!
//쉽게 동적메타데이타도 만들어 볼 수 있다!
export const metadata = {
  title: {
    default: "NiceFood&NiceBody",
    template: "NiceFood&NiceBody | %s",
  },
  description: "Nice food make Nice body.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={open_Sans.className} data-theme="garden">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3471034360825552"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body>
        <div className="p-1 sm:p-5">
          <header className="flex justify-center w-full">
            <div className="container flex justify-between items-center py-5 md:px-16 max-w-6xl">
              <Link href="/">
                <h1 className="text-2xl text-primary font-serif bg-accent-focus ">
                  {metadata.title.default}
                </h1>
              </Link>
              {/* PC */}
              <nav className="hidden sm:grid grid-flow-col gap-4">
                <Link href="/fun">Fun</Link>
              </nav>
              {/* 모바일 */}
              <div className="dropdown dropdown-end sm:hidden">
                <label
                  tabIndex={0}
                  className="btn m-1 bg-base text-primary hover:bg-primary/60 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base rounded-box w-52"
                >
                  <li>
                    <Link href="/fun">TalkToMe</Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
