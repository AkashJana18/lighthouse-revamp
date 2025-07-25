"use client";
import { motion } from 'framer-motion';
import React from 'react';

interface ClientLogo {
  icon: string;
  link: string;
  alt?: string; // Added optional alt text for images
}

const clientsLogo: ClientLogo[] = [
  {
    icon: "https://gateway.lighthouse.storage/ipfs/QmNiJJTjDs7r4KEbGo6JyxbS3WPR4LY1dgQL5oB1YVMiM1",
    link: "",
    alt: "Client 1"
  },
  {
    icon: "https://gateway.lighthouse.storage/ipfs/QmNwGq4kLHHrdCvW2EPH4e3nXvadHGpAnkjLA5ZoGUWB8R",
    link: "",
    alt: "Client 2"
  },
  {
    icon: "https://gateway.lighthouse.storage/ipfs/Qmf3QKQasp4U1FcafBk5rzt4craEjAjZXfpsYR6joBFCA4",
    link: "",
    alt: "Client 3"
  },
  {
    icon: "/client/mask.svg",
    link: "",
    alt: "Mask"
  },
  {
    icon: "/client/filemarket.svg",
    link: "",
    alt: "Filemarket"
  },
  {
    icon: "/client/filecoin.svg",
    link: "",
    alt: "Filecoin"
  },
  {
    icon: "/client/silence.svg",
    link: "",
    alt: "Silence"
  },
  {
    icon: "/client/nft_storage.svg",
    link: "",
    alt: "NFT Storage"
  },
  {
    icon: "/client/Aethir.svg",
    link: "",
    alt: "Aethir"
  },
  {
    icon: "/client/singularity.svg",
    link: "",
    alt: "Singularity"
  },
  {
    icon: "/client/dimante.svg",
    link: "",
    alt: "Dimante"
  },
];

const Trusted: React.FC = () => {
  return (
    <div className='py-10'>
      <h2 className="text-center font-semibold text-4xl text-white my-10">
        Trusted by
      </h2>
      <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10  before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10  after:content-['']">
        <motion.div
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: '-50%' }}
          className="flex flex-none gap-16 pr-16"
        >
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              {clientsLogo.map(({ icon, alt }, i) => (
                <div key={`${index}-${i}`} className="flex items-center">
                  <img
                    src={icon}
                    alt={alt || `Client logo ${i}`}         
                    className="h-8 w-auto flex-none object-contain"
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Trusted;