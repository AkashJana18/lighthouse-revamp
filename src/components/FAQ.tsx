import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What does it mean by permanent storage?",
      answer:
        "The permanent storage means you pay once for your files storage and it's meant to be stored forever. No need of recurrently paying for your files.",
    },
    {
      question: "How long will data be stored on Lighthouse?",
      answer:
        "As we move closer to our mainnet launch, we aim to be transparent about the estimated duration of data storage. Initially, your data might be projected to remain stored for around 25 years. However, as the endowment pool grows over time, aligned with Lighthouse's economic model, this duration is expected to increase. If the model performs as designed, your files should remain stored for a long period without requiring additional payments as part of lifetime plan. In the unlikely event that the endowment pool depletes its funds, users might need to contribute again to continue storage.",
    },
    {
      question: "What are the upload or file size restrictions on Lighthouse?",
      answer:
        "You can store up to 32GB in size per individual upload. Each upload can include a single file or a directory of files.",
    },
    {
      question: "Can I upload private/sensitive data to Lighthouse?",
      answer:
        "Yes, you will have to encrypt it before uploading using encryption and access control features available at Lighthouse. Refer to our documentation for this.",
    },
    {
      question: "Can I edit/delete files uploaded to Lighthouse?",
      answer:
        "We definitely understand that not all use cases will require storing data permanently. Files can be deleted off from our hot storage and other Filecoin miners. However, this doesn't prevent nodes in the IPFS decentralised storage network from retaining copies of data indefinitely. If you are looking for use cases involving editing the files, you can contact us via email or Discord, we can discuss how you can achieve that using mutable references.",
    },
    {
      question: "What does it cost to store data to Lighthouse?",
      answer:
        'Check our payment plans here - <a href="https://files.lighthouse.storage/" target="_blank" rel="noopener noreferrer" class="text-primary underline">Pricing</a>',
    },
    {
      question: "How can I pay for the Lighthouse?",
      answer:
        "You can pay per file depending on the file size or top up the associated API key with prepaid storage space in multiple tokens like Polygon, USDC, USDT, DAI, other native chain tokens.",
    },
    {
      question: "How is it different from IPFS and Filecoin?",
      answer:
        "IPFS is a distributed storage network famous for its content-addressing way of referencing files which makes it tamper-proof. There is no way to pay an IPFS node to store your files in an IPFS token (because there is no such token 😛). That's why Filecoin is built on IPFS and allows anyone to pay using Filecoin tokens to storage miners to store your files. Although, Lighthouse is built on IPFS and Filecoin miner network, there are couple of value adds that Lighthouse brings in: 1. Permanent storage - in Filecoin you have to recurrently pay for your files else the miner will drop your files. Lighthouse solves this by bringing in permanent storage ability. 2. Ease of interaction - Lighthouse abstracts away complexities of directly using Filecoin and dealing with Filecoin miner network. 3. Private files - IPFS and Filecoin by default are public storage networks and anyone can see data you upload. Building your own encryption layer is not an easy job. Lighthouse by default provides the user a layer of encryption and access control for encrypting your files/data along with sharing to authorised users.",
    },
    {
      question: "How is it different from Arweave?",
      answer:
        "Lighthouse aims to be a cheaper storage option than Arweave for permanent storage along with verifiable storage guarantees and facilitate more scalable storage abilities.",
    },
    {
      question: "Which chains does it support?",
      answer:
        "Users can interact with the following chains to pay for storage and get verifiable record of storage on Lighthouse: 1. Ethereum 2. Polygon 3. BSC 4. Fantom 5. Optimism 6. More coming soon.",
    },
  ];

  return (
      <div
        id="faq"
        className="relative py-8 md:py-16 bg-transparent backdrop-blur-sm border border-slate-600/30 rounded-lg sm:mx-8 lg:mx-16 my-8 max-w-7xl mx-auto"
      >
        <div className="absolute top-0 inset-0 rounded-xl bg-gradient-to-b from-purple-600/20 via-transparent to-transparent blur-lg pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-semibold text-center text-3xl sm:text-4xl text-white">
              FAQs
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mt-2 sm:mt-4">
              You've got questions, and we've got answers.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="space-y-2 sm:space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-slate-600/30"
              >
                <AccordionTrigger className="px-3 sm:px-4 py-2 text-base sm:text-lg hover:font-medium cursor-pointer text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-3 sm:px-4 py-2 text-base sm:text-lg text-foreground/80">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
  );
};

export default FAQ;
