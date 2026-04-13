import { useState } from "react";

const faqs = [
  {
    question: "What is air freight?",
    answer: "Air freight refers to the shipment of goods by plane — the fastest and safest means of transportation.",
  },
  {
    question: "How does air freight work?",
    answer: "An air freight forwarder books the freight space with the airline and organizes the entire shipping chain, including customs processing and onward transportation.",
  },
  {
    question: "What does air freight cost?",
    answer: "Air freight is the most expensive delivery method, but it is also the fastest. The costs depend on weight, dimensions and destination.",
  },
  {
    question: "What is transported by air freight?",
    answer: "Air freight is primarily used to transport time-sensitive, high-value, or fragile goods. These include spare parts, machine components, electronics, medicines, fashion items, and perishable goods such as food or flowers. Documents, express shipments, and urgent e-commerce orders are also frequently sent by air freight—anywhere where speed and reliability are crucial.",
  },
  {
    question: "How does air freight have to be packaged?",
    answer: "The packaging must protect the goods during transport. Boxes or pallets are often used. Wood packaging must be treated in accordance with ISPM15 to prevent pests.",
  },
];

export default function Airfaq() {
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