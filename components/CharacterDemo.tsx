import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import ChatBubble, { transitionProps } from "./ChatBubble";

const CharacterDemo = ({ onDone }) => {
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
          <div>!info character</div>
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
          <p className="mb-2">Your character lists</p>
          <div className="lg:mr-10">
            <img
              src={"/images/demos/characters.jpg"}
              className="max-w-full"
              alt="demos"
            />
          </div>
        </ChatBubble>
      </Transition>
    </>
  );
};

export default CharacterDemo;
