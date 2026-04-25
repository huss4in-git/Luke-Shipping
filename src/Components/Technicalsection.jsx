import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ClipboardCheck, TrendingUp, ShieldAlert ,ShieldCheck, Clock, FileSearch, Users, ChartColumnDecreasing, Settings } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Technicalsection() {

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
    const [activeSection, setActiveSection] = useState("challenges");
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const sidebarItems = [
        { label: "Challenges", id: "challenges" },
        { label: "Contact us", id: "contact-us" },
        { label: "Solution finder", id: "solution-finder" },
        { label: "Related resources", id: "related-resources" },
    ];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // scroll-spy
            const ids = ["challenges", "contact-us", "solution-finder", "related-resources"];
            for (let i = ids.length - 1; i >= 0; i--) {
                const el = document.getElementById(ids[i]);
                if (el && el.getBoundingClientRect().top <= 140) {
                    setActiveSection(ids[i]);
                    break;
                }
            }

       
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const challenges = [
        {
            icon: <ChartColumnDecreasing size={48} strokeWidth={1.2} color="#FD9708" />,
            title: "Risk management",
            desc: "Technical advisory services are vital to identify and address safety, functional, and environmental risks as well as operational challenges in complex projects.",
        },
        {
            icon: <ClipboardCheck size={48} strokeWidth={1.2} color="#FD9708" />,
            title: "Regulatory compliance",
            desc: "There is a growing demand for regulatory compliance in various industries. This includes meeting stringent licensing, environmental, and quality standards.",
        },
        {
            icon: <Settings size={48} strokeWidth={1.2} color="#FD9708" />,
            title: "Resource optimisation",
            desc: "Resource and business process optimisation are important for balancing costs, energy efficiency, and quality in project design and execution.",
        },
        {
            icon: <ShieldCheck size={48} strokeWidth={1.2} color="#FD9708" />,
            title: "Process safety",
            desc: "Functional safety services and seismic risk assessment can help implement robust safety systems and ensure due diligence, reducing losses from process failures.",
        },
        {
            icon: <Clock size={48} strokeWidth={1.2} color="#FD9708" />,
            title: "Asset lifespan",
            desc: "Managing plant life extension, decommissioning, and assessing infrastructure to improve durability are all part of our business process optimisation services.",
        },
       
       
    ];

    return (
        <>
            {/* ── CONTENT WITH STICKY SIDEBAR ────────────────────── */}
            <div className="bg-white px-6 md:px-16 md:py-20 py-15" style={{ fontFamily: "nb-thin" }}>
                <div
                    ref={containerRef}
                    className="max-w-8xl mx-auto flex flex-col md:flex-row gap-12"
                    style={{ position: "relative" }}
                >
                    {/* SIDEBAR — absolutely positioned, moves with scroll via JS */}
                    {/* <aside className="hidden md:block w-48 flex-shrink-0 self-start">
  <div className="sticky top-24 space-y-3 text-sm border-l-2 border-gray-100 pl-4">
                            {sidebarItems.map(({ label, id }) => (
                                <div
                                    key={id}
                                    onClick={() => scrollToSection(id)}
                                    className={`cursor-pointer transition-colors duration-150 ${
                                        activeSection === id
                                            ? "text-[#FD9708]"
                                            : "text-gray-400 hover:text-[#FD9708]"
                                    }`}
                                >
                                    {label}
                                </div>
                            ))}
                        </div>
                    </aside> */}

                    {/* RIGHT: all sections stacked */}
                    <div ref={(el) => (itemsRef.current[0] = el)} className="flex-1" style={{ fontFamily: "nb-thin" }}>

                        <section id="challenges" className="scroll-mt-24 mb-5 md:mb-10">
                            <h2 className="text-3xl md:text-4xl text-black mb-12">Common challenges</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {challenges.map((c, i) => (
                                    <div key={i} className="flex flex-col gap-4">
                                        <div className="w-14 h-14">{c.icon}</div>
                                        <h3 className="text-base text-gray-900 leading-snug">{c.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                                    </div>
                                ))}
                            </div>
                            
                        </section>

                        </div>
                </div>
            </div>


                          {/* ── CTA STRIP ──────────────────────────────────────── */}
            <section className="bg-[#f3f3f3] py-16 px-6 md:px-16" style={{ fontFamily: "nb-thin" }}>
                <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl text-[black] mb-4 leading-tight">
                            Need support for your challenges?
                        </h2>
                        <p className="text-sm text-[#0d2240] opacity-70 leading-relaxed">
                        Our experts have the deep knowledge to help you overcome your most common challenges through our technical advisory services.                    </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => window.open("https://wa.me/966582780836", "_blank")}
                            className="bg-[#FD9708] text-white text-sm px-6 py-3 rounded-full hover:bg-[black] hover:text-[#FD9708] transition-colors duration-200 cursor-pointer"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* <div className="bg-white px-6 md:px-16 md:py-20 py-15" style={{ fontFamily: "nb-thin" }}>
                <div
                    ref={containerRef}
                    className="max-w-8xl mx-auto flex flex-col md:flex-col gap-12"
                    style={{ position: "relative" }}
                >

                        <section id="contact-us" className="scroll-mt-24 mb-20 pt-10 border-t border-gray-100">
                            <h2 className="text-3xl md:text-5xl text-gray-900 mb-6">Contact us</h2>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-8">
                                Reach out to our team of auditing specialists. We'll help you identify the right service for your organisation's needs and get you started quickly.
                            </p>
                            <button onClick={() => navigate("/contact")} className="bg-black text-[#FD9708] text-xs px-6 py-3 rounded-full hover:bg-black/80 transition-colors duration-200 cursor-pointer" style={{ fontFamily: "nb-thin" }}>
                                Get in touch
                            </button>
                        </section>

                        <section id="solution-finder" className="scroll-mt-24 mb-20 pt-10 border-t border-gray-100">
                            <h2 className="text-3xl md:text-5xl text-gray-900 mb-6">Solution finder</h2>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-8">
                                Not sure which audit service fits your situation? Use our solution finder to answer a few quick questions and we'll point you to the right path.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {["Internal Audit", "Supplier Audit", "Compliance Audit", "Process Audit"].map((s) => (
                                    <div key={s} className="border border-gray-200 rounded-lg p-5 hover:border-[#FD9708] transition-colors duration-200 cursor-pointer">
                                        <h4 className="text-sm text-gray-900 mb-1">{s}</h4>
                                        <p className="text-xs text-gray-400">Click to learn more about this audit type.</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="related-resources" className="scroll-mt-24 pt-10 border-t border-gray-100">
                            <h2 className="text-3xl md:text-5xl text-gray-900 mb-6">Related resources</h2>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xl mb-8">
                                Explore guides, whitepapers, and case studies related to auditing best practices, compliance frameworks, and risk management.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: "Audit Readiness Guide", type: "PDF Guide" },
                                    { title: "ISO 9001 Compliance Overview", type: "Whitepaper" },
                                    { title: "Risk Management Framework", type: "Case Study" },
                                ].map((r) => (
                                    <div key={r.title} className="border border-gray-200 rounded-lg p-5 hover:border-[#FD9708] transition-colors duration-200 cursor-pointer">
                                        <span className="text-[10px] uppercase tracking-widest text-[#FD9708]">{r.type}</span>
                                        <h4 className="text-sm text-gray-900 mt-2">{r.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </div> */}
            

          
        </>
    );
}