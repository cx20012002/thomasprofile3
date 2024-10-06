"use client";

import MouseCursorComponent from "@/components/MouseCursorComponent";
import { ArrowRight } from "lucide-react";
import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";

const Footer = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openPopup = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsPopup(true);
  };

  const closePopup = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsPopup(false);
    }, 300);
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
  };

  return (
    <div className="fixed bottom-10 left-1/2 z-50 flex h-10 w-fit -translate-x-1/2 items-center justify-center text-white">
      <div className="flex w-[378px] items-center justify-between rounded-[50px] bg-neutral-900 bg-opacity-50 px-8 py-3 text-[9px] uppercase backdrop-blur-md">
        <MouseCursorComponent
          onMouseEnter={openPopup}
          onMouseLeave={closePopup}
        >
          TS
        </MouseCursorComponent>
        <MouseCursorComponent>About</MouseCursorComponent>
        <MouseCursorComponent>Work</MouseCursorComponent>
        <MouseCursorComponent>Awards</MouseCursorComponent>
        <MouseCursorComponent>Reviews</MouseCursorComponent>
        <MouseCursorComponent className="flex items-center justify-center gap-1">
          Blog{" "}
          <ArrowRight className="-rotate-45" strokeWidth={1} size={"1.3em"} />
        </MouseCursorComponent>
      </div>

      <Transition in={isPopup} timeout={duration} unmountOnExit>
        {(state) => (
          <div
            className="absolute -left-[150px] bottom-[30px] flex w-[200px] flex-col gap-2 rounded-2xl bg-white p-5 text-black transition-opacity ease-in-out"
            style={{ ...transitionStyles[state], ...defaultStyle }}
            onMouseEnter={() => {
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
              }
            }}
            onMouseLeave={closePopup}
          >
            <MouseCursorComponent>About</MouseCursorComponent>
            <MouseCursorComponent>Work</MouseCursorComponent>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Footer;
