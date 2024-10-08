import MouseCursorComponent from "@/components/MouseCursorComponent";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-32 p-10">
      <div>
        <Image
          src={"/logo-symbol.svg"}
          alt="footer logo"
          width={80}
          height={80}
        />
      </div>
      <div className="flex justify-between">
        <div>
          <MouseCursorComponent className="bg-[url('/footer_corner.svg')] bg-[position:100%_20px] bg-no-repeat pr-[60px] text-[105px] font-light">
            Let's talk
          </MouseCursorComponent>
        </div>
        <div className="flex flex-col gap-1 text-right text-[14px]">
          <MouseCursorComponent>Instagram</MouseCursorComponent>
          <MouseCursorComponent>Behance</MouseCursorComponent>
          <MouseCursorComponent>Linkedin</MouseCursorComponent>
          <MouseCursorComponent>Twitter</MouseCursorComponent>
        </div>
      </div>
      <div className="flex justify-between border-y-[1px] border-black py-5 text-xl">
        <MouseCursorComponent>Agency</MouseCursorComponent>
        <MouseCursorComponent>Work</MouseCursorComponent>
        <MouseCursorComponent>Services</MouseCursorComponent>
        <MouseCursorComponent>Contact</MouseCursorComponent>
      </div>
      <div className="flex items-end justify-between py-8 text-[14px]">
        <MouseCursorComponent>
          ©2024. All rights reserved.
        </MouseCursorComponent>
        <MouseCursorComponent className="flex flex-col items-center justify-center gap-5">
          <div className="flex divide-x-[1px] divide-neutral-600">
            <div className="px-5">1-800-356-8933</div>
            <div className="px-5">cx20012002@gmail.com</div>
          </div>
          <div>30A Devonshire Rd, Unsworth Heights</div>
        </MouseCursorComponent>
        <MouseCursorComponent>Privacy Policy</MouseCursorComponent>
      </div>
    </div>
  );
}
