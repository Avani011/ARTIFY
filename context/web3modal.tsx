"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import AuthProvider from "./auth-provider";
import { site } from "@/config";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "";

if (!projectId) throw new Error("project ID not found");

export const AVAX_CHAIN_ID: number = 43113;

const avaxChain = {
  chainId: AVAX_CHAIN_ID,
  name: "Avalanche Fuji testnet",
  currency: "AVAX",
  explorerUrl: "https://testnet.snowtrace.io",
  rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
};

const metadata: any = {
  name: site.name,
  description: site.desc,
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [avaxChain],
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
});

export function Web3Modal({ children }: ILayout) {
  return <AuthProvider>{children}</AuthProvider>;
}
