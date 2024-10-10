import NFTCard from "@/components/shared/nft-card";
import Wrapper from "@/components/shared/wrapper";
import { site } from "@/config";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <div className="my-10 w-full">
      <Wrapper className="flex gap-6 items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black w-max">
            About{" "}
            <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]">
              {site.name}
            </span>
          </h1>
          <p className="mt-8 max-w-[564px] w-full text-base md:text-lg font-medium">
            <span className="uppercase">{site.name}</span> combines the power of
            AI with the creativity of our users to produce unique, one-of-a-kind
            digital artworks that you can mint as NFTs. Connect your wallet,
            upload an image, and watch as our AI transforms it into a piece of
            art that&apos;s entirely yours.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <Image
              src="/img/avalanche.png"
              alt="avalanche"
              width={181}
              height={69}
              className="w-[181px] h-[69px] object-contain"
            />
            <Image
              src="/img/chainlink.png"
              alt="chainlink"
              width={181}
              height={69}
              className="w-[181px] h-[60px] object-contain"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-5">
            <div className="h-[42.51px] mb-10 opacity-0 pointer-events-none select-none">
              <Image
                src="/img/dalle.png"
                alt="dalle"
                width={156}
                height={42.51}
              />
            </div>
            <NFTCard
              nftOwner="0xC0E11e7674B3267175569e1c42b85bB5554aFEB4"
              img="/img/nft2.jpeg"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <NFTCard
              nftOwner="0xC0E11e7674B3267175569e1c42b85bB5554aFEB4"
              img="/img/nft1.jpeg"
            />
            <div className="h-[43px] w-[156px] mt-10">
              <Image src="/img/dalle.png" alt="dalle" width={156} height={43} />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
