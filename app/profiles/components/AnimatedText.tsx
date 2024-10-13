import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  title: string;
  children?: React.ReactNode;
}

export default function AnimatedText({
  title = "Need a title",
  children,
}: AnimatedTextProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const textSpans = titleRef.current?.querySelectorAll("span");

    const titleAnimation = textSpans ? gsap.to(textSpans, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top center",
        end: "bottom 55%",
        scrub: 1,
      },
      opacity: 1,
      stagger: 0.1,
    }) : null;

    const contentAnimation = contentRef.current ? gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          end: "bottom center",
          scrub: 1,
        },
        opacity: 1,
      }
    ) : null;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.set(textSpans, { opacity: 1 });
      gsap.set(contentRef.current, { opacity: 1 });
      titleAnimation?.scrollTrigger.disable();
      contentAnimation?.scrollTrigger.disable();
    });

    mm.add("(min-width: 768px)", () => {
      gsap.set(textSpans, { opacity: 0.3 });
      gsap.set(contentRef.current, { opacity: 0 });
      titleAnimation?.scrollTrigger.enable();
      contentAnimation?.scrollTrigger.enable();
      titleAnimation?.scrollTrigger.refresh();
      contentAnimation?.scrollTrigger.refresh();
    });

    return () => {
      titleAnimation?.scrollTrigger?.kill();
      contentAnimation?.scrollTrigger?.kill();
      mm.revert();
    };
  });

  return (
    <div
      ref={titleRef}
      className="md:subtitle relative flex flex-col w-full gap-5 text-3xl md:gap-10"
    >
      <div>
        {title.split(" ").map((word, index) => (
          <span key={index} className="opacity-1 inline-block md:opacity-30">
            {word}&nbsp;
          </span>
        ))}
      </div>
      {children && (
        <div ref={contentRef} className="flex flex-col gap-5 leading-[0.9em] md:opacity-0">
          {children}
        </div>
      )}
    </div>
  );
}
