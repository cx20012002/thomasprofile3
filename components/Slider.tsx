import { useRef, useState } from "react";
import MouseCursorComponent from "./MouseCursorComponent";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";
import React from "react";

export default function Slider({
  slidesPerView = 3,
  padding = false,
  children,
}: {
  slidesPerView?: number;
  padding?: boolean;
  children: React.ReactNode;
}) {
  gsap.registerPlugin(Draggable);

  // Refs for the container, slides, and indicators
  const slidesContainerRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const [curIndex, setCurIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  useGSAP(() => {
    const container = slidesContainerRef.current;
    const slides = slidesRef.current?.querySelectorAll(".slide");

    if (container && slides) {
      const slideWidth = container.offsetWidth / slidesPerView;

      // Create draggable functionality
      Draggable.create(slidesRef.current, {
        type: "x",
        edgeResistance: 0.85,
        inertia: true,
        bounds: {
          minX: -(slideWidth * (slides.length - slidesPerView)),
          maxX: 0,
        },
        onDragEnd: function () {
          const index = Math.round(-this.x / slideWidth);
          moveTo(index); // Call moveTo on drag end
        },
      });
    }

    return () => Draggable.get(slidesRef.current)?.kill(); // Cleanup
  }, [slidesRef.current]);

  // Function to move to a specific slide
  const moveTo = (index: number) => {
    const container = slidesContainerRef.current;
    if (container && slidesRef.current) {
      const slideWidth = container.offsetWidth / slidesPerView;
      gsap.to(slidesRef.current, {
        x: `-${slideWidth * index}px`,
        duration: 0.5,
      });
      setCurIndex(index); // Update current index
    }
  };

  return (
    <div
      ref={slidesContainerRef}
      className="flex w-full flex-col gap-10 overflow-hidden"
    >
      <MouseCursorComponent slider>
        {/* Slides */}
        <div ref={slidesRef} className="flex items-stretch">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={`slide flex w-full flex-shrink-0 ${!padding && "pr-10"}`}
              style={{ width: `${100 / slidesPerView}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </MouseCursorComponent>

      {/* Indicators */}
      <div className="flex justify-center gap-10">
        <div className="indicators flex items-center gap-3">
          {Array.from({ length: totalSlides - slidesPerView + 1 }).map(
            (_, index) => (
              <div
                key={index}
                onClick={() => moveTo(index)}
                className={`indicator h-[7px] w-[7px] rounded-full transition-all duration-300 ${
                  index === curIndex ? "w-[22px] bg-gray-800" : "bg-gray-400"
                } cursor-pointer`}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
