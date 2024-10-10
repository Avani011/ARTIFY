"use client";

import { getDiamondContract, getProvider } from "@/connections";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useGenerateImageFromPrompt = () => {
  const router = useRouter();

  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();

  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<any>();

  const generateImage = async ({ prompt }: { prompt: string }) => {
    if (
      !process.env.NEXT_PUBLIC_SUBSCRIPTION_ID ||
      !process.env.NEXT_PUBLIC_OPENAI_API_KEY
    ) {
      toast.error("Missing required environment variables.");
      return;
    }

    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();
    const contract = getDiamondContract(signer);

    setIsGenerating(true);

    try {
      const tx = await contract.sendPromptRequest(
        Number(process.env.NEXT_PUBLIC_SUBSCRIPTION_ID),
        prompt.toString(),
        process.env.NEXT_PUBLIC_OPENAI_API_KEY.toString()
      );

      if (tx && tx.wait) {
        const receipt = await tx.wait();

        if (receipt.status) {
          // setResult(receipt);
          // console.log(receipt);
          router.push(`/profile/${address}`);
          toast.success("Image generated successfully");
          return result;
        } else {
          toast.error("OOPS!!! Something went wrong!!");
        }
      } else {
        throw new Error("Transaction object is invalid.");
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong", {
        description: error.message || error.reason,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (!walletProvider) return;
    const listenForEvents = async () => {
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();
      const contract = getDiamondContract(signer);

      contract.on("PromptImageUpdated", async (user, url) => {
        console.log("EVENT LOG");
        console.log(user, url);
      });

      return () => {
        contract.removeAllListeners("PromptImageUpdated");
      };
    };

    listenForEvents();
  }, [walletProvider]);

  return { generateImage, isGenerating, result };
};

export const useGetImageUrls = () => {
  const router = useRouter();

  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();

  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<any>();

  const gettingUrls = async () => {
    if (
      !process.env.NEXT_PUBLIC_SUBSCRIPTION_ID ||
      !process.env.NEXT_PUBLIC_OPENAI_API_KEY
    ) {
      toast.error("Missing required environment variables.");
      return;
    }

    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();
    const contract = getDiamondContract(signer);

    setIsGenerating(true);

    try {
      const tx = await contract.getImageUrls();

      return tx;
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong", {
        description: error.message || error.reason,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return { gettingUrls, isGenerating, result };
};
