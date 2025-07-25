import Image from "next/image";
import { BorderBeam } from "./ui/BorderBeam";
import AnimatedButton from "./ui/Button";
import { MagicCard } from "./ui/MagicCard";
import { AnimatedGroup } from "./ui/animated-group";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};
const sections = [
  {
    title: "Secure and Simplify Your File Storage and Sharing",
    subtitle: "WEB APPLICATION",
    description:
      "Log in to our web application and access your files with ease. Our app provides a user-friendly interface to store, retrieve, and share files on popular decentralized storage networks: IPFS and Filecoin.",
    buttonText: "Open App",
    image: "/suitsIcon/web_app.png",
    features: [
      {
        title: "Seamless Access",
        desc: "Easily login via your favourite social login or wallets supported across multiple networks",
      },
      {
        title: "Advanced Sharing Capabilities",
        desc: 'dont use cryptocurrency throughout the website. Better use "tokens" or "assets"',
      },
      {
        title: "Diverse Payment Options",
        desc: "Pay via credit card, debit card or popular tokens onchain via our flexible annual or lifetime plans",
      },
    ],
  },
  {
    title:
      "Integrate Lighthouse into your project with our popular development tools",
    subtitle: "SDK & CLI",
    description:
      "Developers can easily integrate our SDK & CLI into their application pipeline in language of their choice",
    buttonText: "Explore documentation",
    image: "/suitsIcon/sdk_cli.png",
    features: [
      {
        title: "Lighthouse SDK",
        desc: "A developer-friendly toolkit that offers libraries, APIs, and extensive documentation to seamlessly integrate Lighthouse",
      },
      {
        title: "Lighthouse CLI",
        desc: "CLI that provides developers with full control over file management directly from your terminal with simple commands.",
      },
      {
        title: "Cross-Platform Flexibility",
        desc: "Whether you’re building web apps, mobile applications, or desktop solutions, the SDK and CLI ensure compatibility across various platforms",
      },
    ],
  },
  {
    title: "Secure Your Data with Advanced Encryption and Access Controls",
    subtitle: "Encryption SDK & Token Gating",
    description:
      "Use our encryption sdk to easily store private files and token gate them with onchain NFT, Token Ownership and Much more",
    buttonText: "Learn More",
    image: "/suitsIcon/data_daos.png",
    features: [
      {
        title: "Threshold Encryption",
        desc: "Protect your data with Lighthouse Kavach, utilizing top-tier encryption techniques such as BLS Threshold Cryptography to ensure maximum security.",
      },
      {
        title: "Token Gating",
        desc: "Implement access control and token gating using signatures from EVM, Solana, Cosmos, Passkeys and zkTLS",
      },
      {
        title: "Multiple Networks Supported",
        desc: "Easily manage access permissions and authenticate user identities using a variety of wallets and networks.",
      },
    ],
  },
];

export default function DataEconomy() {
  return (
    <div className="text-white space-y-16 py-20 px-6 md:px-20">
      <h1 className="font-semibold text-center text-4xl text-white">
        Empowering the Data Economy
      </h1>

      {sections.map((section, idx) => (
        <div key={idx} className="max-w-7xl mx-auto">
          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <h3 className="text-purple-400 font-semibold mb-2">
                {section.subtitle}
              </h3>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {section.title}
              </h2>
              <p className="mb-6 text-gray-300">{section.description}</p>
              <div className="scale-80">
                <AnimatedButton
                  variant="secondary"
                  title={section.buttonText}
                />
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
              >
                <div className="relative -mr-56 overflow-hidden px-2 sm:mr-0 sm:mt-8 md:mt-12">
                  <div
                    aria-hidden
                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                  />
                  <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={500}
                      height={300}
                      className="rounded-lg shadow-xl"
                    />

                    <BorderBeam
                      duration={6}
                      delay={3}
                      size={400}
                      borderWidth={2}
                      className="from-transparent via-yellow-200 to-transparent"
                    />
                  </div>
                </div>
              </AnimatedGroup>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {section.features.map((f, i) => (
              <MagicCard key={i} className="p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </MagicCard>
            ))}
          </div>
          <div className="border-b  h-px border-slate-500/50 w-[80%] mx-auto mt-10"></div>
        </div>
      ))}
    </div>
  );
}
