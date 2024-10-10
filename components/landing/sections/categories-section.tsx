import Wrapper from "@/components/shared/wrapper";

const categories = [
  "Animation",
  "Collectibles",
  "Art",
  "Photography",
  "Music",
  "Trading Cards",
  "Domain Name",
  "Sports",
  "Virtual Words",
];

export default function CategoriesSection() {
  return (
    <div className="flex flex-1 bg-gradient-to-t">
      <Wrapper className="flex flex-col items-center text-center py-16 md:py-20 relative">
        <div className="relative w-full items-center justify-center flex flex-col mt-20 mb-4">
          <span className="font-black text-primary absolute -top-[160px] text-[200px] opacity-[0.25] select-none">
            EXPLORE
          </span>
          <h1 className="max-w-[1030px] w-full text-[64px] font-black leading-[72px] relative">
            Browse All NFT&apos;s Categories
          </h1>
        </div>
        <div className="flex items-center gap-3 mb-20">
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]"></span>
          <span className="h-3 w-16 rounded-full bg-gradient-to-r from-[#B2EBF2] via-[#D1C4E9] to-[#F8BBD0]"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {categories.map((cat) => (
            <div key={cat} className="w-full rounded-[40px] bg-black">
              <div className="w-full aspect-video rounded-[inherit] bg-gradient-to-right from-[#00000005] via-[#1399CF] to-[#1399CF]"></div>
              <div className="px-4 py-6 text-center">
                <p className="text-lg font-semibold">{cat}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
