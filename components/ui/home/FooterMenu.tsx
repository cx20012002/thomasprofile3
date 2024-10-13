"use client";
import MouseCursorComponent from "@/components/MouseCursorComponent";
import PopupModal from "@/components/Modal";
import { ArrowRight } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import Link from "next/link";

const FooterMenu = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [menuExpended, setMenuExpended] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [dropdownHeight, setDropdownHeight] = useState<string | number>(0);

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
      setMenuExpended(false);
    }, 300);
  };

  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(menuExpended ? dropdownRef.current.scrollHeight : 0);
    }
  }, [menuExpended]);

  return (
    <div className="fixed bottom-3 left-1/2 z-50 hidden h-10 w-fit -translate-x-1/2 items-center justify-center text-white md:flex">
      {/* Footer Menu */}
      <div className="flex w-[378px] items-center justify-between rounded-[50px] bg-neutral-900 bg-opacity-50 px-8 py-3 text-[9px] uppercase backdrop-blur-md">
        <MouseCursorComponent
          onMouseEnter={openPopup}
          onMouseLeave={closePopup}
        >
          TS
        </MouseCursorComponent>
        <MouseCursorComponent>About</MouseCursorComponent>
        <MouseCursorComponent>
          <Link href="/profiles">Work</Link>
        </MouseCursorComponent>
        <MouseCursorComponent>Awards</MouseCursorComponent>
        <MouseCursorComponent>
          <a href="#reviews">Reviews</a>
        </MouseCursorComponent>
        <MouseCursorComponent className="flex items-center justify-center gap-1">
          Blog{" "}
          <ArrowRight className="-rotate-45" strokeWidth={1} size={"1.3em"} />
        </MouseCursorComponent>
      </div>

      {/* Popup Menu */}
      <PopupModal
        isOpen={isPopup}
        onClose={closePopup}
        onOpen={openPopup}
        duration={300}
        className="absolute -bottom-3 left-5 flex min-w-[150px] flex-col overflow-hidden rounded-2xl bg-white text-[9px] uppercase text-black"
      >
        <MouseCursorComponent className="p-[12px] hover:bg-neutral-200">
          About
        </MouseCursorComponent>
        <MouseCursorComponent className="p-[12px] hover:bg-neutral-200">
          <Link href="/profiles">Work</Link>
        </MouseCursorComponent>
        <div
          ref={dropdownRef}
          style={{
            maxHeight: dropdownHeight,
            opacity: menuExpended ? 1 : 0,
            transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
            overflow: "hidden",
          }}
        >
          <MouseCursorComponent className="p-[12px] hover:bg-neutral-200">
            Brand Agency
          </MouseCursorComponent>
          <MouseCursorComponent className="p-[12px] hover:bg-neutral-200">
            Horizontal Layout
          </MouseCursorComponent>
        </div>
        {!menuExpended && (
          <div
            onMouseEnter={() => setMenuExpended(true)}
            className="flex items-center justify-center"
          >
            <VscTriangleDown size={20} />
          </div>
        )}
      </PopupModal>
    </div>
  );
};

export default FooterMenu;
