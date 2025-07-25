"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ecosystemData from "@/data/index";
import { IconBrandTelegram, IconBrandX, IconWorld } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { MagicCard } from "./ui/MagicCard";
type EcosystemItem = {
  name: string;
  description: string;
  icon: string;
  image?: string;
  tags: string[];
  website?: string | null;
  telegram?: string | null;
  twitter?: string | null;
};

// Your data array

const CATEGORY_MAP: Record<string, string> = {
  ai: "Artificial Intelligence (AI)",
  depin: "DePIN",
  nfts: "NFTs",
  "social-gaming": "Social / Gaming",
  "data-availability": "Data Availability (DA)",
  layer: "L1 / L2",
};

const Ecosystem = () => {
  const renderContent = (category: string) => {
    const tag = CATEGORY_MAP[category];
    const items = ecosystemData.filter((item) => item.tags.includes(tag));

    const featured = items.find((i) => i.image);
    const rest = items.filter((i) => i !== featured);

    return (
      <div className="space-y-10 mt-8">
        {/* Featured Banner */}
        {featured && (
          <MagicCard className="rounded-xl">
            <div className="w-full p-6 flex flex-col lg:flex-row items-center gap-6">
              <div className="w-full lg:w-1/2 relative aspect-video">
                <Image
                  src={featured.image!}
                  alt={featured.name}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <img src={featured.icon} alt={featured.name} width={400} />
                </div>
                <p className="text-md text-slate-300 m-4">
                  {featured.description}
                </p>
                <div className="flex gap-4 text-xl">
                  {featured.website && (
                    <Link
                      href={featured.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconWorld size={40} />
                    </Link>
                  )}
                  {featured.telegram && (
                    <Link
                      href={featured.telegram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconBrandTelegram size={40} />
                    </Link>
                  )}
                  {featured.twitter && (
                    <Link
                      href={featured.twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconBrandX size={40} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </MagicCard>
        )}

        {/* Grid Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rest.map((item, idx) => (
            <MagicCard
              key={idx}
              className="rounded-xl p-10 transition h-full flex flex-col justify-between"
            >
              <div>
                <img src={item.icon} alt={item.name} width={250} className="mb-4"/>
                <p className="text-sm text-slate-300 mb-4">
                  {item.description}
                </p>
                <div className="flex gap-4 text-lg mt-auto">
                  {item.website && (
                    <Link href={item.website} target="_blank" rel="noreferrer">
                      <IconWorld size={20} />
                    </Link>
                  )}
                  {item.telegram && (
                    <Link href={item.telegram} target="_blank" rel="noreferrer">
                      <IconBrandTelegram size={20} />
                    </Link>
                  )}
                  {item.twitter && (
                    <Link href={item.twitter} target="_blank" rel="noreferrer">
                      <IconBrandX size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto mb-20 py-10 px-20">
      <h1 className="font-semibold text-center text-4xl text-white m-6">
        Explore Our Lighthouse Ecosystem
      </h1>
      <Tabs
        defaultValue="ai"
        className="max-w-7xl flex flex-col justify-center items-center"
      >
        <TabsList>
          <TabsTrigger value="ai">Artificial Intelligence (AI)</TabsTrigger>
          <TabsTrigger value="depin">DePIN</TabsTrigger>
          <TabsTrigger value="nfts">NFTs</TabsTrigger>
          <TabsTrigger value="social-gaming">Social / Gaming</TabsTrigger>
          <TabsTrigger value="data-availability">
            Data Availability (DA)
          </TabsTrigger>
          <TabsTrigger value="layer">L1 / L2</TabsTrigger>
        </TabsList>

        {Object.keys(CATEGORY_MAP).map((key) => (
          <TabsContent key={key} value={key}>
            {renderContent(key)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Ecosystem;
