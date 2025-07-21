import { PricingCard } from "./ui/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  originalPrice: number;
  regularPrice: number;
  discountPercentage: number;
  validity: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant: "primary" | "secondary";
}

const Pricing = () => {
  const AnnualPlans: PricingPlan[] = [
    {
      id: "free",
      name: "Free",
      subtitle: "Start exploring with basic storage.",
      originalPrice: 0,
      regularPrice: 0,
      discountPercentage: 0,
      validity: "Monthly",
      features: [
        { text: "Total Storage: 5 GB", included: true },
        { text: "Bandwidth: 5 GB", included: true },
        { text: "IPFS", included: true },
        { text: "Filecoin", included: true },
        { text: "Encryption & Token Gating", included: false },
        { text: "IPNS", included: false },
        { text: "Migration Support", included: false },
      ],
      buttonText: "Try For Free",
      buttonVariant: "primary",
    },
    {
      id: "lite",
      name: "Lite",
      subtitle: "For regular users needing more space.",
      originalPrice: 0,
      regularPrice: 120,
      discountPercentage: 0,
      validity: "12 Months",
      features: [
        { text: "Total Storage: 200 GB", included: true },
        { text: "Bandwidth: 100 GB", included: true },
        { text: "IPFS", included: true },
        { text: "Filecoin", included: true },
        { text: "Encryption & Token Gating", included: false },
        { text: "IPNS", included: false },
        { text: "Migration Support", included: false },
      ],
      buttonText: "Get Started",
      buttonVariant: "primary",
    },
    {
      id: "premium",
      name: "Premium",
      subtitle: "For professionals with high storage needs.",
      originalPrice: 0,
      regularPrice: 504,
      discountPercentage: 0,
      validity: "12 Months",
      features: [
        { text: "Total Storage: 1 TB", included: true },
        { text: "Bandwidth: 1 TB", included: true },
        { text: "IPFS", included: true },
        { text: "Filecoin", included: true },
        { text: "Encryption & Token Gating", included: false },
        { text: "IPNS", included: false },
        { text: "Migration Support", included: false },
      ],
      buttonText: "Get Started",
      buttonVariant: "primary",
    },
  ];

  const LifeTimePlans: PricingPlan[] = [
    {
      id: "beacon",
      name: "Beacon",
      subtitle: "Basic lifetime access to storage & IPFS.",
      originalPrice: 0,
      regularPrice: 20,
      discountPercentage: 0,
      validity: "Lifetime",
      features: [
        { text: "Total Storage: 5 GB", included: true },
        { text: "Bandwidth: 10 GB", included: true },
        { text: "IPFS", included: true },
        { text: "Filecoin", included: true },
        { text: "Encryption & Token Gating", included: false },
        { text: "IPNS", included: false },
        { text: "Migration Support", included: false },
      ],
      buttonText: "Get Started",
      buttonVariant: "primary",
    },
    {
      id: "navigator",
      name: "Navigator",
      subtitle: "Extended lifetime storage with Filecoin support.",
      originalPrice: 0,
      regularPrice: 100,
      discountPercentage: 0,
      validity: "Lifetime",
      features: [
        { text: "Total Storage: 25 GB", included: true },
        { text: "Bandwidth: 50 GB", included: true },
        { text: "IPFS", included: true },
        { text: "Filecoin", included: true },
        { text: "Encryption & Token Gating", included: false },
        { text: "IPNS", included: false },
        { text: "Migration Support", included: false },
      ],
      buttonText: "Get Started",
      buttonVariant: "primary",
    },
    {
      id: "harbor",
      name: "Harbor",
      subtitle: "High-tier lifetime storage for serious usage.",
      originalPrice: 0,
      regularPrice: 500,
      discountPercentage: 0,
      validity: "Lifetime",
      features: [
        { text: "Total Storage: 150 GB", included: true },
        { text: "Bandwidth: 300 GB", included: true },
        { text: "IPFS", included: true },
        { text: "Filecoin", included: true },
        { text: "Encryption & Token Gating", included: false },
        { text: "IPNS", included: false },
        { text: "Migration Support", included: false },
      ],
      buttonText: "Get Started",
      buttonVariant: "primary",
    },
  ];

  const AddOnPlans: PricingPlan[] = [
    {
      id: "pro",
      name: "Pro",
      subtitle: "Advanced support and add-ons for power users.",
      originalPrice: 0,
      regularPrice: 99,
      discountPercentage: 0,
      validity: "Monthly",
      features: [
        { text: "Encryption & Token Gating", included: true },
        { text: "IPNS", included: true },
        { text: "Migration Support", included: true },
        { text: "SLAs", included: true },
        { text: "Custom Gateway", included: true },
        { text: "Direct Customer Support", included: true },
      ],
      buttonText: "Get Add-ons",
      buttonVariant: "primary",
    },
    {
      id: "custom",
      name: "Customize",
      subtitle: "Pay For What You Need",
      originalPrice: 999,
      regularPrice: 999,
      discountPercentage: 0,
      validity: "Custom",
      features: [
        { text: "Encryption & Token Gating", included: true },
        { text: "IPNS", included: true },
        { text: "Migration Support", included: true },
        { text: "SLAs", included: true },
        { text: "Custom Gateway", included: true },
        { text: "Direct Customer Support", included: true },
      ],
      buttonText: "Contact Our Sales Team",
      buttonVariant: "primary",
    },
  ];

  const renderPlans = (plans: PricingPlan[]) => (
    <div className="flex justify-center items-center gap-4 flex-wrap mt-6">
      {plans.map((plan) => (
        <PricingCard key={plan.id} {...plan} />
      ))}
    </div>
  );

  return (
    <div className="my-10 mx-auto flex flex-col justify-center items-center gap-4">
      <h1 className="font-semibold text-center text-4xl text-white">
        Discover your perfect plan
      </h1>

      <Tabs
        defaultValue="annually"
        className="w-full flex flex-col items-center"
      >
        <TabsList>
          <TabsTrigger value="annually">Annually</TabsTrigger>
          <TabsTrigger value="lifetime">Lifetime</TabsTrigger>
          <TabsTrigger value="add-on">Add-on</TabsTrigger>
        </TabsList>
        <TabsContent value="annually">
          <p className="text-slate-300 text-center">
          Easy, convenient and budget friendly plans. Just Pay Annually.
          </p>
          {renderPlans(AnnualPlans)}
        </TabsContent>
        <TabsContent value="lifetime">
          <p className="text-slate-300 text-center">
            Hassle free, price-beating lifetime plans. No recurring subscription fees, just a one-time payment to secure your storage for life!
          </p>
          {renderPlans(LifeTimePlans)}
        </TabsContent>
        <TabsContent value="add-on">
          <p className="text-slate-300 text-center">
          Add-on plans are available for those who want to add additional services to your existing plan.
          </p>
          {renderPlans(AddOnPlans)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Pricing;
