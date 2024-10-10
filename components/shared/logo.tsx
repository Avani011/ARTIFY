import { site } from "@/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({ path }: { path?: string }) {
  return (
    <Link href={path ? path : "/"} className="flex items-center gap-4">
      <Image
        src="/svg/logo.svg"
        alt="logo"
        width={56}
        height={56}
        priority
        className="object-contain w-12 md:w-14 h-12 md:h-14"
      />
      <p className="text-lg md:text-2xl font-medium uppercase">{site.name}</p>
    </Link>
  );
}
