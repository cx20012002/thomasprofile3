"use client";

import React, { useRef } from "react";
import Card from "./Card";
import MouseCursorComponent from "@/components/MouseCursorComponent";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { History, Profile } from "@/lib/interface";
import { urlFor } from "@/sanity/lib/image";
import HomeFooter from "./HomeFooter";


const Profiles = ({ history, proflie }: { history: History[], proflie:Profile[] }) => {
  const dotContainerRef = useRef<HTMLDivElement | null>(null);
  const dotsBgRef = useRef<HTMLImageElement | null>(null);
  const dotsTextRef = useRef<HTMLDivElement | null>(null);

  const awards = Object.values(history[0].experience);
  const education = Object.values(history[1].experience);


  useGSAP(() => {
    // Initial Setup
    gsap.set([dotsBgRef.current, dotsTextRef.current], { scale: 0.9 });
    gsap.set(dotsTextRef.current, { opacity: 0 });
    gsap.set(dotsTextRef.current, { translateY: "-20%" });

    // Scroll Trigger Setup for Dot Container pinning
    gsap.to(dotContainerRef.current, {
      scrollTrigger: {
        trigger: dotContainerRef.current,
        start: "top top",
        end: "+=1500",
        pin: true,
      },
    });

    // Scroll Trigger Setup for Dot Container borderRadius
    gsap.to(dotContainerRef.current, {
      scrollTrigger: {
        trigger: dotContainerRef.current,
        start: "top top",
        end: "top top",
        scrub: 1,
      },
      borderRadius: 0,
    });

    // Scroll Trigger Setup for Dot Background
    gsap.to(dotsBgRef.current, {
      scrollTrigger: {
        trigger: dotContainerRef.current,
        start: "top 60%",
        end: "+=2000",
        scrub: 1,
      },
      scale: 6,
    });

    // Scroll Trigger Setup for Dot Text
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: dotContainerRef.current,
          start: "top 30%",
          end: "bottom top",
          scrub: 1,
        },
      })
      .to(dotsTextRef.current, {
        opacity: 1,
      })
      .to(dotsTextRef.current, {
        scale: 1,
      });
  });

  return (
    <div className="relative w-full bg-[#141017]">
      {/* Profile Cards */}
      {proflie.map((item, index) => (
        <Card
          key={index}
          bg={urlFor(item.image).url()}
          title={item.title}
          categories={item.smallTitle}
        />
      ))}

      {/* Awards & Educational */}
      <div
        className={
          "group sticky top-0 flex h-screen w-full flex-col justify-between gap-10 overflow-hidden rounded-[50px] bg-[#e9e9e7] bg-no-repeat p-10 pt-[200px] lg:flex-row"
        }
      >
        {/* Awards */}
        <div className="flex h-full w-full flex-col gap-12">
          <h2 className="text-5xl">{history[0].title}</h2>
          <div className="flex h-full w-full flex-col">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b-[1px] border-gray-400 py-6"
              >
                <MouseCursorComponent className="w-2/12">
                  {award.first}
                </MouseCursorComponent>
                <MouseCursorComponent className="w-4/12">
                  {award.second}
                </MouseCursorComponent>
                <MouseCursorComponent className="w-4/12">
                  {award.third}
                </MouseCursorComponent>
                <MouseCursorComponent className="flex w-2/12 justify-end">
                  <ArrowRight
                    className="-rotate-45"
                    strokeWidth={1}
                    size={"2.5em"}
                  />
                </MouseCursorComponent>
              </div>
            ))}
          </div>
        </div>

        {/* Educational */}
        <div className="flex h-full w-full flex-col gap-12">
          <h2 className="text-5xl">{history[1].title}</h2>
          <div className="flex h-full w-full flex-col">
            {education.map((award, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b-[1px] border-gray-400 py-6"
              >
                <MouseCursorComponent className="w-2/12">
                  {award.first}
                </MouseCursorComponent>
                <MouseCursorComponent className="w-4/12">
                  {award.second}
                </MouseCursorComponent>
                <MouseCursorComponent className="w-4/12">
                  {award.third}
                </MouseCursorComponent>
                <MouseCursorComponent className="flex w-2/12 justify-end">
                  <ArrowRight
                    className="-rotate-45"
                    strokeWidth={1}
                    size={"2.5em"}
                  />
                </MouseCursorComponent>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Animation */}
      <div
        ref={dotContainerRef}
        className={
          "group top-0 z-20 flex h-screen w-full items-center justify-center gap-10 overflow-hidden rounded-[50px] bg-white p-10 pt-[200px]"
        }
      >
        <div
          ref={dotsBgRef}
          className="flex h-[1000px] w-full items-center justify-center"
        >
          <Image
            src={"/dots.webp"}
            objectFit="contain"
            quality={100}
            alt=""
            fill
          />
        </div>
        <div
          ref={dotsTextRef}
          className="absolute text-center text-[180px] font-[100] leading-[180px] text-white"
        >
          <h2>Pixels</h2>
          <h2>with Purpose</h2>
          <p className="mt-0 text-xl text-neutral-400">Since 2016</p>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};

export default Profiles;
