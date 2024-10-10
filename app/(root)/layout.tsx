"use client";

import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    if (isConnected) return router.push("/dashboard");
  }, [isConnected, router]);

  return children;
}
