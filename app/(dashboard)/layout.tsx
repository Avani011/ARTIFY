"use client";

import { useAuth } from "@/context/auth-provider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import blob from "@/public/svg/blob.svg";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

export default function DashboardLayout({ children }: ILayout) {
  const router = useRouter();
  const { isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    if (!isConnected) return router.push("/");
  }, [isConnected, router]);

  return (
    <div>
      <Image
        src={blob}
        alt="banner"
        width={1000}
        height={1000}
        className="w-[1000px] h-[1000px] fixed top-1/2 -left-[30%] -z-10 opacity-80 select-none"
      />
      <Image
        src={blob}
        alt="banner"
        width={1000}
        height={1000}
        className="w-[1000px] h-[1000px] fixed -top-[10%] -right-[20%] -z-10 opacity-80 select-none"
      />
      {children}
    </div>
  );
}
