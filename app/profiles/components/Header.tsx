import MouseCursorComponent from "@/components/MouseCursorComponent";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="fixed inset-0 top-0 z-50 flex h-20 w-full items-center justify-between px-10 mix-blend-difference">
      <MouseCursorComponent className="relative w-full">
        <Image src="/logo-light-1.svg" alt="logo" width={95} height={41} />
      </MouseCursorComponent>

      <MouseCursorComponent className="flex w-full items-center justify-end gap-3 text-[18px] text-white">
        <div>Menu</div>
        <Image
          src={"/hamburger_icon_light.svg"}
          alt="menu"
          width={35}
          height={35}
        />
      </MouseCursorComponent>
    </div>
  );
}
