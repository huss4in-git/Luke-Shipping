import { useState } from "react";

const faqs = [
    {
      question: "What is project handling in logistics?",
      answer: [
        "Project handling refers to the planning, coordination and execution of complex logistics operations involving oversized, heavy or high-value cargo. It requires specialized expertise to ensure every stage is managed efficiently.",
        "It includes route planning, transportation, permits, customs clearance and on-site coordination. Each project is tailored based on specific cargo and operational requirements.",
        "At Luke, project handling is executed with precision, ensuring safe delivery, minimal delays and complete operational control from start to finish."
      ],
    },
    {
      question: "What types of projects do you handle?",
      answer: "We handle a wide range of projects including construction equipment transport, energy and infrastructure logistics, oil & gas cargo, and industrial machinery movement, all tailored to project-specific needs.",
    },
    {
      question: "How do you manage complex or oversized cargo?",
      answer: [
        "Handling oversized or heavy-lift cargo requires detailed planning and specialized equipment. Our team evaluates dimensions, weight, routes and regulatory requirements before execution.",
        "We use advanced transport solutions, including cranes, multi-axle trailers and custom loading techniques to ensure safe movement of cargo.",
        "With experienced coordination and real-time monitoring, we ensure that even the most challenging shipments are delivered securely and efficiently."
      ],
    },
    {
      question: "Do you provide end-to-end project logistics solutions?",
      answer: [
        "Yes, we offer complete end-to-end solutions covering planning, transportation, customs clearance and final delivery at site.",
        "Our integrated approach ensures seamless coordination between all stakeholders, reducing delays and improving efficiency.",
        "From initial concept to final execution, we manage every detail to ensure smooth and reliable project completion."
      ],
    },
    {
      question: "How do you ensure safety and reliability in project handling?",
      answer: [
        "Safety is a core priority in every project we handle. We follow strict operational standards, risk assessments and compliance procedures.",
        "Our team works with trusted partners and uses certified equipment to ensure cargo integrity throughout the journey.",
        "With continuous monitoring and proactive problem-solving, we minimize risks and ensure reliable, on-time delivery."
      ],
    },
  ];

export default function Projectfaq() {
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