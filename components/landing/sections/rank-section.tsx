import Wrapper from "@/components/shared/wrapper";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { shortenAddress } from "@/lib/utils";

export default function RankSection() {
  return (
    <div className="flex flex-1">
      <Wrapper className="flex flex-col items-center text-center py-16 md:py-20 relative">
        <div className="relative w-full items-center justify-center flex flex-col mt-20 mb-4">
          <span className="font-black text-primary absolute -top-[160px] text-[200px] opacity-[0.25] select-none">
            CREATORS
          </span>
          <h1 className="max-w-[1030px] w-full text-[64px] font-black leading-[72px] relative">
            Top rank NFT Creators
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]"></span>
          <span className="h-3 w-16 rounded-full bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]"></span>
        </div>

        <div className="mt-10 w-full">
          <CreatorsTable />
        </div>
      </Wrapper>
    </div>
  );
}

const creators = [
  {
    creator: {
      address: "0xC0E11e7674B3267175569e1c42b85bB5554aFEB4",
    },
    sales: "20",
    item: "900",
    volume: "1,040",
    change: "+40%",
  },
  {
    creator: {
      address: "0xC0E11e7674B3267175569e1c42b85bB5554aFEB4",
    },
    sales: "20",
    item: "900",
    volume: "1,040",
    change: "+40%",
  },
  {
    creator: {
      address: "0xC0E11e7674B3267175569e1c42b85bB5554aFEB4",
    },
    sales: "20",
    item: "900",
    volume: "1,040",
    change: "+40%",
  },
  {
    creator: {
      address: "0xC0E11e7674B3267175569e1c42b85bB5554aFEB4",
    },
    sales: "20",
    item: "900",
    volume: "1,040",
    change: "+40%",
  },
  {
    creator: {
      address: "0xC0E11e7674B3267175569e1c42b85bB5554aFEB4",
    },
    sales: "20",
    item: "900",
    volume: "1,040",
    change: "+40%",
  },
  {
    creator: {
      address: "0xC0E11e7674B3267175569e1c42b85bB5554aFEB4",
    },
    sales: "20",
    item: "900",
    volume: "1,040",
    change: "+40%",
  },
  {
    creator: {
      address: "0xC0E11e7674B3267175569e1c42b85bB5554aFEB4",
    },
    sales: "20",
    item: "900",
    volume: "1,040",
    change: "+40%",
  },
  {
    creator: {
      address: "0xC0E11e7674B3267175569e1c42b85bB5554aFEB4",
    },
    sales: "20",
    item: "900",
    volume: "1,040",
    change: "+40%",
  },
  {
    creator: {
      address: "0xC0E11e7674B3267175569e1c42b85bB5554aFEB4",
    },
    sales: "20",
    item: "900",
    volume: "1,040",
    change: "+40%",
  },
  {
    creator: {
      address: "0xC0E11e7674B3267175569e1c42b85bB5554aFEB4",
    },
    sales: "20",
    item: "900",
    volume: "1,040",
    change: "+40%",
  },
];

export function CreatorsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="text-foreground font-semibold text-lg w-[500px]">
            CREATOR
          </TableHead>
          <TableHead className="text-foreground font-semibold text-lg">
            SALES
          </TableHead>
          <TableHead className="text-foreground font-semibold text-lg">
            ITEM
          </TableHead>
          <TableHead className="text-foreground font-semibold text-lg">
            VOLUME
          </TableHead>
          <TableHead className="text-right text-foreground font-semibold text-lg">
            CHANGE
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {creators.map((creator, id) => (
          <TableRow key={id}>
            <TableCell className="py-4 text-foreground font-semibold text-lg flex items-center">
              <p className="text-lg font-semibold w-[40px]">#{id + 1}</p>
              <div className="w-6 h-6 rounded-full bg-secondary/30"></div>
              <p className="text-lg font-semibold ml-2">
                {shortenAddress(`${creator.creator.address}`)}
              </p>
              {/* {creator.sales} */}
            </TableCell>
            <TableCell className="py-4 text-foreground font-semibold text-lg text-left">
              {creator.sales}
            </TableCell>
            <TableCell className="py-4 text-foreground font-semibold text-lg text-left">
              {creator.item}
            </TableCell>
            <TableCell className="py-4 text-foreground font-semibold text-lg text-left">
              {creator.volume} ETH
            </TableCell>
            <TableCell className="py-4 text-right text-green-600 font-semibold text-lg">
              {creator.change}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
