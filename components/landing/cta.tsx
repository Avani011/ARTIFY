import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <div className="w-full h-[480px] rounded-[100px] bg-gradient-to-b from-[#84FFFF] via-[#D3C4EE] to-[#F8BBD0] overflow-hidden flex justify-between">
      <Image src="/svg/cta.svg" alt="cta" width={765} height={517} priority />

      <div className="flex flex-col items-start p-6 text-black my-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black w-max">
          Start Creating NFT
        </h1>
        <p className="text-start text-lg font-semibold mt-2 mb-6">
          Dive into the world of digital art with ARTIFY. Whether you&apos;re an
          artist, a hobbyist, or a newcomer to the NFT space, our platform
          empowers you to bring your visions to life and step into the role of
          an NFT creator. Start your creative journey today and explore endless
          possibilities!
        </p>
        <Button size="lg" className="px-8 bg-black hover:bg-black/90">
          become a creator
        </Button>
      </div>
    </div>
  );
}
