import MouseCursorComponent from "@/components/MouseCursorComponent";
import { ArrowRight } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 flex h-10 w-full items-center justify-between px-10 py-14">
      <MouseCursorComponent>
        <h2 className="text-3xl font-medium tracking-tighter">tc</h2>
      </MouseCursorComponent>
      <div className="flex items-center gap-5 text-[16px]">
        <p className="text-[15px]">Available January 2024</p>
        <MouseCursorComponent className="flex items-center gap-2 font-medium">
          Let's Connect{" "}
          <ArrowRight className="-rotate-45" strokeWidth={1} size={"2em"} />
        </MouseCursorComponent>
      </div>
    </div>
  );
};

export default Header;
