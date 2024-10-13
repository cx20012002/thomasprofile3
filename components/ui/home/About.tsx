"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MouseCursorComponent from "@/components/MouseCursorComponent";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const skills = gsap.utils.toArray(
        containerRef.current.querySelectorAll("li"),
      ) as HTMLLIElement[];

      const skillSpans = gsap.utils.toArray(
        skills[4].querySelectorAll("span"),
      ) as HTMLSpanElement[];

      const tl = gsap.timeline();

      skills.slice(0, 2).forEach((skill, index) => {
        tl.add(
          gsap.to(skill, {
            scale: 1.5,
            opacity: 0,
            y: index % 2 === 0 ? 250 : -100,
            filter: "blur(20px)",
            scrollTrigger: {
              trigger: skill,
              start: index % 2 === 0 ? "top center" : "-=150 center",
              end: index % 2 === 0 ? "+=500 top" : "bottom top",
              scrub: 1.2,
            },
          }),
        );
      });

      // + Symbol animation for skills[2]
      tl.add(
        gsap.to(skills[2], {
          rotate: 180,
          scale: 1.5,
          y: -250,
          filter: "blur(10px)",
          scrollTrigger: {
            trigger: skills[2],
            start: "-=350 center",
            end: "bottom center",
            scrub: 1.2,
          },
        }),
        "-=0.3",
      );

      // Creative
      tl.add(
        gsap.to(skills[3], {
          scale: 1.5,
          opacity: 0,
          y: -250,
          filter: "blur(20px)",
          scrollTrigger: {
            trigger: skills[3],
            start: "-250 center",
            end: "bottom center",
            scrub: 1.2,
          },
        }),
        "-=0.3",
      );

      // Frontend Developer
      tl.add(
        gsap
          .timeline({
            scrollTrigger: {
              trigger: skills[4],
              start: "-300 center",
              end: "+500 center",
              scrub: 1.2,
            },
          })
          .fromTo(
            skillSpans,
            {
              opacity: 0.5,
              x: (index) => (index % 2 === 0 ? -500 : 500),
              y: 0,
            },
            {
              opacity: 1,
              x: 0,
              y: -200,
            },
          )
          .to(skillSpans, { filter: "blur(15px)" }, "-=0.1")
          .to(skills[4], { scale: 0.8 }, "-=0.5"),
      );

      let mm = gsap.matchMedia();

      // Disable ScrollTrigger on mobile and reset positions
      mm.add("(max-width: 768px)", () => {
        tl.kill();
        tl.getChildren().forEach((child) => {
          child.scrollTrigger && child.scrollTrigger.disable();
        });

        // Reset skill spans to initial position and remove blur effect
        gsap.set(skillSpans, {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
        });

        // Reset all skills' transformations
        skills.forEach((skill) => {
          gsap.set(skill, { clearProps: "all" });
        });
      });

      // Enable ScrollTrigger on desktop
      mm.add("(min-width: 768px)", () => {
        tl.getChildren().forEach((child) => {
          child.scrollTrigger && child.scrollTrigger.enable();
        });
      });

      // Cleanup
      return () => {
        tl.getChildren().forEach((child) => {
          child.scrollTrigger && child.scrollTrigger.disable();
        });

        tl.kill();
      };
    },
    { scope: containerRef, dependencies: [containerRef] },
  );

  return (
    <div
      ref={containerRef}
      className="relative flex w-full justify-center overflow-hidden rounded-t-[60px] rounded-tr-none bg-[#141017] text-[#5f6567] lg:rounded-t-[60px]"
    >
      <div className="p-5 lg:p-[150px]">
        {/* Animated Texts */}
        <ul className="flex flex-col gap-0 text-center text-[50px] font-thin md:text-[200px]">
          <li>Web</li>
          <li>Designer</li>
          <li>
            <span className="relative">+</span>
          </li>
          <li className="relative">Creative</li>
          <li className="relative flex flex-col items-center justify-center leading-tight">
            <span>Frontend</span>
            <span>Developer</span>
          </li>
        </ul>

        {/* Introduce myself */}
        <div className="w-max-[1200px] relative mt-10 flex flex-col gap-12 px-5 pb-20 text-[#e9e9e7] md:mt-auto md:px-[15%]">
          <h3 className="text-3xl">I'm Andréw Kaplan</h3>
          <div className="body-text flex w-full flex-col items-start gap-5">
            <p>
              An independent digital designer and front-end developer.
              Passionate about crafting unforgettable experiences and providing
              companies with innovative, user-centric solutions for nearly a
              decade.
            </p>
            <p>
              Collaborating with global brands and agencies, I specialize in
              designing and developing websites and applications that prioritize
              interaction, motion, and visual engagement.
            </p>
            <p>
              My work has been on converting complex issues into
              straightforward, user-friendly solutions that are accessible to
              everyone.
            </p>
            <MouseCursorComponent className="text-[0.8em]">
              <Link href="/contact" className="flex items-center gap-2">
                Get in touch{" "}
                <ArrowRight
                  className="-rotate-45"
                  strokeWidth={1}
                  size={"1.8em"}
                />
              </Link>
            </MouseCursorComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
