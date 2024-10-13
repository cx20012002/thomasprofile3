import MouseCursorComponent from "@/components/MouseCursorComponent";
import { useGSAP } from "@gsap/react";
import React, { memo, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CardProps {
  title?: string;
  categories?: string;
  bg?: string;
  slug?: string;
}

const Card = ({ title, categories, bg, slug = "/" }: CardProps) => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imageLoader = ({ src, width, quality }) => {
    return `${bg}?w=${width}&q=${quality || 75}`;
  };

  useGSAP(
    () => {
      if (bgRef.current) {
        gsap.set(imgRef.current, {
          scale: 1,
        });

        const gg = gsap.to(imgRef.current, {
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top bottom",
            end: "30% top",
            scrub: 1,
          },
          scale: 1.2,
          duration: 2,
        });

        // Mobile View
        let mm = gsap.matchMedia();
        mm.add("screen and (max-width: 768px)", () => {
          gg.scrollTrigger && gg.scrollTrigger.disable();
        });

        // Desktop View
        mm.add("screen and (min-width: 768px)", () => {
          gg.scrollTrigger && gg.scrollTrigger.enable();
        });

        // Cleanup
        return () => {
          gg.scrollTrigger && gg.scrollTrigger.disable();
          gg.kill();
        };
      }
    },
    { scope: bgRef },
  );

  return (
    <div
      ref={bgRef}
      className={
        "group relative -mt-10 h-[400px] w-full overflow-hidden rounded-t-[50px] bg-no-repeat p-10 md:sticky md:top-0 md:mt-0 md:h-screen md:rounded-[50px]"
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
        loader={imageLoader}
      />
      <div className="relative z-10 flex justify-between text-white">
        <div className="relative flex flex-col gap-3">
          <div className="flex text-[10px] uppercase">
            <MouseCursorComponent className="pr-2">
              {categories}
            </MouseCursorComponent>
          </div>
          <MouseCursorComponent className="text-4xl">
            <Link href={`/profiles/${slug}`}>{title}</Link>
          </MouseCursorComponent>
        </div>
        <div>
          <MouseCursorComponent className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white">
            <Link href={`/profiles/${slug}`}>
              <ArrowRight className="-rotate-45" strokeWidth={1} size={"2em"} />
            </Link>
          </MouseCursorComponent>
        </div>
        <div className="pointer-events-none absolute inset-0 h-[70px] w-[70px] rounded-full bg-white opacity-0 mix-blend-difference" />
      </div>

      <div className="absolute inset-0 h-full w-full bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
    </div>
  );
};

export default memo(Card);
