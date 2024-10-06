import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import Image from "next/image";
import { slidesContent } from "@/lib/content";
import MouseCursorComponent from "@/components/MouseCursorComponent";

const ReviewFooter = ({ slidesPerView = 3 }: { slidesPerView?: number }) => {
  gsap.registerPlugin(Draggable);

  const slidesContainerRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const indicatorsRef = useRef<HTMLDivElement | null>(null);
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    if (slidesRef.current && slidesContainerRef.current) {
      const containerWidth = slidesContainerRef.current.offsetWidth;
      const slideWidth = containerWidth / slidesPerView;

      Draggable.create(slidesRef.current, {
        type: "x",
        edgeResistance: 0.85,
        dragResistance: 0,
        inertia: true,
        bounds: {
          minX: -(slideWidth * (slidesContent.length - slidesPerView)),
          maxX: 0,
        },
        onDragEnd: function () {
          const index = Math.round(-this.x / slideWidth);
          gsap.to(this.target, {
            x: -index * slideWidth,
            duration: 1,
            ease: "power4",
          });
          setCurIndex(index);
        },
      });
    }

    return () => {
      Draggable.get(slidesRef.current)?.kill();
    };
  }, [slidesRef.current]);

  const moveTo = (index: number) => {
    if (slidesRef.current && slidesContainerRef.current) {
      const containerWidth = slidesContainerRef.current.offsetWidth;
      const slideWidth = containerWidth / slidesPerView;
      gsap.to(slidesRef.current, {
        x: `-${slideWidth * index}px`,
        duration: 0.5,
      });
    }
    setCurIndex(index);
  };

  return (
    <div
      className={
        "group sticky top-0 flex h-screen w-full flex-col overflow-hidden bg-black"
      }
    >
      {/* upper part */}
      <div className="flex h-[60%] w-full flex-col gap-10 rounded-t-[50px] bg-[#e9e9e7] p-[50px]">
        <h3 className="mb-10 text-[42px]">Reviews</h3>

        <div
          ref={slidesContainerRef}
          className="flex w-full flex-col gap-10 overflow-hidden"
        >
          <MouseCursorComponent slider>
            {/* slides */}
            <div ref={slidesRef} className={`flex items-stretch`}>
              {slidesContent.map((content, index) => (
                <div
                  key={index}
                  className="box flex w-full flex-shrink-0 flex-col gap-10 pr-10 text-xl font-semibold"
                  style={{ width: `${100 / slidesPerView}%` }} // Adjust slide width
                >
                  <Image
                    src="/quote.svg"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                  <p>{content.quote}</p>
                  <span className="text-base font-semibold">
                    {content.author}
                  </span>
                </div>
              ))}
            </div>
          </MouseCursorComponent>

          {/* indicators */}
          <div className="flex justify-center gap-10">
            <div
              ref={indicatorsRef}
              className="indicators flex items-center gap-5"
            >
              {Array.from({
                length: slidesContent.length - slidesPerView + 1,
              }).map((_, index) => (
                <div
                  key={index}
                  onClick={() => {
                    moveTo(index);
                  }}
                  className={`indicator h-[5px] w-[5px] rounded-full transition-all duration-300 ${
                    index === curIndex ? "w-[18px] bg-gray-800" : "bg-gray-400"
                  } cursor-pointer`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* lower part */}
      <div className="-mt-[50px] flex h-[60%] w-full justify-between rounded-t-[50px] bg-white p-[50px]">
        <div className="flex h-full w-full flex-col justify-between gap-10">
          <div>
            <h3 className="text-lg font-bold">Andréw Kaplan</h3>
            <p className="text-lg">
              Digital designer + Crative Frontend Developer
            </p>
          </div>

          <h4 className="min-w-0 max-w-full text-[clamp(120px,10vw,180px)] font-light leading-[clamp(120px,10vw,180px)]">
            Let's <br /> Connect
          </h4>

          <span>ⓒ2024 Based in Oslo, Norway</span>
        </div>

        <div className="flex h-full w-full flex-col items-end justify-between">
          <Image
            src="/footer_photo.webp"
            alt="Picture of the author"
            width={225}
            height={225}
            className="rounded-full"
          />
          <div className="flex w-full flex-col items-end justify-between gap-5">
            <MouseCursorComponent>View CV</MouseCursorComponent>
            <MouseCursorComponent>
              <a href="mailTo:cx20012002@gmail.com">cx20012002@gmail.com</a>
            </MouseCursorComponent>
            <div className="flex w-full items-center justify-end gap-5">
              <MouseCursorComponent>
                <a href="#">LinkedIn</a>
              </MouseCursorComponent>
              <MouseCursorComponent>
                <a href="#">Medium</a>
              </MouseCursorComponent>
              <MouseCursorComponent>
                <a href="#">Instagram</a>
              </MouseCursorComponent>
              <MouseCursorComponent>
                <a href="#">X</a>
              </MouseCursorComponent>
              <MouseCursorComponent>
                <a href="#">Behance</a>
              </MouseCursorComponent>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default ReviewFooter;
