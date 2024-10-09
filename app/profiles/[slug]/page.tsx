"use client";

import { gsap } from "gsap";
import React from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import AnimatedImageScale from "../components/AnimatedImageScale";
import AnimatedText from "../components/AnimatedText";
import MouseCursorComponent from "@/components/MouseCursorComponent";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import Slider from "@/components/Slider";
import { ArrowRight } from "lucide-react";

export default function SingleProfile({
  params,
}: {
  params: { slug: string };
}) {
  gsap.registerPlugin(ScrollTrigger);

  const textRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: -150,
    });
  }, []);

  return (
    <div className="mt-52">
      <div className="flex flex-col px-10">
        {/* Heading Section */}
        <div className="flex w-full flex-col gap-6 xl:gap-10">
          <h2 className="text-2xl">Cafe Fugaz</h2>
          <h1 className="title">
            A bold brew. A bold new brand. Where tradition meets innovation.
          </h1>
          <AnimatedImageScale imageUrl={"/single_profile_image1.webp"} />
        </div>

        {/* Intro Section */}
        <div className="my-[15vh] flex w-[1024px] flex-col gap-10 self-center">
          <AnimatedText title="Cheers to breaking conventions, embracing flavor, and raising a glass to the art of brewing. Elevate your palate!" />
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-4">
              <div className="font-[500]">Services</div>
              <MouseCursorComponent>
                User Research, User Testing, UX/UI Design, Website
              </MouseCursorComponent>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-[500]">Client</div>
              <div>Beyond Brewery</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-[500]">Year</div>
              <div>2022</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-[500]">Services</div>
              <MouseCursorComponent>flowcrafts.com</MouseCursorComponent>
            </div>
          </div>
        </div>

        <AnimatedImageScale imageUrl={"/single_profile_image2.webp"} />

        {/* Profile Section */}
        <div className="my-[15vh] flex max-w-[1600px]">
          <div className="w-2/6">Challenge</div>
          <div className="w-4/6">
            <AnimatedText title="Our client needed a brand refresh to better reflect their evolving business values and appeal to a younger demographic.">
              <p className="body-text">
                In response to the dynamic shifts in their industry landscape
                and a desire to connect more effectively with a younger
                audience, our client recognized the imperative for a
                comprehensive brand refresh.
              </p>
              <p className="body-text">
                Driven by a commitment to remaining current, aligning with
                contemporary values, and resonating authentically with a dynamic
                audience, the refresh encompassed a holistic approach — from
                visual aesthetics and messaging to a profound reimagining of the
                overall brand experience.
              </p>
            </AnimatedText>
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative flex h-[90vh] w-full gap-8">
          <div className="h-full w-3/5 overflow-hidden">
            <Image
              src="/single_profile_image3.webp"
              alt=""
              width={800}
              height={900}
              className="w-full"
            />
          </div>
          <div className="flex h-full w-2/5 items-end overflow-hidden">
            <Image
              src="/single_profile_image4.webp"
              alt=""
              width={800}
              height={900}
              className="w-full"
            />
          </div>
        </div>

        {/* Profile Section */}
        <div className="my-[15vh] flex max-w-[1600px]">
          <div className="w-2/6">Challenge</div>
          <div className="w-4/6">
            <AnimatedText title="Our client needed a brand refresh to better reflect their evolving business values and appeal to a younger demographic.">
              <p className="body-text">
                In response to the dynamic shifts in their industry landscape
                and a desire to connect more effectively with a younger
                audience, our client recognized the imperative for a
                comprehensive brand refresh.
              </p>
              <p className="body-text">
                Driven by a commitment to remaining current, aligning with
                contemporary values, and resonating authentically with a dynamic
                audience, the refresh encompassed a holistic approach — from
                visual aesthetics and messaging to a profound reimagining of the
                overall brand experience.
              </p>
            </AnimatedText>
          </div>
        </div>

        <div className="relative z-10 w-full">
          <Image
            src="/single_profile_image5.webp"
            alt=""
            width={1600}
            height={900}
            className="w-full"
          />
          <Image
            src="/single_profile_image6.jpg"
            alt=""
            width={300}
            height={300}
            className="absolute -bottom-[250px] left-[300px]"
          />
        </div>
      </div>

      <div className="relative -mt-[40vh] flex w-full bg-black px-10 py-10 text-white">
        <div className="flex flex-col gap-[150px] pt-[70vh]">
          {/* break */}
          <div className="h-[1px] bg-neutral-800" />
          {/* Profile Section */}
          <div className="flex">
            <div className="w-2/6">Result</div>
            <div className="w-4/6">
              <AnimatedText title="Our client needed a brand refresh to better reflect their evolving business values and appeal to a younger demographic.">
                <p className="body-text">
                  In response to the dynamic shifts in their industry landscape
                  and a desire to connect more effectively with a younger
                  audience, our client recognized the imperative for a
                  comprehensive brand refresh.
                </p>
                <p className="body-text">
                  Driven by a commitment to remaining current, aligning with
                  contemporary values, and resonating authentically with a
                  dynamic audience, the refresh encompassed a holistic approach
                  — from visual aesthetics and messaging to a profound
                  reimagining of the overall brand experience.
                </p>
              </AnimatedText>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col">
            <div className="h-[80vh] w-full bg-[url('/single_profile_image7.webp')] bg-cover bg-center bg-no-repeat" />
            <h3
              ref={textRef}
              className="z-10 max-w-[1024px] self-end text-[105px] leading-[1.2em] mix-blend-difference"
            >
              Igniting innovation through visionary design and strategic
              brilliance.
            </h3>
            <div className="-mt-52 flex justify-center gap-10">
              <div className="flex w-5/12 items-start justify-end">
                <Image
                  src="/single_profile_image9.webp"
                  alt=""
                  width={500}
                  height={300}
                  className="mt-[300px]"
                />
              </div>
              <div className="w-7/12">
                <Image
                  src="/single_profile_image8.webp"
                  alt=""
                  width={500}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Slider */}
          <div>
            <Slider slidesPerView={1} padding>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index}>
                  <Image
                    src={`/single_profile_slide${index}.webp`}
                    alt="slide image"
                    width={1600}
                    height={900}
                    objectFit="cover"
                    className="w-full"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Next Project */}
      <div className="flex w-full flex-col gap-10 bg-black pt-20 text-white">
        <div className="px-10">Next Project</div>
        <div className="relative flex h-[80vh] w-full items-end bg-[url('/h-1.webp')] bg-cover px-10 py-20">
          {/* Title */}
          <div className="sticky bottom-[80px] z-10 flex flex-col">
            <MouseCursorComponent>
              <h2 className="flex items-center text-[42px]">
                Bunero{" "}
                <ArrowRight
                  className="-rotate-45"
                  strokeWidth={1}
                  size={"1.7em"}
                />
              </h2>
            </MouseCursorComponent>
            <h3 className="text-[16px]">
              A fresh take on natural luxury. Indulge in nature's bounty.
            </h3>
          </div>
          {/* Background Gradient */}
          <div className="absolute bottom-0 left-0 h-[50vh] w-full bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}
