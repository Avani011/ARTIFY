"use client";

import NFTCard from "@/components/shared/nft-card";
import Wrapper from "@/components/shared/wrapper";
import { useGetImageUrls } from "@/hooks/contract";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const { address } = useWeb3ModalAccount();

  const { gettingUrls, isGenerating } = useGetImageUrls();

  const [generatedNFTs, setGeneratedNFTs] = useState<any>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await gettingUrls();

      if (!isGenerating && data) {
        const urls = {
          url1: data[0],
          url2: data[1],
          url3: data[2],
        };
        setGeneratedNFTs(urls);
        console.log(urls);
      }
    };

    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGenerating]);

  return (
    <div className="flex flex-1">
      <Wrapper className="flex flex-col items-center text-center py-16 md:py-20 relative">
        <div className="relative w-full items-center justify-center flex flex-col mt-10 mb-20">
          <span className="font-black text-primary absolute -top-[160px] text-[200px] opacity-[0.25] select-none">
            PROFILE
          </span>
          <h1 className="w-full text-5xl font-black leading-[49px] relative">
            Explore your collection of minted NFTs, showcasing your creativity
            and digital artistry.
          </h1>
        </div>

        <div className="my-10 flex flex-col items-start gap-4 w-full">
          <h1 className="text-xl md:text-2xl font-extrabold">All NFTs</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {generatedNFTs.length === 0 ? (
              <p>No NFT generated</p>
            ) : (
              // generatedNFTs.map((url: any, _key: any) => <NFTCard key={_key} />)
              <>Show the generated nfts</>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
