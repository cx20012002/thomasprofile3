"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Banner = () => {
  const containerRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // Create a timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      // Add animations to the timeline
      tl.to(box1Ref.current, { x: -80, duration: 1 }).to(
        box2Ref.current,
        { x: 80, duration: 1 },
        0,
      ); // The "0" here means both animations start at the same time


      // disable scrub on mobile
      let mm = gsap.matchMedia();
      mm.add("(max-width: 768px)", () => {
        tl.scrollTrigger.disable();
      });

      // enable scrub on desktop
      mm.add("(min-width: 768px)", () => {
        tl.scrollTrigger.enable();
      });
    },
    { scope: containerRef.current },
  );

  return (
    <div
      ref={containerRef}
      className="content-container relative flex h-[55vh] items-center justify-center overflow-hidden sm:h-[45vh] lg:h-[90vh]"
    >
      <div className="relative flex h-full w-[40%] items-end justify-end text-right text-[clamp(2em,12vw,180px)] font-[300] leading-[1em] sm:flex-col xl:w-[34%] xl:text-[clamp(2em,9vw,180px)]">
        <div className="-mr-[90px] mb-[330px] uppercase sm:-mr-[100px] sm:mb-[200px] lg:-mr-[150px] lg:mb-[100px]">
          <h1 ref={box1Ref} className="">
            Thomas
          </h1>
          <h1 ref={box2Ref} className="-mr-[50px]">
            Chen
          </h1>
        </div>
      </div>

      <div className="relative flex h-full w-[60%] items-end justify-start xl:w-[66%]">
        <div className="relative -mb-[30px] -ml-[80px] flex h-full w-[120%] flex-col items-end justify-end sm:w-full lg:ml-10 lg:w-[80%] xl:-mb-[90px] xl:ml-0 xl:w-[78%]">
          <Image
            src={"/home-banner.png"}
            width={1050}
            height={800}
            alt="Home banner"
          />
        </div>
        <Image
          src={"/curve_overlay.svg"}
          width={1050}
          height={800}
          alt="Curve Ovleray"
          className="absolute right-[50px] w-full scale-[210%] lg:right-3 lg:scale-100"
        />
      </div>

      
    </div>
  );
};

export default Banner;
