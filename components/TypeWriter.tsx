import clsx from "clsx";
import React, { useEffect, useState } from "react";

const TypeWriter = ({ onDone = undefined, command: _cmd = "", text = "" }) => {
  const placeholder = "Message to @TavernBot";
  const theText = text || "";
  const [isPlaceholder, setIsPlaceholder] = useState(true);
  const [command, setCommand] = useState("");
  const [showParam, setShowParam] = useState(false);
  const [character, setCharacter] = useState(placeholder);

  useEffect(() => {
    const doTyping = async (i, kind = "cmd") => {
      if (kind === "cmd") {
        setCharacter("");
        setCommand(_cmd.substr(0, i) + (i === _cmd.length ? "" : "|"));
        if (i < _cmd.length) {
          await new Promise((r) => setTimeout(r, 60));
          doTyping(i + 1, kind);
          return;
        }
        await new Promise((r) => setTimeout(r, 100));
        doTyping(0, "param");
      }
      if (kind === "param") {
        if (i === 0 && text.length > 0) {
          setShowParam(true);
          await new Promise((r) => setTimeout(r, 500));
        }
        setCharacter(theText.substr(0, i) + (i === theText.length ? "" : "|"));
        if (i < theText.length) {
          await new Promise((r) => setTimeout(r, 60));
          doTyping(i + 1, kind);
          return;
        }
        await new Promise((r) => setTimeout(r, 500));
        setCharacter(placeholder);
        setShowParam(false);
        setIsPlaceholder(true);
        if (typeof onDone !== "undefined") onDone();
      }
    };
    setTimeout(() => {
      setIsPlaceholder(false);
      doTyping(1);
    }, 1000);
  }, [_cmd, text]);

  return (
    <div
      className={clsx("text-white", {
        "text-opacity-25": isPlaceholder,
      })}
    >
      {!isPlaceholder && (
        <>
          {command}
          {showParam && (
            <span className="bg-gray-900 px-1 rounded-md mx-1">param:</span>
          )}
        </>
      )}

      {character}
    </div>
  );
};

export default TypeWriter;
