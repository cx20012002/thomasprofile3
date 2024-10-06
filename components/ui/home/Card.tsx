import MouseCursorComponent from "@/components/MouseCursorComponent";
import { useGSAP } from "@gsap/react";
import React, { memo, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title?: string;
  categories?: string[];
  bg?: string;
}

const Card = ({ title, categories, bg }: CardProps) => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      if (bgRef.current) {
        gsap.set(imgRef.current, {
          scale: 1,
        });

        gsap.to(imgRef.current, {
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top bottom",
            end: "30% top",
            scrub: 1,
          },
          scale: 1.2,
          duration: 2,
        });
      }
    },
    { scope: bgRef },
  );

  return (
    <div
      ref={bgRef}
      className={
        "group sticky top-0 h-screen w-full overflow-hidden rounded-[50px] bg-no-repeat p-10"
      }
    >
      <Image
        ref={imgRef}
        src={bg}
        fill
        objectFit="cover"
        quality={100}
        alt=""
        className="absolute"
      />
      <div className="relative z-10 flex justify-between text-white">
        <div className="relative flex flex-col gap-3">
          <div className="flex text-[10px] uppercase">
            {categories?.map((category, index) => (
              <MouseCursorComponent key={index} className="pr-2">
                {category}
              </MouseCursorComponent>
            ))}
          </div>
          <MouseCursorComponent className="text-4xl">
            {title}
          </MouseCursorComponent>
        </div>
        <div>
          <MouseCursorComponent className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white">
            <ArrowRight className="-rotate-45" strokeWidth={1} size={"2em"} />
          </MouseCursorComponent>
        </div>
        <div className="pointer-events-none absolute inset-0 h-[70px] w-[70px] rounded-full bg-white opacity-0 mix-blend-difference" />
      </div>

      <div className="absolute inset-0 h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
    </div>
  );
};

export default memo(Card);
