import Features from "@/components/Features";
import HeroSection from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { ThemeSwitcher } from "@/components/ThemeToggle";
import Trusted from "@/components/Trusted";
import { NavbarDemo } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <NavbarDemo>
        <div>
          <HeroSection />
        </div>
        <Features />
        <Pricing />
        <Trusted />
      </NavbarDemo>
      <ThemeSwitcher />
    </>
  );
}
