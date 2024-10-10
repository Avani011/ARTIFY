import Banner from "@/components/landing/banner";
import AboutSection from "@/components/landing/sections/about-section";
import CategoriesSection from "@/components/landing/sections/categories-section";
import RankSection from "@/components/landing/sections/rank-section";
import StepsSection from "@/components/landing/sections/steps-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Banner />
      <AboutSection />
      <RankSection />
      <CategoriesSection />
      <StepsSection />
    </div>
  );
}
