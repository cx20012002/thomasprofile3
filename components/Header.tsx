"use client";

import PopupModal from "@/components/Modal";
import MouseCursorComponent from "@/components/MouseCursorComponent";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [isPopup, setIsPopup] = useState<boolean>(false);

  let closeTimeout;
  const openPopup = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    setIsPopup(true);
  };

  const closePopup = () => {
    closeTimeout = setTimeout(() => {
      setIsPopup(false);
    }, 300);
  };

  return (
    <>
      <div className="fixed inset-0 top-0 z-20 flex h-20 w-full items-center justify-between px-5 lg:px-10 mix-blend-difference">
        {/* Logo */}
        <MouseCursorComponent className="relative w-full">
          <Image src="/logo-light-1.svg" alt="logo" width={95} height={41} />
        </MouseCursorComponent>

        {/* Menu */}
        <MouseCursorComponent
          onClick={openPopup}
          className="relative flex w-full items-center justify-end gap-3 text-[18px] text-white"
        >
          <div>Menu</div>
          <Image
            src={"/hamburger_icon_light.svg"}
            alt="menu"
            width={35}
            height={35}
            className="mt-1"
          />
        </MouseCursorComponent>
      </div>

      {/* Popup Menu */}
      <PopupModal
        isOpen={isPopup}
        onOpen={openPopup}
        onClose={closePopup}
        onLeaveClose={false}
        className="w-min-[480px] fixed right-5 top-4 z-30 flex flex-col overflow-hidden rounded-3xl bg-white pt-12"
      >
        {/* Close Button */}
        <MouseCursorComponent
          onClick={() => setIsPopup(false)}
          isAbsolute
          className="absolute right-2 top-2"
        >
          <X absoluteStrokeWidth size={50} />
        </MouseCursorComponent>

        {/* Menu Items */}
        <div className="flex flex-col gap-5 px-10 pb-10 text-[28px]">
          <MouseCursorComponent>Home</MouseCursorComponent>
          <MouseCursorComponent>Work</MouseCursorComponent>
          <MouseCursorComponent>Services</MouseCursorComponent>
          <MouseCursorComponent>Studio</MouseCursorComponent>
          <MouseCursorComponent>Journal</MouseCursorComponent>
        </div>

        {/* Menu Footer */}
        <div className="flex justify-between border-t-[1px] border-black/20 px-10 py-7 font-medium">
          <div className="flex gap-10">
            <MouseCursorComponent>Contact</MouseCursorComponent>
            <MouseCursorComponent>Careers</MouseCursorComponent>
          </div>

          <MouseCursorComponent className="flex">
            Let's Talk{" "}
            <ArrowRight
              className="-mt-1 -rotate-45"
              strokeWidth={1}
              size={"2em"}
            />
          </MouseCursorComponent>
        </div>

        {/* Social Links */}
        <div className="flex gap-10 bg-[#e9e9e7] px-10 py-4 text-[14px] text-neutral-600">
          <MouseCursorComponent>Instagram</MouseCursorComponent>
          <MouseCursorComponent>Behance</MouseCursorComponent>
          <MouseCursorComponent>Linkedin</MouseCursorComponent>
          <MouseCursorComponent>Twitter</MouseCursorComponent>
        </div>
      </PopupModal>
    </>
  );
}
