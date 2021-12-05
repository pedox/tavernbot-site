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
        afterEnter={() => setTimeout(() => setShowIndex(1), 800)}
      >
        <ChatBubble>
          <div>!wish http://webstatic--------------</div>
        </ChatBubble>
      </Transition>
      <Transition
        show={showIndex > 0}
        appear
        {...transitionProps}
        afterEnter={async () => {
          await new Promise((r) => setTimeout(r, 2000));
          setShowIndex(2);
          await new Promise((r) => setTimeout(r, 2000));
          setShowIndex(3);
          await new Promise((r) => setTimeout(r, 2000));
          setShowIndex(4);
          await new Promise((r) => setTimeout(r, 1000));
          setShowIndex(5);
        }}
      >
        <ChatBubble isBot>
          {showIndex === 1 && (
            <p>
              ⚙️ <em>Processing Standard Banner</em>
            </p>
          )}
          {showIndex === 2 && (
            <p>
              ⚙️ <em>Processing Chracter Banner</em>
            </p>
          )}
          {showIndex === 3 && (
            <p>
              ⚙️ <em>Processing Weapon Banner</em>
            </p>
          )}
          {(showIndex >= 4 || showIndex === -1) && (
            <p>
              ✅ <em>Wish has been collected</em>
            </p>
          )}
        </ChatBubble>
      </Transition>
      <Transition
        show={showIndex > 4}
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
