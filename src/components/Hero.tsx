import StatBox from "./Statbox";
import AnimatedButton from "./ui/Button";
import { GradientBackground } from "./ui/NoiseGradient";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="relative z-20 flex flex-col items-center">
        <div className="text-center space-y-4 max-w-4xl">
          <h1
            className="md:text-7xl text-3xl mx-auto font-jost font-bold mt-20"
          >
            Store Your Data Permanently & Securely
          </h1>
          <p className="md:text-lg text-sm md:max-w-2xl max-w-xs mx-auto">
          Lighthouse offers permanent, decentralized storage powered by Filecoin.<br/>
          Secure, scalable, and ideal for individuals, developers, and enterprises.
          </p>
        </div>
        <div className="flex justify-center items-center my-6 gap-10">

        <AnimatedButton title="Explore Docs" variant="secondary" />
        <AnimatedButton title="Try For Free" variant="primary" />
        </div>
        <StatBox />
      </div>

      <GradientBackground
        className="rounded-b-3xl overflow-hidden"
        gradientOrigin="bottom-middle"
        noiseIntensity={0.1}
        noisePatternSize={10}
      />
    </div>
  );
}
