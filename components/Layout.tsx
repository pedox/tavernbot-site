import Link from "next/link";
import React from "react";
import Footer from "./Footer";

type Props = {};

const Layout = ({ children }) => {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url(/images/Genshin-Impact-Apple-Cider-Location.webp)`,
      }}
    >
      <div className="bg-black bg-opacity-75 fixed top-0 left-0 w-full h-full" />
      <div className="lg:w-[1000px] min-h-screen mx-auto flex flex-col relative px-6">
        <header className="text-white mt-5">
          <Link href="/">
            <a>
              <h1 className="text-2xl font-bold text-white">
                The TavernBot
                <small className="bg-orange-500 px-1 rounded-md text-white text-xs ml-2">
                  Beta
                </small>
              </h1>
            </a>
          </Link>
        </header>
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
