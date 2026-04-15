import { useEffect, useRef } from "react";
import { UserCircle, Package } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    icon: (
      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">
        ZOLL
      </div>
    ),
    title: "Customs processing",
    description: "Import/export services, customs warehouses",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        {/* SVG unchanged */}
        <path d="..." />
      </svg>
    ),
    title: "Transport of dangerous goods",
    description: "We meet the highest safety standards",
  },
  {
    icon: <UserCircle className="w-9 h-9 text-black" />,
    title: "Individual advice",
    description: "Our local experts will advise you on your special cases",
  },
  {
    icon: <Package className="w-9 h-9 text-black" />,
    title: "Sustainable logistics solutions",
    description: "with certified environmental management",
  }
];

export default function Roadadd() {
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
        stagger: 0.1,
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
              Additional services for your <br className="hidden md:block" />
              transport
            </h2>

            <p
              ref={(el) => (itemsRef.current[1] = el)}
              className="text-gray-700 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "nb-thin" }}
            >
              In addition to reliable truck transport, we offer a wide range of additional services that make
              your international shipping more efficient, safer and more sustainable. Our experts support you
              from planning to final delivery — with tailor-made solutions for every transport requirement.
              We take care of the complete customs processing, including import and export formalities,
              and customs warehouse management, in order to make your supply chain
              legally secure and time-saving. Our certified dangerous goods transports are available for
              sensitive goods — in accordance with the highest safety standards, of course.
We also rely on sustainable
              logistics concepts with certified environmental management and modern vehicles with reduced
              CO₂ emissions.
            </p>
          </div>

          <div ref={(el) => (itemsRef.current[2] = el)} className="md:mb-0 mb-10">
            <button className="flex items-center gap-0 group cursor-pointer">
              <span className="bg-[#FD9708] text-white text-sm px-5 py-2 rounded-full">
                Contact Us
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="grid sm:grid-cols-2 grid-cols-1 border border-gray-200">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i + 3] = el)}
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



