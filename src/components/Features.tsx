"use client";
import { Button } from "@/components/ui/MovingBorders";

const Features = () => {
  const KeyFeatures = [
    {
      thumbnail: "/featureIcon/feature_6.svg",
      id: 6,
      title: "Perpetual Storage to preserve your data",
      desc: `Embrace perpetual storage with IPFS and Filecoin's advanced services.`,
    },
    {
      thumbnail: "/featureIcon/feature_5.svg",
      id: 5,
      title: "Decentralized Storage Solutions",
      desc: `Harness the power of IPFS and Filecoin to securely store your files on a decentralized network.`,
    },
    {
      thumbnail: "/featureIcon/feature_1.svg",
      id: 1,
      title: "Encryption & Access control functionality",
      desc: "Keep your data safe and with token gated access on a public network.",
    },
    {
      thumbnail: "/featureIcon/feature_4.svg",
      id: 4,
      title: "Dedicated IPFS gateways for fast retrievals",
      desc: "Experience lightning-fast retrievals with our dedicated IPFS Gateways.",
    },
    {
      thumbnail: "/featureIcon/feature_3.svg",
      id: 3,
      title: "Decentralized image resizing",
      desc: "Save bandwidth, optimize with blockchain-powered solutions seamlessly  without sacrificing image quality.",
    },
    {
      thumbnail: "/featureIcon/feature_2.svg",
      id: 2,
      title: "High-Speed IPFS Video Gateway",
      desc: "Enjoy 4k video streaming at lightning speed with our decentralized storage and dedicated IPFS gateway.",
    },
  ];

  return (
    <div className="p-10 m-10" id="features">
      <h1 className="font-semibold text-center text-4xl text-white">
        Why Choose Lighthouse &#63;
      </h1>
      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {KeyFeatures.map((feature, index) => (
          <Button
            key={index}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000 + 10000)}
            className="flex-1 text-black dark:text-white shadow-drop-lg"
          >
            <div className="flex relative flex-col justify-center items-center gap-1 p-4">
              <div className="absolute top-0 bg-purple-200 rounded-full blur-2xl w-24 h-24 z-1"></div>
              <img
                src={feature.thumbnail}
                alt={feature.thumbnail}
                className="w-24 h-24 z-2"
              />
              <div className="lg:ms-5">
                <h1 className=" text-xl md:text-2xl font-bold">
                  {feature.title}
                </h1>
                <p className="text-start text-slate-300 mt-3 font-semibold">
                  {feature.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Features;
