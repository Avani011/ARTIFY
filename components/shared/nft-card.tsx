"use client";

import { shortenAddress } from "@/lib/utils";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import Image from "next/image";

export default function NFTCard({
  nftOwner,
  img,
}: {
  nftOwner?: string;
  img?: string;
}) {
  const { address } = useWeb3ModalAccount();

  return (
    <div className="bg-primary/30 rounded-2xl h-[459px] w-[357px] flex justify-end flex-col relative overflow-hidden">
      <div className="w-full h-full rounded-[inherit] overflow-hidden">
        <Image
          src={img ? img : "/img/nft2.jpeg"}
          alt="gen"
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-end items-start text-left gap-2 p-4 w-full h-full bg-gradient-to-b from-transparent via-black/40 to-primary/60 absolute top-0 left-0">
        <p className="text-sm md:text-base font-medium line-clamp-4 max-w-[290px] w-full">
          A developer named Ekarika holding a cup filled with Solidity bugs
          while being bullied by a lady named Kemi
        </p>
        <h2 className="text-base md:text-lg font-bold">
          {shortenAddress(`${address !== undefined ? address : nftOwner}`)}
        </h2>
      </div>
    </div>
  );
}
