import MouseCursorComponent from "@/components/MouseCursorComponent";
import { Profile } from "@/lib/interface";
import { urlFor } from "@/sanity/lib/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NextProject({ profile }: { profile: Profile }) {
  return (
    <div className="flex w-full flex-col gap-10 bg-black pt-0 text-white md:pt-20">
      <div className="px-5 md:px-10">Next Project</div>
      <div
        className="relative flex h-[400px] w-full items-end bg-[url('/h-1.webp')] bg-cover bg-center px-5 py-20 md:h-[80vh] md:px-10"
        style={{
          backgroundImage: `url(${profile.featureImage ? urlFor(profile.featureImage).url() : "/h-1.webp"})`,
        }}
      >
        {/* Title */}
        <div className="sticky bottom-[80px] z-10 flex flex-col">
          <MouseCursorComponent>
            <Link href={`/profiles/${profile.slug.current}`}>
              <h2 className="flex items-center text-[42px]">
                {profile.title}{" "}
                <ArrowRight
                  className="-rotate-45"
                  strokeWidth={1}
                  size={"1.7em"}
                />
              </h2>
            </Link>
          </MouseCursorComponent>
          <h3 className="text-[16px]">{profile.summary}</h3>
        </div>
        {/* Background Gradient */}
        <div className="absolute bottom-0 left-0 h-[50vh] w-full bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </div>
  );
}
