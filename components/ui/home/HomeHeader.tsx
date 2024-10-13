import MouseCursorComponent from "@/components/MouseCursorComponent";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <div className="absolute top-0 flex h-10 w-full items-center justify-between px-5 py-14 lg:px-10">
      <MouseCursorComponent>
        <h2 className="text-3xl font-medium tracking-tighter">tc</h2>
      </MouseCursorComponent>
      <div className="flex items-center gap-5 text-[16px]">
        <p className="text-[15px]">Available January 2024</p>
        <MouseCursorComponent className="font-medium">
          <Link href="/contact" className="flex items-center gap-2">
            Let's Connect
            <ArrowRight className="-rotate-45" strokeWidth={1} size={"2em"} />
          </Link>
        </MouseCursorComponent>
      </div>
    </div>
  );
};

export default HomeHeader;
