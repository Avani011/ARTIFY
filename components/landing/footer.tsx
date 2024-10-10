import React from "react";
import Wrapper from "../shared/wrapper";
import Logo from "../shared/logo";
import { site } from "@/config";
import Languages from "./languages";
import { Button } from "../ui/button";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      "Donec dignissim",
      "Curabitur egestas",
      "Nam posuere",
      "Aenean facilisis",
    ],
  },
  {
    title: "Services",
    links: [
      "Cras convallis",
      "Vestibulum faucibus",
      "Quisque lacinia purus",
      "Aliquam nec ex",
    ],
  },
  {
    title: "resources",
    links: [
      "Suspendisse porttitor",
      "Nam posuere",
      "Quisque lacinia purus",
      "Curabitur egestas",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full py-20 mt-20 backdrop-blur-3xl">
      <Wrapper className="flex gap-8 justify-between">
        <div className="flex flex-col gap-4 max-w-[385px] w-full">
          <Logo />

          <p className="text-sm md:text-base font-medium">{site.desc}</p>

          <p className="text-sm md:text-base font-normal mt-4">
            © {site.name} 2024
          </p>
        </div>

        {footerLinks.map((item) => (
          <div className="flex flex-col" key={item.title}>
            <h3 className="font-semibold text-lg md:text-xl mb-6 uppercase">
              {item.title}
            </h3>

            <ul className="flex flex-col gap-4">
              {item.links.map((link, _id) => (
                <Link
                  href="/"
                  className="text-base md:text-lg font-medium"
                  key={_id * Math.random()}>
                  {link}
                </Link>
              ))}
            </ul>
          </div>
        ))}

        <div className="max-w-[250px] w-full flex flex-col gap-6 py-8">
          <div className="flex items-center justify-between gap-4">
            <Button size="icon" variant="outline">
              <FaSquareFacebook className="w-6 h-6" />
            </Button>
            <Button size="icon" variant="outline">
              <FaLinkedin className="w-6 h-6" />
            </Button>
            <Button size="icon" variant="outline">
              <FaSquareXTwitter className="w-6 h-6" />
            </Button>
            <Button size="icon" variant="outline">
              <FaSquareInstagram className="w-6 h-6" />
            </Button>
          </div>
          <Languages />
        </div>
      </Wrapper>
    </footer>
  );
}
