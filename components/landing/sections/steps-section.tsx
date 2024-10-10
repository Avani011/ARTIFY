import Wrapper from "@/components/shared/wrapper";
import { actions } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CTA from "../cta";

export default function StepsSection() {
  return (
    <div className="flex flex-1">
      <Wrapper className="flex flex-col items-center text-center py-16 md:py-20 relative">
        <div className="relative w-full items-center justify-center flex flex-col mt-20 mb-4">
          <span className="font-black text-primary absolute -top-[160px] text-[200px] opacity-[0.25] select-none">
            SELL NFT
          </span>
          <h1 className="max-w-[1030px] w-full text-[64px] font-black leading-[72px] relative">
            3 simple steps to create and sell your NFTs
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]"></span>
          <span className="h-3 w-16 rounded-full bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]"></span>
        </div>

        <div className="flex items-center justify-between w-full gap-6 mt-32 mb-20">
          {actions.map((action) => (
            <>
              <Link
                href={`/${action.title.toLowerCase()}`}
                key={action.title}
                className="flex flex-col items-center max-w-[350px] w-full px-4 pb-12 rounded-2xl relative hover:shadow-xl transition-shadow duration-500">
                <div className="w-full h-full overflow-hidden absolute top-0 left-0 rounded-2xl">
                  <span
                    className={cn(
                      `w-[348px] h-[292px] rounded-full absolute -top-1/2 left-1/2 -translate-x-1/2 -z-10 blur-xl ${action.class}`
                    )}
                  />
                </div>
                <Image
                  src={action.img}
                  alt="/"
                  width={158}
                  height={165}
                  priority
                  className="mb-8 -mt-16 w-[158px] h-[165px] object-contain"
                />
                <h1 className="text-3xl font-extrabold mb-2">{action.title}</h1>
                <p className="text-base font-bold">{action.desc}</p>
              </Link>

              <div className="last:hidden flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-gradient-to-br from-[#D1C4E9] to-[#651FFF]"></span>
                <span className="h-4 w-20 rounded-full bg-gradient-to-br from-[#D1C4E9] to-[#651FFF]"></span>
              </div>
            </>
          ))}
        </div>

        <CTA />
      </Wrapper>
    </div>
  );
}
