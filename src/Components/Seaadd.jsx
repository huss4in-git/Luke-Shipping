import { useEffect, useRef } from "react";
import { UserCircle, Package, DollarSign, ArrowLeftRight, Container, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const iconStyle = { width: 28, height: 28 };

const services = [
  {
    icon: <DollarSign style={iconStyle} />,
    title: "Cost efficiency",
    description: "Sea freight offers the cheapest transport solution for large quantities of goods over long distances",
  },
  {
    icon: <ArrowLeftRight style={iconStyle} />,
    title: "Flexibility",
    description: "Perfect for transporting all types of goods, from general cargo to project loads",
  },
  {
    icon: <Container className="w-9 h-9 text-black" />,
    title: "Sustainability",
    description: "Lower CO2 emissions compared to other modes of transport make sea freight more environmentally friendly",
  },
  {
    icon: <Check className="w-9 h-9 text-black" />,
    title: "Reliability",
    description: "Reliable routes and regular departures guarantee predictable logistics",
  }
];

export default function Seaadd() {
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
        y: 60,
        filter: "blur(6px)",
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white w-full px-6 lg:px-10 md:mt-15 mb-10 md:mb-35 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

        {/* LEFT */}
        <div className="flex flex-col justify-between pr-0 lg:pr-16">
          <div>
            <h2
              ref={(el) => (itemsRef.current[0] = el)}
              className="text-3xl lg:text-4xl tracking-tight text-gray-950 mb-10 leading-tight"
              style={{ fontFamily: "nb-thin" }}
            >
              Benefits of sea transport with <br className="hidden md:block" />
              Luke
            </h2>
          </div>

          <div
            ref={(el) => (itemsRef.current[1] = el)}
            className="md:mb-0 mb-10"
          >
            <button className="flex items-center gap-0 group cursor-pointer">
              <span className="bg-[#FD9708] text-white text-sm px-5 py-2 rounded-full"  style={{fontFamily:'nb-thin'}}>
                Contact Us
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid sm:grid-cols-2 grid-cols-1 border border-gray-200">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i + 2] = el)}
              className={`p-6 lg:p-8 
                ${i % 2 === 0 ? "sm:border-r border-gray-200" : ""} 
                ${i < services.length - 1 ? "border-b border-gray-200" : ""} 
                ${i < 2 ? "sm:border-b border-gray-200" : "sm:border-b-0"}`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg text-gray-900 mb-3" style={{ fontFamily: "nb-thin" }}>
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "nb-thin" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}