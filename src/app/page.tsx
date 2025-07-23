import DataEconomy from "@/components/DataEcomomy";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Trusted from "@/components/Trusted";
import { NavbarDemo } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <NavbarDemo>
        <HeroSection />
        <Features />
        <Pricing />
        <Trusted />
        <DataEconomy />
        <FAQ />
        <Footer />
      </NavbarDemo>
    </>
  );
}
