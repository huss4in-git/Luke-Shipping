import { useState } from "react";

const faqs = [
  {
    question: "What is customs clearance?",
    answer: "Customs clearance describes the transfer of goods into a customs procedure. This includes release for free movement, the customs warehousing procedure and temporary use.",
  },
  {
    question: "How does customs clearance work?",
    answer: [
      "Declaration at the export customs office (e.g. via ATLAS).",
      "Issuance of the export accompanying document (ABD).",
      "Presentation of the ABD at the customs office of exit (border customs office).",
      "Completion of customs clearance with the initial note.",
    ],
  },
  {
    question: "What documents do I need for customs clearance?",
    answer: ["Import declaration", "Customs value declaration", "Commercial invoice", "Certificates of origin", "Transport documents"],
    listType: "dot",
  },
  {
    question: "Where do customs duties have to be paid?",
    answer: "Depending on the customs procedure, customs clearance takes place at different locations. For example, if goods are shipped from Germany to Switzerland by plane, customs clearance can take place directly at the first Swiss airport — i.e. where the goods first reach the country.",
  },
  {
    question: "Are transport costs subject to customs duties?",
    answer: "Yes For commercial shipments, both the value of the goods and the transport costs are used to calculate the customs value. This results in the assessment base for import sales tax. This is applied to the total amount (value of goods + shipping costs + customs).",
  },
  {
    question: "What is the composition of customs duties?",
    answer: "Customs duties result from the customs value of the goods multiplied by the corresponding duty rate. Excise duties are added to certain goods. The import sales tax is based on the customs value, the customs amount and, where applicable, on other duties.",
  },
  {
    question: "What does customs cost?",
    answer: "Customs costs consist of the value of the goods. In addition, there is the specific duty rate, which varies depending on the product category. An exact calculation is only possible on the basis of this information.",
  },
];

export default function Customsfaq() {
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
                {Array.isArray(faq.answer) ? (
  faq.listType === "dot" ? (
    <ul className="text-sm text-gray-500 leading-relaxed pb-5 space-y-2">
      {faq.answer.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  ) : (
    <ol className="text-sm text-gray-500 leading-relaxed pb-5 space-y-2">
      {faq.answer.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="shrink-0">{i + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  )
) : (
  <p className="text-sm text-gray-500 leading-relaxed pb-5">
    {faq.answer}
  </p>
)}
</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}