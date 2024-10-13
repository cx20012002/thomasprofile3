import React, { useEffect, useState } from "react";
import Image from "next/image";
import MouseCursorComponent from "@/components/MouseCursorComponent";
import Slider from "@/components/Slider";
import { slidesContent } from "@/lib/content";

const HomeFooter = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="reviews" className="group sticky top-0 flex md:h-screen w-full flex-col overflow-hidden bg-black">
      {/* Upper Part */}
      <div className="flex h-[500px] w-full flex-col justify-center gap-5 md:gap-10 bg-[#e9e9e7] p-5 rounded-t-[50px] md:h-[60%] md:justify-normal md:p-12">
        <h3 className="text-2xl md:mb-10 md:text-4xl">Reviews</h3>
        <Slider slidesPerView={isMobile ? 1 : 3}>
          {slidesContent.map((content, index) => (
            <div key={index} className="flex flex-col gap-10 text-base md:text-xl font-semibold">
              <Image src="/quote.svg" alt="Quote icon" width={50} height={50} className="w-[30px] md:w-[50px]" />
              <p>{content.quote}</p>
              <span className="text-base font-semibold">⎯ &nbsp;&nbsp;&nbsp;{content.author}</span>
            </div>
          ))}
        </Slider>
      </div>

      {/* Lower Part */}
      <div className="-mt-[50px] flex h-fit md:h-[60%] w-full flex-col justify-between bg-white p-12 rounded-t-[50px] md:flex-row md:p-10">
        <div className="flex h-full w-full flex-col justify-center gap-5 md:justify-between md:gap-10">
          <div>
            <h3 className="text-lg font-bold">Andréw Kaplan</h3>
            <p className="text-lg">Digital Designer + Creative Frontend Developer</p>
          </div>
          <h4 className="text-[60px] font-light leading-none md:text-[clamp(120px,10vw,180px)]">
            Let's <br /> Connect
          </h4>
          <span>ⓒ2024 Based in Oslo, Norway</span>
        </div>

        <div className="flex h-full w-full flex-col justify-center gap-5 md:justify-between">
          <Image
            src="/footer_photo.webp"
            alt="Picture of the author"
            width={225}
            height={225}
            className="w-[150px] rounded-full md:w-[225px] md:self-end"
          />
          <div className="flex w-full flex-col gap-2 items-end">
            <MouseCursorComponent>View CV</MouseCursorComponent>
            <MouseCursorComponent>
              <a href="mailto:cx20012002@gmail.com">cx20012002@gmail.com</a>
            </MouseCursorComponent>
            <div className="flex w-full gap-5 justify-end">
              {["LinkedIn", "Medium", "Instagram", "X", "Behance"].map((platform, index) => (
                <MouseCursorComponent key={index}>
                  <a href="#">{platform}</a>
                </MouseCursorComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
