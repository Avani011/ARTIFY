import { ethers } from "ethers";
import DIAMOND_CONTRACT_ABI from "@/json/abi.json";

export const getDiamondContract = (providerOrSigner: any) =>
  new ethers.Contract(
    process.env.NEXT_PUBLIC_DIAMOND_CONTRACT_ADDRESS as string,
    DIAMOND_CONTRACT_ABI,
    providerOrSigner
  );

export const getProvider = (provider: any) =>
  new ethers.BrowserProvider(provider);
