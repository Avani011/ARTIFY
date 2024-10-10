import React from "react";
import Wrapper from "../shared/wrapper";
import { Button } from "../ui/button";
import Image from "next/image";

import blob from "@/public/svg/blob.svg";

export default function Banner() {
  return (
    <div className="relative w-full">
      <Image
        src={blob}
        alt="banner"
        width={1000}
        height={1000}
        className="w-[1000px] h-[1000px] fixed top-1/2 -left-[30%] -z-10 rotate-180 opacity-80"
      />
      <Wrapper className="flex items-center justify-between gap-6 md:gap-14 my-16 md:my-20 relative">
        <div className="flex flex-col gap-5">
          <h2 className="text-white md:text-3xl lg:text-4xl xl:text-5xl font-black">
            Unleash You Creativity with
          </h2>
          <h1 className="text- 4xl md:text-5xl lg:text-6xl xl:text-7xl font-black w-max text-transparent bg-clip-text bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]">
            AI-Driven Art
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl font-medium max-w-[620px] w-full mt-4 mb-6">
            Transform images into unique digital artworks with AI & AVAX C
            Chain.
          </p>

          <div className="flex items-center gap-4">
            <Button size="lg" className="w-[250px]">
              explore nfts
            </Button>
            <Button size="lg" variant="outline" className="w-[250px]">
              create
            </Button>
          </div>
        </div>

        <div className="flex-1 max-w-[600px] w-full relative">
          <Image
            src="/svg/banner.svg"
            alt="banner"
            width={300}
            height={400}
            className="w-full h-full"
          />

          <Image
            src={blob}
            alt="banner"
            width={1000}
            height={1000}
            className="min-w-[1000px] min-h-[1000px] fixed top-1/2 right-32 -translate-y-1/2 -z-10 opacity-80"
          />
        </div>
      </Wrapper>
    </div>
  );
}
