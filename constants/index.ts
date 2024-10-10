import prompt from "@/public/svg/prompt.svg";
import upload from "@/public/svg/upload.svg";
import enhance from "@/public/svg/enhance.svg";

export const actions = [
  {
    title: "Prompt",
    desc: "Enter a descriptive prompt to guide our AI in generating a unique piece of art, which you can then mint as an NFT directly from the platform.",
    img: prompt,
    class: "bg-[#651FFF]/30",
  },
  {
    title: "Upload",
    desc: "Upload your favorite image to instantly mint it as an NFT, preserving its originality and securing your ownership on the blockchain.",
    img: upload,
    class: "bg-[#006064]/80",
  },
  {
    title: "Enhance",
    desc: "Combine your creativity with AI power: upload an image and add a text prompt to guide the AI in enhancing your image before minting it as a unique NFT.",
    img: enhance,
    class: "bg-[#651FFF]/30",
  },
];
