import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import ChatBubble, { transitionProps } from "./ChatBubble";

const FarmableDemo = ({ onDone }) => {
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
          <div>!farm</div>
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
          <div className="">
            <img
              src={"/images/demos/farm.jpg"}
              className="max-w-full"
              alt="demos"
            />
          </div>
        </ChatBubble>
      </Transition>
    </>
  );
};

export default FarmableDemo;
