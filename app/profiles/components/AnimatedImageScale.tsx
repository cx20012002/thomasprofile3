import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedImageScale({ imageUrl }: { imageUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const animation = gsap.fromTo(
        imageRef.current,
        { scale: 1.15 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%",
            end: "bottom top",
            scrub: 1,
          },
          scale: 1,
        },
      );

      const mm = gsap.matchMedia();

      mm.add("(max-width: 768px)", () => {
        gsap.set(imageRef.current, { scale: 1 });
        animation.scrollTrigger?.disable();
        animation.scrollTrigger?.refresh();
      });

      mm.add("(min-width: 768px)", () => {
        gsap.set(imageRef.current, { scale: 1.15 });
        animation.scrollTrigger?.enable();
        animation.scrollTrigger?.refresh();
      });

      return () => {
        animation.scrollTrigger?.kill();
      };
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[30vh] w-full overflow-hidden lg:h-[50vh] xl:h-[85vh]"
    >
      <Image
        placeholder="blur"
        ref={imageRef}
        src={imageUrl}
        fill
        alt="Picture of the author"
        className="object-cover"
      />
    </div>
  );
}
