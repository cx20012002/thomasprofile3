import MouseCursorComponent from "@/components/MouseCursorComponent";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

interface CardProps {
  title?: string;
  smallTitle?: string;
  content?: string;
  isLarge?: boolean;
  bgImage?: string;
  slug?: string;
}

export default function ProfilesCard({
  title = "title",
  smallTitle = "small title",
  content = "content",
  isLarge = true,
  bgImage = "/h-2.webp",
  slug = "/",
}: CardProps) {
  return (
    <div
      className={classNames(
        "relative col-span-1 flex h-[450px] flex-col justify-between bg-cover bg-center p-5 text-white md:h-[680px]",
        { "md:col-span-2": isLarge },
      )}
      style={{ backgroundImage: `url("${bgImage}")` }}
      aria-label={`Card for ${title}`}
    >
      <header className="z-10 flex w-full justify-between">
        <small
          className="mt-5 text-[9px] font-medium uppercase tracking-wide"
          aria-label="Card small title"
        >
          {smallTitle}
        </small>
        <MouseCursorComponent>
          <Link href={`/profiles/${slug}`}>
            <Image
              src="/corner_white.svg"
              width={40}
              height={40}
              alt="decorative corner icon"
            />
          </Link>
        </MouseCursorComponent>
      </header>

      <section className="z-10 flex w-full flex-col gap-3">
        <MouseCursorComponent>
          <h2 className="text-2xl font-medium" aria-label="Card title">
            <Link href={`/profiles/${slug}`}>{title}</Link>
          </h2>
        </MouseCursorComponent>
        <p className="text-sm font-medium" aria-label="Card content">
          {content}
        </p>
      </section>

      <div
        className="absolute inset-0 h-full w-full bg-black/10"
        aria-hidden="true"
      />
    </div>
  );
}
