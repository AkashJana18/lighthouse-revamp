import { Button } from "./ui/MovingBorders";

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
      title: "Decentralized Storage Solutions for Your Files",
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
    <div className="py-20 w-full">
      <h1 className="heading">
        My work<span className="text-purple"> experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {KeyFeatures.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
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
