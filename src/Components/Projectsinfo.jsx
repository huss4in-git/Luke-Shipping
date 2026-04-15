import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  "End-to-end project planning and execution for complex logistics operations",
  "Specialized handling of heavy-lift and out-of-gauge cargo with precision",
  "Dedicated project management team ensuring seamless coordination at every stage",
  "Customized logistics solutions tailored to unique project requirements",
  "Expertise across industries including construction, energy, oil & gas, and manufacturing",
  "Efficient transportation planning with reliable carrier partnerships",
  "Streamlined customs clearance and regulatory compliance support",
  "On-site coordination and delivery for smooth project completion",
  "Advanced risk management ensuring safety and minimal disruptions",
  "Cost-effective project execution without compromising quality or timelines",
];

export default function Projectsinfo() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(itemsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 50,
        filter: "blur(6px)",
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 mb-10 lg:mt-15 lg:mb-15">

        {/* LEFT */}
        <div className="flex flex-col justify-between md:mt-0 mt-5 px-6 lg:px-10 mb-8 lg:mb-0">
          
          <h2
            ref={(el) => (itemsRef.current[0] = el)}
            className="text-3xl lg:text-4xl tracking-tight text-gray-950"
            style={{ fontFamily: "nb-thin" }}
          >
            Bringing clarity and <br /> precision to complex <br /> project execution.
          </h2>

          <div
            ref={(el) => (itemsRef.current[1] = el)}
            className="w-full lg:w-[75%] h-64 lg:h-100 rounded-[6px] overflow-hidden mt-6 lg:mt-auto"
          >
            <img
              src="/project1.jpg"
              alt="Luke Shipping fleet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="divide-y divide-gray-200 border-t border-b border-gray-200 mx-6 lg:mx-0 lg:mr-10"
          style={{ fontFamily: "nb-thin" }}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i + 2] = el)}
              className="flex items-center justify-between px-4 lg:px-6 py-4 lg:py-5"
            >
              <span className="text-gray-800 text-sm lg:text-[0.95rem] leading-relaxed pr-4 lg:pr-6">
                {feature}
              </span>

              <div className="flex-shrink-0 w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#FD9708] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 10l4.5 4.5L16 6" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}