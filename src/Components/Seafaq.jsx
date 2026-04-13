import { useState } from "react";

const faqs = [
  {
    question: "What is sea freight?",
    answer: "Sea Freight refers to the transport of goods by ship via international sea routes. It is mainly used for large quantities of goods and containers and is considered a cost-effective, environmentally friendly solution in global trade. Freight Forwarders take care of planning, processing, customs, and logistics all the way to the destination port.",
  },
  {
    question: "How does sea freight work?",
    answer: "In sea freight, goods are transported by ship via international sea routes in containers or as general cargo. Freight forwarders coordinate the entire transport chain—from pickup at the shipper's location to shipping and delivery at the destination. Customs clearance, documentation, and scheduling are all part of the service.",
  },
  {
    question: "What does sea freight cost?",
    answer: "The cost of sea freight depends on several factors – in particular, volume (m³), weight, destination port, season, and the current market rates of shipping companies. Sea freight is generally significantly cheaper than air freight, but offers longer transit times. For companies with regular shipments, it is worth using less than container load (LCL) or full container load (FCL) to optimize costs. Surcharges such as fuel costs (BAF) or security fees can also affect the price. An individual freight quote therefore provides the most accurate information on current transport costs.",
  },
  {
    question: "What is transported by sea freight?",
    answer: "Almost all types of goods can be transported by sea freight – from consumer goods, machinery, and vehicle parts to raw materials and hazardous goods. Sea freight is the most economical solution in international trade, especially for large-volume or heavy goods. Companies use container transport to ship both less than container load (LCL) and full container load (FCL) safely and efficiently. Special types of containers, such as reefer or open-top containers, also allow temperature-sensitive or oversized goods to be transported without any problems.",
  },
  {
    question: "How does sea freight have to be packaged?",
    answer: "Packaging for sea freight must reliably protect goods from moisture, corrosion, and mechanical damage. It is particularly important to use seaworthy outer packaging made of sturdy, moisture-resistant material. Wooden packaging must be treated in accordance with ISPM 15 and labeled accordingly to comply with international import regulations. For sensitive industrial goods, the use of corrosion protection films, desiccants, or vacuum packaging is also recommended. Professional packaging is crucial to prevent transport damage and ensure smooth customs clearance.",
  },
  {
    question: "What does FCL mean?",
    answer: "FCL stands for “Full Container Load” and refers to the shipment of a complete container loaded exclusively with a company's goods. This option is particularly suitable for larger shipment volumes or sensitive goods that should not be combined with third-party goods. FCL transports offer greater security, faster processing, and a lower risk of damage or loss. In addition, companies often benefit from lower freight rates per unit if the container volume is used efficiently.",
  },
  {
    question: "What does LCL mean?",
    answer: "LCL stands for “Less than Container Load” and describes consolidated container shipping, in which multiple shipments from different customers are transported together in one container. This option is ideal for smaller or irregular quantities of goods where a whole container is not worthwhile. Companies only pay for the space they actually use, which significantly reduces costs. LCL shipments are flexible, efficient, and enable worldwide shipping even for small volumes – with professional consolidation and customs clearance by the freight forwarder.",
  },
];

export default function Seafaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-10 py-10 pb-15 bg-[#f3f3f3] h-fit items-start"
      style={{ fontFamily: "nb-thin" }}
    >
      {/* Left */}
      <div className="w-full md:w-96 md:shrink-0 md:sticky md:top-10">
        <h2 className="text-3xl md:text-4xl font-light leading-tight text-gray-900">
          Do you have any questions?
          <br />
          Find your answer here!
        </h2>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 md:ml-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-4 md:py-5 text-left gap-4 cursor-pointer bg-transparent"
              >
                <span className="text-[15px] text-gray-900">{faq.question}</span>
                <span
                  className={`text-2xl font-light text-[#fda408] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-500 leading-relaxed pb-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}