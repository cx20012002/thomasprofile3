"use client";

import { gsap } from "gsap";
import React from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import AnimatedImageScale from "./AnimatedImageScale";
import AnimatedText from "./AnimatedText";
import MouseCursorComponent from "@/components/MouseCursorComponent";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import Slider from "@/components/Slider";
import { Profile } from "@/lib/interface";
import { urlFor } from "@/sanity/lib/image";
import ProfileSection from "./ProfileSection";

export default function SingleProfileContent({
  profile,
}: {
  profile: Profile;
}) {
  gsap.registerPlugin(ScrollTrigger);

  const textRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const sectionText = gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -150,
      });

      let mm = gsap.matchMedia();
      // Mobile View
      mm.add("screen and (max-width: 768px)", () => {
        sectionText.scrollTrigger.disable();
        gsap.set(textRef.current, { y: 0 });
      });

      // Desktop View
      mm.add("screen and (min-width: 768px)", () => {
        sectionText.scrollTrigger.enable();
      });

      // Cleanup
      return () => {
        sectionText.scrollTrigger && sectionText.scrollTrigger.disable();
        sectionText.kill();
      };
    },
    { scope: textRef.current },
  );

  return (
    <>
      <div className="flex flex-col px-5 md:px-10">
        {/* Heading Section */}
        <div className="flex w-full flex-col gap-6 xl:gap-10">
          <h2 className="text-2xl">{profile.title}</h2>
          <h1 className="title">{profile.subtitle}</h1>
          <AnimatedImageScale
            imageUrl={
              profile.featureImage
                ? urlFor(profile.featureImage).url()
                : "/h-0.webp"
            }
          />
        </div>

        {/* Intro Section */}
        <div className="flex w-full flex-col gap-10 self-center py-6 md:w-[1024px] md:py-[15vh]">
          <AnimatedText title={profile.introBlocks && profile.introBlocks[0].summary} />
          <div className="flex w-full flex-col justify-between gap-6 md:flex-row md:gap-0">
            {profile.introBlocks.slice(1).map((block, index) => (
              <div key={index} className="flex flex-col gap-2 md:gap-4">
                <div className="font-[800] md:font-[500]">{block.label}</div>
                <MouseCursorComponent>{block.content}</MouseCursorComponent>
              </div>
            ))}
          </div>
        </div>

        <AnimatedImageScale
          imageUrl={
            profile.featureImage ? urlFor(profile.images[0]).url() : "/h-0.webp"
          }
        />

        {/* Profile Section */}
        <ProfileSection profileSection={profile.profileSection[0]} />

        {/* Profile Image Section */}
        <div className="relative flex h-full w-full flex-col gap-8 md:flex-row">
          <div className="h-full w-full overflow-hidden md:w-3/5">
            <Image
              src={
                profile.featureImage
                  ? urlFor(profile.images[1]).url()
                  : "/h-0.webp"
              }
              alt=""
              width={800}
              height={900}
              className="w-full"
            />
          </div>
          <div className="flex h-full w-full items-start self-end overflow-hidden md:w-2/5">
            <Image
              src={
                profile.featureImage
                  ? urlFor(profile.images[2]).url()
                  : "/h-0.webp"
              }
              alt=""
              width={800}
              height={900}
              className="w-full"
            />
          </div>
        </div>

        {/* Profile Section */}
        <ProfileSection profileSection={profile.profileSection[1]} />

        <div className="relative z-10 w-full">
          <Image
            src={
              profile.featureImage
                ? urlFor(profile.images[3]).url()
                : "/h-0.webp"
            }
            alt=""
            width={1600}
            height={900}
            className="w-full"
          />
          <Image
            src={
              profile.featureImage
                ? urlFor(profile.images[4]).url()
                : "/h-0.webp"
            }
            alt=""
            width={300}
            height={300}
            className="absolute -bottom-[250px] left-[20px] origin-left scale-50 md:left-[300px] md:w-auto md:scale-100"
          />
        </div>
      </div>

      <div className="relative -mt-[5vh] flex w-full bg-black px-5 py-10 text-white md:-mt-[40vh] md:px-10">
        <div className="flex w-full flex-col gap-5 pt-10 md:gap-[100px] md:pt-[70vh]">
          {/* break */}
          <div className="mt-44 h-[1px] bg-neutral-800 md:mt-auto" />
          {/* Profile Section */}
          <ProfileSection profileSection={profile.profileSection[2]} />

          {/* Profile Section */}
          <div className="flex flex-col">
            <div
              className={`h-[300px] w-full bg-cover bg-center bg-no-repeat md:h-[80vh]`}
              style={{
                backgroundImage: `url(${profile.featureImage ? urlFor(profile.images[5]).url() : "/h-0.webp"})`,
              }}
            />
            <h3
              ref={textRef}
              className="z-10 w-full self-end text-5xl leading-[1.2em] mix-blend-difference md:max-w-[1024px] md:text-[105px]"
            >
              Igniting innovation through visionary design and strategic
              brilliance.
            </h3>
            <div className="-mt-20 flex flex-col justify-center gap-10 md:-mt-52 md:flex-row">
              <div className="flex w-full items-start justify-end md:w-5/12">
                <Image
                  src={
                    profile.featureImage
                      ? urlFor(profile.images[6]).url()
                      : "/h-0.webp"
                  }
                  alt=""
                  width={500}
                  height={300}
                  className="h-[200px] w-[80%] object-cover md:mt-[300px] md:h-auto md:w-auto md:object-none"
                />
              </div>
              <div className="w-full md:w-7/12">
                <Image
                  src={
                    profile.featureImage
                      ? urlFor(profile.images[7]).url()
                      : "/h-0.webp"
                  }
                  alt=""
                  width={500}
                  height={300}
                  className="-mt-20 w-[50%] md:mt-auto md:w-full"
                />
              </div>
            </div>
          </div>

          {/* Slider */}
          <div>
            {profile.gallery.length > 0 && (
              <Slider slidesPerView={1} padding>
                {profile.gallery.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={urlFor(image).url()}
                      alt="slide image"
                      width={1600}
                      height={900}
                      objectFit="cover"
                      className="w-full"
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
