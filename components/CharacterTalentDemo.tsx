import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import ChatBubble, { transitionProps } from "./ChatBubble";

const CharacterTalentDemo = ({ onDone }) => {
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
          <div>!talent kazuha 5-8</div>
        </ChatBubble>
      </Transition>
      <Transition
        show={showIndex > 0}
        appear
        {...transitionProps}
        afterEnter={() => {
          setTimeout(() => {
            setShowIndex(-1);
          }, 5000);
        }}
        afterLeave={() => {
          if (typeof onDone !== "undefined") onDone();
        }}
      >
        <ChatBubble isBot>
          <div className="lg:mr-10">
            <img
              src={"/images/demos/talent.jpg"}
              className="max-w-full"
              alt="demos"
            />
          </div>
        </ChatBubble>
      </Transition>
    </>
  );
};

export default CharacterTalentDemo;
