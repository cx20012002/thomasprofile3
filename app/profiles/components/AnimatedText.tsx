import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

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
    if (titleRef.current) {
      const textSpans = titleRef.current.querySelectorAll("span");

      gsap.to(textSpans, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center",
          end: "bottom 55%",
          scrub: 1,
        },
        duration: 0.5,
        opacity: 1,
        stagger: 0.1,
      });
    }

    if (contentRef.current) {
      gsap.set(contentRef.current, { opacity: 0 });
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          end: "bottom center",
          scrub: 1,
        },
        opacity: 1,
      });
    }
  }, []);

  return (
    <div
      ref={titleRef}
      className={`flex w-full flex-col gap-10 subtitle relative`}
    >
      <div>
        {title &&
          title.split(" ").map((word, index) => (
            <span key={index} className="inline-block opacity-30">
              {word}&nbsp;
            </span>
          ))}
      </div>

      {children && (
        <div
          ref={contentRef}
          className="flex flex-col gap-5 leading-[0.9em] opacity-0"
        >
          {children}
        </div>
      )}
    </div>
  );
}
