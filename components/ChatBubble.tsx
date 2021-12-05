import clsx from "clsx";
import React from "react";

interface Props {
  isBot?: boolean;
  children?: React.ReactNode;
}

export const transitionProps = {
  enter: "transition-all duration-200",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",

  leave: "transition-all duration-1000",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

const ChatBubble = ({ children, isBot }: Props) => {
  return (
    <div className="flex text-white mt-6 w-full flex-1">
      <div>
        <div
          className="w-10 h-10 bg-gray-500 rounded-full bg-center bg-cover"
          style={{
            backgroundImage: `url(/images/${
              isBot ? "charles.png" : "wakazuhacau.png"
            })`,
          }}
        />
      </div>

      <div className="ml-4 text-sm flex-1">
        <h2
          className={clsx("font-semibold mb-2", {
            "text-green-400": isBot,
            "text-yellow-500": !isBot,
          })}
        >
          {isBot ? "TavernBot" : "Wakazuhacau"}{" "}
          {isBot && (
            <span
              className="bg-indigo-700 px-1 rounded-md text-white"
              style={{ fontSize: 10 }}
            >
              BOT
            </span>
          )}
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ChatBubble;
