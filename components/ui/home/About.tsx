"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MouseCursorComponent from "@/components/MouseCursorComponent";
import { ArrowRight } from "lucide-react";

const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {

    // Get all the skills
    const skills = gsap.utils.toArray(
      containerRef.current.querySelectorAll("li"),
    ) as HTMLLIElement[];

    // Get all the spans in the last skill
    const skillSpans = gsap.utils.toArray(
      skills[4].querySelectorAll("span"),
    ) as HTMLSpanElement[];

    //initial text size
    gsap.set(skills, {
      scale: 2.4,
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    });

    // Web Designer
    skills.slice(0, 2).forEach((skill, index) => {
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
      });
    });

    // + Symbol
    gsap
      .timeline({
        scrollTrigger: {
          trigger: skills[2],
          start: "-=350 center",
          end: "bottom center",
          scrub: 1.2,
        },
      })
      .to(skills[2], { rotate: 180, scale: 1.5, y: -250 })
      .to(skills[2], { filter: "blur(10px)" }, "-=0.3");

    // Creative
    gsap.to(skills[3], {
      scale: 1.5,
      opacity: 0,
      y: -250,
      filter: "blur(20px)",
      scrollTrigger: {
        trigger: skills[3],
        start: "-150 center",
        end: "bottom center",
        scrub: 1.2,
      },
    });

    // Frontend Developer
    // initial text
    gsap.set(skillSpans, {
      scale: 1.4,
      opacity: 1,
      x: (index) => (index % 2 === 0 ? -550 : 550),
    });

    // // animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: skills[4],
          start: "-=450 center",
          end: "+1500 center",
          scrub: 1.2,
        },
      })
      .to(skillSpans, {
        opacity: 0.5,
        scale: 0.5,
        y: (index) => (index % 2 === 0 ? -200 : -200),
        x: (index) => (index % 2 === 0 ? 100 : ("40%" as any)),
      })
      .to(skillSpans, { filter: "blur(15px)" }, "-=0.3")
      .to(skillSpans, { scale: 0.4 }, "-=0.3");
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full justify-center overflow-hidden rounded-t-[60px] rounded-tr-none bg-[#141017] text-[#5f6567] lg:rounded-t-[60px]"
    >
      <div className="p-[100px] lg:p-[150px]">
        <ul className="flex flex-col gap-[200px] text-center text-[96px] font-thin">
          <li>web</li>
          <li>Designer</li>
          <li>
            <span className="relative -top-[15px]">+</span>
          </li>
          <li className="relative -top-[200px]">Creative</li>
          <li className="relative -top-[300px] bg-red-50">
            <span className="absolute left-[50%] -translate-x-[50%]">
              Frontend
            </span>
            <span className="absolute right-[50%] top-[70px] translate-x-[50%]">
              Developer
            </span>
          </li>
        </ul>
        <div className="w-max-[1200px] relative flex flex-col gap-12 pb-20 text-[#e9e9e7] lg:px-[15%]">
          <h3 className="text-3xl">I'm Andréw Kaplan</h3>
          <div className="flex items-start w-full flex-col gap-5 text-[20px]">
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
            <MouseCursorComponent className="flex gap-2 items-center text-[0.8em]">Get in touch <ArrowRight className="-rotate-45" strokeWidth={1} size={'1.8em'}/></MouseCursorComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
