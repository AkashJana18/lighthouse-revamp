import { ThemeSwitcher } from "@/components/ThemeToggle";


export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex justify-center items-center transition-all duration-300">
      Hello lighthouse
      <ThemeSwitcher />
    </div>
  );
}
