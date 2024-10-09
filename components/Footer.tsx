import MouseCursorComponent from "@/components/MouseCursorComponent";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-24 flex flex-col gap-5 p-5 lg:mt-32 lg:gap-0 lg:p-10 lg:pb-5">
      <div className="w-[40px] lg:w-[80px]">
        <Image
          src={"/logo-symbol.svg"}
          alt="footer logo"
          width={80}
          height={80}
        />
      </div>
      <div className="flex justify-between">
        <div>
          <MouseCursorComponent className="bg-[url('/footer_corner.svg')] bg-[position:100%_20px] bg-no-repeat pr-[60px] text-[50px] font-light lg:text-[105px]">
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
      <div className="texl-lg flex justify-between border-y-[1px] border-black py-5 lg:text-xl">
        <MouseCursorComponent>Agency</MouseCursorComponent>
        <MouseCursorComponent>Work</MouseCursorComponent>
        <MouseCursorComponent>Services</MouseCursorComponent>
        <MouseCursorComponent>Contact</MouseCursorComponent>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 py-0 text-[14px] lg:flex-row lg:items-end lg:gap-0 lg:py-8 lg:pb-0">
        <MouseCursorComponent className="order-3 text-neutral-500 lg:order-1">
          ©2024. All rights reserved.
        </MouseCursorComponent>
        <MouseCursorComponent className="flex flex-col items-center justify-center gap-3 lg:order-2">
          <div className="flex divide-x-[1px] divide-neutral-600">
            <div className="px-5">1-800-356-8933</div>
            <div className="px-5">cx20012002@gmail.com</div>
          </div>
          <div>30A Devonshire Rd, Unsworth Heights</div>
        </MouseCursorComponent>
        <MouseCursorComponent className="order-1 lg:order-3">
          Privacy Policy
        </MouseCursorComponent>
      </div>
    </div>
  );
}
