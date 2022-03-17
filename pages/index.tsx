import Head from "next/head";
import Script from "next/script";
import React, { useState } from "react";
import AbyssDemo from "../components/AbyssDemo";
import AbyssLeaderboardDemo from "../components/AbyssLeaderboardDemo";
import AbyssSummaryDemo from "../components/AbyssSummaryDemo";
import CharacterCompDemo from "../components/CharacterCompDemo";
import CharacterDemo from "../components/CharacterDemo";
import CharacterExpDemo from "../components/CharacterExpDemo";
import CharacterTalentDemo from "../components/CharacterTalentDemo";
import FarmableDemo from "../components/FarmableDemo";
import Footer from "../components/Footer";
import ResinDemo from "../components/ResinDemo";
import TypeWriter from "../components/TypeWriter";
import WeaponDemo from "../components/WeaponDemo";
import WishTrackerDemo from "../components/WishTrackerDemo";

interface Props {}

const textChats = [
  "!info character",
  "!info kazuha",
  "!wish https://webstatic--------------",
  "!exp kazuha 20-80",
  "!talent kazuha 5-8",
  "!weapon staff homa",
  "!abyss",
  "!abyss summary",
  "!leaderboard",
  "!farm",
  "!resin 99 5:20",
];

const descriptions = [
  "Your character lists summary",
  "Character details",
  "Quick Wish pity tracker",
  "Character EXP Estimation",
  "Character Talent Estimation",
  "Weapon Material Estimation",
  "Spiral Abyss Comp",
  "Spiral Abyss Summary",
  "Guild Spiral Abyss Leaderboard",
  "Farmable material",
  "Resin Calculators",
];

const IndexPage = (props: Props) => {
  const [chatDisplay, setChatDisplay] = useState(-1);
  const [textDisplay, setTextDisplay] = useState(0);
  const disabled = false;

  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url(/images/Genshin-Impact-Apple-Cider-Location.webp)`,
      }}
    >
      <Head>
        <title>The TavernBot - Genshin Impact utility bot for your guild</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="vALsLFEOwX6FtK0O9vFw47D6veks59a1MbElobMWU9s"
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-215068175-1"
      />
      <Script>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-215068175-1');
          `}
      </Script>
      <div className="bg-black bg-opacity-75 fixed top-0 left-0 w-full h-full" />
      <div className="lg:w-[1000px] min-h-screen mx-auto flex flex-col relative px-6">
        <div className="flex items-center flex-1 flex-col lg:flex-row">
          <div className="flex-1 text-center lg:text-left mt-20 mb-6 lg:my-0">
            <h1 className="text-3xl lg:text-5xl font-bold text-white">
              The TavernBot{" "}
              <small className="bg-orange-500 px-1 rounded-md text-white text-sm lg:text-lg">
                Beta
              </small>
            </h1>
            <p className="text-white text-opacity-50 lg:text-lg">
              Genshin Impact utility bot for your guild
            </p>
            <div className="mt-6 flex flex-col lg:flex-row lg:mx-0">
              <a
                href="https://discord.com/oauth2/authorize?client_id=864896057074515979&permissions=124992&scope=applications.commands%20bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 font-semibold text-white p-2 lg:py-3 lg:px-5 flex items-center rounded-xl mr-4 hover:bg-blue-800 transition-all duration-200 hover:scale-105 w-full mb-4 lg:mb-0"
              >
                <i
                  className="w-6 h-5 bg-contain bg-no-repeat block mr-2"
                  style={{
                    backgroundImage: `url(/images/Discord-Logo-White.svg)`,
                  }}
                />
                <span>Add to discord</span>
              </a>

              <a
                href="https://t.me/ttavern_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 font-semibold text-blue-800 p-2 lg:py-3 lg:px-5 flex items-center rounded-xl hover:bg-blue-200 transition-all duration-200 hover:scale-105 w-full"
              >
                <i
                  className="w-6 h-6 bg-contain bg-no-repeat block mr-2"
                  style={{
                    backgroundImage: `url(/images/Telegram_logo.svg)`,
                  }}
                />
                Add to Telegram
              </a>
            </div>
            <p className="text-sm text-white mt-5 hidden">
              ❗️ The Bot are still in beta phase, you may facing issue like
              unresponsive, glitches and laggy response, due my bot is still
              hosted in my fancy room.
            </p>
          </div>
          <div className="flex-1 w-full sm:w-[500px] lg:pl-10">
            <div className="w-full pb-[180%] mt-0 lg:mt-10 lg:pb-[160%] bg-gray-800 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full flex justify-end flex-col p-4">
                {chatDisplay === 0 && (
                  <CharacterDemo onDone={() => setTextDisplay(1)} />
                )}
                {chatDisplay === 1 && (
                  <CharacterCompDemo onDone={() => setTextDisplay(2)} />
                )}
                {chatDisplay === 2 && (
                  <WishTrackerDemo onDone={() => setTextDisplay(3)} />
                )}
                {chatDisplay === 3 && (
                  <CharacterExpDemo onDone={() => setTextDisplay(4)} />
                )}
                {chatDisplay === 4 && (
                  <CharacterTalentDemo onDone={() => setTextDisplay(5)} />
                )}
                {chatDisplay === 5 && (
                  <WeaponDemo onDone={() => setTextDisplay(6)} />
                )}
                {chatDisplay === 6 && (
                  <AbyssDemo onDone={() => setTextDisplay(7)} />
                )}
                {chatDisplay === 7 && (
                  <AbyssSummaryDemo onDone={() => setTextDisplay(8)} />
                )}
                {chatDisplay === 8 && (
                  <AbyssLeaderboardDemo onDone={() => setTextDisplay(9)} />
                )}
                {chatDisplay === 9 && (
                  <FarmableDemo onDone={() => setTextDisplay(10)} />
                )}
                {chatDisplay === 10 && (
                  <ResinDemo onDone={() => setTextDisplay(0)} />
                )}
                <div className="mt-6 text-sm bg-gray-700 rounded-lg py-3 px-3 shadow-md">
                  {!disabled && (
                    <TypeWriter
                      text={textChats[textDisplay]}
                      onDone={() => {
                        setChatDisplay(textDisplay);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <p className="mt-3 text-white italic text-sm">
              {descriptions[textDisplay]}
            </p>
          </div>
        </div>
        <div className="text-white mt-10 text-sm flex flex-col lg:flex-row items-start lg:items-center">
          <p>🙋 Any question regarding TavernBot?, join discord server</p>
          <a
            href="https://discord.gg/5huY9Ed2vJ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 font-semibold text-white py-2 px-3 flex items-center rounded-lg mr-4 mt-3 lg:mt-0 lg:ml-3 hover:bg-blue-800 transition-all duration-200"
          >
            <i
              className="w-5 h-5 bg-contain bg-no-repeat block mr-2 mt-1"
              style={{
                backgroundImage: `url(/images/Discord-Logo-White.svg)`,
              }}
            />
            <span>Join Discord Servers</span>
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;
