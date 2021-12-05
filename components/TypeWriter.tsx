import clsx from "clsx";
import React, { useEffect, useState } from "react";

const TypeWriter = ({ onDone = undefined, text = "" }) => {
  const placeholder = "Message to @TavernBot";
  const theText = text || "!info character";
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const [character, setCharacter] = useState(placeholder);

  useEffect(() => {
    const doTyping = async (i) => {
      setCharacter(theText.substr(0, i) + (i === theText.length ? "" : "|"));
      if (i < theText.length) {
        await new Promise((r) => setTimeout(r, 40));
        doTyping(i + 1);
        return;
      }
      await new Promise((r) => setTimeout(r, 500));
      setCharacter(placeholder);
      setIsPlaceholder(true);
      if (typeof onDone !== "undefined") onDone();
    };
    setTimeout(() => {
      setIsPlaceholder(false);
      doTyping(1);
    }, 1000);
  }, [text]);

  return (
    <div
      className={clsx("text-white", {
        "text-opacity-25": isPlaceholder,
      })}
    >
      {character}
    </div>
  );
};

export default TypeWriter;
