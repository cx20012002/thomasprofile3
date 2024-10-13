"use client";

import {
  alignToMouseCursor,
  followMouseCursor,
} from "@/utils/followMouseCursor";
import { useGSAP } from "@gsap/react";
import React, { HTMLAttributes, memo, ReactNode, useRef } from "react";
import gsap from "gsap";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

interface MouseCursorComponentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  slider?: boolean;
  isAbsolute?: boolean;
}

const MouseCursorComponent = ({
  children,
  className,
  slider,
  isAbsolute = false,
  ...rest
}: MouseCursorComponentProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseCursorRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (context, contextSafe) => {
      const onMouseMove = contextSafe((e: MouseEvent) => {
        followMouseCursor(containerRef, mouseCursorRef, e);
      });

      const onMouseLeave = contextSafe(() => {
        gsap.to(mouseCursorRef.current, {
          opacity: 0,
          scale: 1,
          duration: 0.3,
        });
      });

      const onMouseEnter = contextSafe((e: MouseEvent) => {
        alignToMouseCursor(containerRef, mouseCursorRef, e);
        gsap.to(mouseCursorRef.current, {
          opacity: 1,
          scale: 2,
          duration: 0.3,
        });
      });

      if (containerRef.current) {
        containerRef.current.addEventListener("mousemove", onMouseMove);
        containerRef.current.addEventListener("mouseleave", onMouseLeave);
        containerRef.current.addEventListener("mouseenter", onMouseEnter);
      }

      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener("mousemove", onMouseMove);
          containerRef.current.removeEventListener("mouseleave", onMouseLeave);
          containerRef.current.removeEventListener("mouseenter", onMouseEnter);
        }

        if (mouseCursorRef.current) {
          gsap.killTweensOf(mouseCursorRef.current);
        }
      };
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={`${className} ${!isAbsolute && "relative"} cursor-pointer`}
      {...rest}
    >
      {children}
      {slider ? (
        <div
          ref={mouseCursorRef}
          className="pointer-events-none absolute inset-0 z-20 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black opacity-0"
        >
          <TfiAngleLeft color="white" opacity={0.8} size={15} />
          <TfiAngleRight color="white" opacity={0.8} size={15} />
        </div>
      ) : (
        <div
          ref={mouseCursorRef}
          className={`pointer-events-none absolute inset-0 z-20 h-[30px] w-[30px] rounded-full bg-white opacity-0 mix-blend-difference`}
        />
      )}
    </div>
  );
};

export default memo(MouseCursorComponent);
