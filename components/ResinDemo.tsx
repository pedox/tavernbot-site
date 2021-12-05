import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import ChatBubble, { transitionProps } from "./ChatBubble";

const ResinDemo = ({ onDone }) => {
  const [showIndex, setShowIndex] = useState(0);
  return (
    <>
      <Transition
        show={showIndex > -1}
        appear
        {...transitionProps}
        afterEnter={() => {
          setTimeout(() => setShowIndex(1), 800);
        }}
      >
        <ChatBubble>
          <div>!resin 99 5:20</div>
        </ChatBubble>
      </Transition>
      <Transition
        show={showIndex > 0}
        appear
        {...transitionProps}
        afterEnter={() => {
          setTimeout(() => setShowIndex(2), 4000);
        }}
      >
        <ChatBubble isBot>
          <div>
            <b>Current Resin: 🌙 99/160</b>
            <p className="font-bold">Replenished in:</p>
            <p className="font-bold">⏰ 00:5:20</p>
            <p className="font-bold">Fully replenished:</p>
            <p className="font-bold">⏰ 21:12:00</p>
            <p className="italic">Next Resins:</p>
            <pre className="mt-2 bg-black bg-opacity-20 py-1 px-2 rounded-lg">
              06/12/21 07:02:35 🌙 100 <br />
              06/12/21 09:42:35 🌙 120
              <br />
              06/12/21 12:22:35 🌙 140 <br />
              06/12/21 15:02:35 🌙 160
              <br />
            </pre>
          </div>
        </ChatBubble>
      </Transition>

      <Transition
        show={showIndex > 1}
        appear
        {...transitionProps}
        afterEnter={() => {
          // setTimeout(() => {
          //   setShowIndex(-1);
          // }, 5000);
        }}
        afterLeave={() => {
          if (typeof onDone !== "undefined") onDone();
        }}
      >
        <ChatBubble isBot>
          <div>
            <p className="mb-2">And many more!</p>
            <p>Click button below to replay preview.</p>
            <button
              className="bg-blue-700 px-3 py-2 mt-2 rounded-md transition-all duration-150 hover:bg-blue-800"
              onClick={() => {
                setShowIndex(-1);
              }}
            >
              Replay
            </button>
          </div>
        </ChatBubble>
      </Transition>
    </>
  );
};

export default ResinDemo;
