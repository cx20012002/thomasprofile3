import gsap from "gsap";
import { RefObject } from "react";

// follow mouse cursor
export const followMouseCursor = (
  containerRef: RefObject<HTMLDivElement>,
  mouseCursorRef: RefObject<HTMLDivElement>,
  e: MouseEvent,
) => {
  if (mouseCursorRef.current && containerRef.current) {
    const containerRect = containerRef.current.getBoundingClientRect();

    const x = e.clientX - containerRect.left - mouseCursorRef.current.offsetWidth / 2;
    const y = e.clientY - containerRect.top - mouseCursorRef.current.offsetHeight / 2;

    gsap.to(mouseCursorRef.current, {x, y, duration: 0.3});
  }
};

// align to mouse cursor position
export const alignToMouseCursor = (
  containerRef: RefObject<HTMLDivElement>,
  mouseCursorRef: RefObject<HTMLDivElement>,
  e: MouseEvent,
) => {
  if (mouseCursorRef.current && containerRef.current) {
    const containerRect = containerRef.current.getBoundingClientRect();

    const x = e.clientX - containerRect.left - mouseCursorRef.current.offsetWidth / 2;
    const y = e.clientY - containerRect.top - mouseCursorRef.current.offsetHeight / 2;

    gsap.set(mouseCursorRef.current, {x, y});
  }
};
