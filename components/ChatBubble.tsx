import clsx from "clsx";
import React from "react";

interface Props {
  isBot?: boolean;
  children?: React.ReactNode;
  command?: string;
}

export const transitionProps = {
  enter: "transition-all duration-200",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",

  leave: "transition-all duration-1000",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

const ChatBubble = ({ children, isBot, command = "" }: Props) => {
  return (
    <div>
      <div className="flex text-white mt-6 w-full flex-1">
        <div>
          <div
            className={clsx(
              "w-10 h-10 bg-gray-500 rounded-full bg-center bg-cover",
              {
                "mt-8": command !== "",
              }
            )}
            style={{
              backgroundImage: `url(/images/${
                isBot ? "charles.png" : "wakazuhacau.png"
              })`,
            }}
          />
        </div>

        <div className="ml-4 text-sm flex-1">
          {command !== "" && (
            <div className="flex items-center mb-1">
              <div
                className="w-4 h-4 bg-gray-500 rounded-full bg-center bg-cover"
                style={{
                  backgroundImage: `url(/images/wakazuhacau.png)`,
                }}
              />
              <span className="ml-2 font-bold">Wakazuhacau</span>
              <span className="mx-2">used</span>{" "}
              <span className="text-blue-500 font-semibold">{command}</span>
            </div>
          )}

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
    </div>
  );
};

export default ChatBubble;
