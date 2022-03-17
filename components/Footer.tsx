import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-white text-xs py-3 leading-loose border-t border-white border-opacity-25 mt-5 mb-5">
      <div>
        🇮🇩 TavernBot &copy; 2022 - Data gather from{" "}
        <a
          href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Genshin Impact fandom wiki
        </a>
        ,{" "}
        <a
          href="https://github.com/Dimbreath/GenshinData"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GenshiniData Repository
        </a>
        ,{" "}
        <a
          href="https://genshin.honeyhunterworld.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Genshin Honneyhunterworld
        </a>
        , and{" "}
        <a
          href="https://hoyolab.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          hoYoLab
        </a>
        , this site is not affiliated with miHoYo. All material, images, data
        related to Genshin Impact Game are trademark of miHoYo itself.
      </div>
      <div className="mt-2">
        <Link href="/privacy-policy">
          <a className="underline">Privacy Policy</a>
        </Link>
        <Link href="/token">
          <a className="underline ml-3">Token Encryption</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
