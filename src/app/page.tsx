import { ThemeSwitcher } from "@/components/ThemeToggle";
import { Navbar } from "@/components/ui/navbar";


export default function Home() {
  const navItems = [
    { name: "Home", link: "#" },
    { name: "Blog", link: "#" },
    { name: "FAQ", link: "#faq" },
    { name: "Pricing", link: "#pricing" },
    { name: "Ecosystem", link: "#ecosystem" },
    { name: "Dcoumentation", link: "https://docs.lighthouse.storage/lighthouse-1/" },
    { name: "Contact us", link: "https://airtable.com/app0KP7ENgYlLDcJ0/shrPFC2TgojuOAYO4" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black flex justify-center items-center transition-all duration-300">
      <Navbar navItems={navItems}/>
      Hello lighthouse
      <ThemeSwitcher />
    </div>
  );
}
