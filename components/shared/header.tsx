"use client";

import Image from "next/image";
import Wrapper from "@/components/shared/wrapper";
import Logo from "@/components/shared/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { IoSettingsSharp } from "react-icons/io5";
import { Separator } from "../ui/separator";
import { useAuth } from "@/context/auth-provider";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Menu } from "./menu";

const nav_links = ["about", "features", "develop", "community"];
const dashboard_links = ["home", "prompt", "upload", "enhance"];

export default function Header() {
  const pathname = usePathname();

  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();

  return (
    <div className="sticky top-0 left-0 w-full h-[100px] z-50 bg-background/20 backdrop-blur-2xl">
      <Wrapper className="flex items-center h-full w-full gap-7 md:gap-14">
        <Logo />

        <nav className="flex flex-1 items-center justify-between gap-8 h-12">
          <div className="flex flex-1 items-center gap-8 h-full">
            {isConnected
              ? dashboard_links.map((link) => (
                  <Link
                    href={`/${link === "home" ? "dashboard" : link}`}
                    className="relative group"
                    key={link}>
                    <p
                      className={cn(
                        "text-base md:text-lg font-medium capitalize group-hover:text-white transition-colors duration-300",
                        {
                          "text-white":
                            pathname ===
                            `/${link === "home" ? "dashboard" : link}`,
                        }
                      )}>
                      {link}
                    </p>
                    {pathname ===
                      `/${link === "home" ? "dashboard" : link}` && (
                      <Image
                        src="/svg/indicator.svg"
                        alt=""
                        width={33}
                        height={6}
                        className="w-[33px] h-[6px] absolute -bottom-4 left-1/2 -translate-x-1/2"
                      />
                    )}
                  </Link>
                ))
              : nav_links.map((link) => (
                  <Link href={`/${link}`} className="relative group" key={link}>
                    <p
                      className={cn(
                        "text-base md:text-lg font-medium capitalize group-hover:text-white transition-colors duration-300",
                        {
                          "text-white": pathname === `/${link}`,
                        }
                      )}>
                      {link}
                    </p>
                    {pathname === `/${link}` && (
                      <Image
                        src="/svg/indicator.svg"
                        alt=""
                        width={33}
                        height={6}
                        className="w-[33px] h-[6px] absolute -bottom-4 left-1/2 -translate-x-1/2"
                      />
                    )}
                  </Link>
                ))}
          </div>

          <div className="flex items-center gap-4 h-full">
            <w3m-button />
            {isConnected && (
              <div className="flex items-center gap-4 h-full">
                <Separator
                  orientation="vertical"
                  className="h-[calc(100%-40%)] opacity-40"
                />
                <Menu />
              </div>
            )}
          </div>
        </nav>
      </Wrapper>
    </div>
  );
}
