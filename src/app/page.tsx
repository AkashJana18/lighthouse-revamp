import Features from "@/components/Features";
import HeroSection from "@/components/Hero";
import { ThemeSwitcher } from "@/components/ThemeToggle";
import { NavbarDemo } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <NavbarDemo>
        <HeroSection />
        <Features />
      </NavbarDemo>
      <ThemeSwitcher />
    </>
  );
}
