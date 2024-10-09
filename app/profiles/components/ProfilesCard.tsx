import MouseCursorComponent from "@/components/MouseCursorComponent";
import Image from "next/image";

interface CardProps {
  title?: string;
  smallTitle?: string;
  content?: string;
  isLarge?: boolean;
  bgImage?: string;
}

export default function ProfilesCard({
  title = "title",
  smallTitle = "small title",
  content = "content",
  isLarge = true,
  bgImage = "/h-2.webp",
}: CardProps) {
  return (
    <div
      className={`relative col-span-1 flex h-[450px] md:h-[680px] flex-col justify-between bg-cover bg-center p-5 text-white ${isLarge && "md:col-span-2"}`}
      style={{ backgroundImage: `url("${bgImage}")` }}
    >
      <div className="z-10 flex w-full justify-between">
        <small className="mt-5 text-[9px] font-medium uppercase tracking-wide">
          {smallTitle}
        </small>
        <MouseCursorComponent>
          <Image
            src={"/corner_white.svg"}
            width={40}
            height={40}
            alt="corner"
          />
        </MouseCursorComponent>
      </div>
      <div className="z-10 flex w-full flex-col gap-3">
        <MouseCursorComponent>
          <h2 className="text-2xl font-medium">{title}</h2>
        </MouseCursorComponent>
        <p className="text-sm font-medium">{content}</p>
      </div>
      <div className="absolute inset-0 h-full w-full bg-black/10" />
    </div>
  );
}
