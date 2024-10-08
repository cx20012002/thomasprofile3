import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedImageScale({ imageUrl }: { imageUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 30%",
        end: "bottom top",
        scrub: 1,
      },
      scale: 1,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[30vh] w-full overflow-hidden bg-purple-100 lg:h-[50vh] xl:h-[85vh]"
    >
      <Image
        ref={imageRef}
        src={imageUrl}
        fill
        objectFit="cover"
        alt="Picture of the author"
        className="scale-[115%]"
      />
    </div>
  );
}
