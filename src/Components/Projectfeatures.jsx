import { useEffect, useRef } from "react";
import { DraftingCompass, Truck, ShieldCheck, Settings } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    icon: <DraftingCompass className="w-7 h-7 text-[#fda408]" />,
    title: "Project planning",
    description: "Detailed planning and coordination for complex logistics operations",
  },
  {
    icon: <Truck className="w-7 h-7 text-[#fda408]" />,
    title: "Specialized transport",
    description: "Safe handling of heavy-lift and out-of-gauge cargo with precision",
  },
  {
    icon: <Settings className="w-7 h-7 text-[#fda408]" />,
    title: "End-to-end execution",
    description: "Seamless management from initial concept to final delivery",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#fda408]" />,
    title: "Risk & compliance",
    description: "Strict safety standards and regulatory compliance at every stage",
  },
];

export default function Projectfeatures() {
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
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white w-full px-6 lg:px-10 py-16 mb-15">
      
      {/* Heading */}
      <h2
        ref={(el) => (itemsRef.current[0] = el)}
        className="md:text-4xl text-3xl tracking-tight text-gray-950 mb-10 md:mb-25"
        style={{ fontFamily: "nb-thin" }}
      >
        Convincing features
      </h2>

      {/* Features */}
      <div className="border border-gray-300 rounded-sm divide-y divide-gray-300">
        {features.map((feature, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i + 1] = el)}
            className="grid grid-cols-1 lg:grid-cols-2 px-6 py-6 gap-4 lg:gap-0"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              {feature.icon}
              <span
                className="text-lg text-gray-900"
                style={{ fontFamily: "nb-thin" }}
              >
                {feature.title}
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center">
              <span
                className="text-gray-600 text-[0.95rem] leading-relaxed"
                style={{ fontFamily: "nb-thin" }}
              >
                {feature.description}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}