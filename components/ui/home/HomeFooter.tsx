import React from "react";
import Image from "next/image";
import MouseCursorComponent from "@/components/MouseCursorComponent";
import Slider from "@/components/Slider";
import { slidesContent } from "@/lib/content";

const HomeFooter = () => {
  return (
    <div
      className={
        "group sticky top-0 flex h-screen w-full flex-col overflow-hidden bg-black"
      }
    >
      {/* upper part */}
      <div className="flex h-[60%] w-full flex-col gap-10 rounded-t-[50px] bg-[#e9e9e7] p-[50px]">
        <h3 className="mb-10 text-[42px]">Reviews</h3>
        <Slider slidesPerView={3}>
          {slidesContent.map((content, index) => (
            <div
              key={index}
              className="flex flex-col gap-10 text-xl font-semibold"
            >
              <Image src="/quote.svg" alt="Quote icon" width={50} height={50} />
              <p>{content.quote}</p>
              <span className="text-base font-semibold">
                ⎯ &nbsp;&nbsp;&nbsp;{content.author}
              </span>
            </div>
          ))}
        </Slider>
      </div>

      {/* lower part */}
      <div className="-mt-[50px] flex h-[60%] w-full justify-between rounded-t-[50px] bg-white p-[50px]">
        <div className="flex h-full w-full flex-col justify-between gap-10">
          <div>
            <h3 className="text-lg font-bold">Andréw Kaplan</h3>
            <p className="text-lg">
              Digital designer + Crative Frontend Developer
            </p>
          </div>

          <h4 className="min-w-0 max-w-full text-[clamp(120px,10vw,180px)] font-light leading-[clamp(120px,10vw,180px)]">
            Let's <br /> Connect
          </h4>

          <span>ⓒ2024 Based in Oslo, Norway</span>
        </div>

        <div className="flex h-full w-full flex-col items-end justify-between">
          <Image
            src="/footer_photo.webp"
            alt="Picture of the author"
            width={225}
            height={225}
            className="rounded-full"
          />
          <div className="flex w-full flex-col items-end justify-between gap-5">
            <MouseCursorComponent>View CV</MouseCursorComponent>
            <MouseCursorComponent>
              <a href="mailTo:cx20012002@gmail.com">cx20012002@gmail.com</a>
            </MouseCursorComponent>
            <div className="flex w-full items-center justify-end gap-5">
              <MouseCursorComponent>
                <a href="#">LinkedIn</a>
              </MouseCursorComponent>
              <MouseCursorComponent>
                <a href="#">Medium</a>
              </MouseCursorComponent>
              <MouseCursorComponent>
                <a href="#">Instagram</a>
              </MouseCursorComponent>
              <MouseCursorComponent>
                <a href="#">X</a>
              </MouseCursorComponent>
              <MouseCursorComponent>
                <a href="#">Behance</a>
              </MouseCursorComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
