import { useState } from "react";

const faqs = [
    {
        question: "What is logistics?",
        answer: [
          "Logistics describes the holistic planning, control and execution of all material, goods and information flows within a supply chain. Your goal is to deliver products to the right place at the right time, in the right quantity and quality — efficiently, reliably and economically.",
          "Logistics includes not only transportation and storage, but also procurement, picking, packaging and distribution. It thus forms the connecting element between production, trade and end customer.",
          "Time International Logistics sees logistics as an integrated system that intelligently links processes and ensures maximum transparency. Through modern technologies, digital networking and sustainable solutions, we make supply chains efficient and future-proof — across the globe and across industries."
        ],
      },
  {
    question: "What types of logistics are there?",
    answer: "Logistics covers the entire supply chain, from the procurement of raw materials to disposal. The steps include procurement logistics, production logistics, distribution logistics and disposal logistics.",
  },
  {
    question: "What is commissioning?",
    answer: [
        "Commissioning is the process in which goods from the warehouse are specifically assembled to meet customer orders or production requirements. In logistics, it is a central part of warehouse and shipping processes, as it decisively determines efficiency, delivery speed and accuracy.",
        "At Luke, picking includes all steps from the removal of the items to inspection to packaging and preparation for shipping. Depending on the requirements, we use various processes — from manual picking to automated, IT-based systems. With modern warehouse technology, digital scanner solutions and precise process control, we guarantee short turnaround times and error-free processes.",
        "Optimized picking not only ensures satisfied customers, but also lower costs and sustainable use of resources. In combination with our transport and warehouse logistics services, it creates the basis for a smooth supply chain."
      ],
  },
  {
    question: "What is supply chain management?",
    answer: [
        "Supply chain management (SCM) describes the holistic planning, control and optimization of all processes along the supply chain — from procurement to production to distribution to end customers. The aim of supply chain management is to make goods and information flows efficient, reduce costs and shorten delivery times.",
        "Supply chain management plays a central role in logistics because it connects all involved partners — manufacturers, suppliers, freight forwarders and retailers. Through digital systems, transparent communication and precise process control, inventories can be optimally coordinated and bottlenecks avoided.",
        "Luke helps companies to make their supply chains efficient, flexible and sustainable. With modern IT solutions, a Europe-wide network and practical experience, we create transparency and stability in complex supply chains. Supply chain management is thus becoming a decisive success factor for smooth and sustainable logistics."
      ],
  },
  {
    question: "What is sustainable logistics?",
    answer: [
        "Sustainable logistics means designing transport and storage processes in such a way that they are ecologically, economically and socially responsible. The aim is to reduce emissions, use resources efficiently and at the same time ensure reliable supply chains.",
        "At Luke, we combine efficiency with environmental awareness. Through CO₂-optimized transportation, modern vehicle fleets, energy-efficient warehouse technology and digital process control, we actively contribute to reducing our ecological footprint.",
        "However, sustainable logistics involves more than just environmentally friendly transport — it stands for a long-term, future-oriented way of thinking that combines efficiency, innovation and responsibility. In this way, we create logistics solutions that benefit both our customers and the environment."
      ],
  },
];

export default function Wfaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-10 py-10 pb-20 md:pb-40 bg-[#f3f3f3] h-fit items-start"
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
  {Array.isArray(faq.answer)
    ? faq.answer.map((para, i) => (
        <span key={i} className="block mb-3">{para}</span>
      ))
    : faq.answer}
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