import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import ChatBubble, { transitionProps } from "./ChatBubble";

const WishTrackerDemo = ({ onDone }) => {
  const [showIndex, setShowIndex] = useState(0);
  return (
    <>
      <Transition
        show={showIndex > -1}
        appear
        {...transitionProps}
        afterEnter={async () => {
          await new Promise((r) => setTimeout(r, 2000));
          setShowIndex(1);
          await new Promise((r) => setTimeout(r, 2000));
          setShowIndex(2);
          await new Promise((r) => setTimeout(r, 2000));
          setShowIndex(3);
          await new Promise((r) => setTimeout(r, 1000));
          setShowIndex(4);
        }}
      >
        <ChatBubble isBot command="/wish">
          {showIndex === 0 && (
            <p>
              ⚙️ <em>Processing Standard Banner</em>
            </p>
          )}
          {showIndex === 1 && (
            <p>
              ⚙️ <em>Processing Character Banner</em>
            </p>
          )}
          {showIndex === 2 && (
            <p>
              ⚙️ <em>Processing Weapon Banner</em>
            </p>
          )}
          {(showIndex >= 3 || showIndex === -1) && (
            <p>
              ✅ <em>Wish has been collected</em>
            </p>
          )}
        </ChatBubble>
      </Transition>
      <Transition
        show={showIndex > 3}
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
              src={"/images/demos/wish.jpg"}
              className="max-w-full"
              alt="demos"
            />
          </div>
        </ChatBubble>
      </Transition>
    </>
  );
};

export default WishTrackerDemo;
