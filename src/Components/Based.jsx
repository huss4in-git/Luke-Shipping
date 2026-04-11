import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Based() {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    useEffect(() => {
        if (!isDesktop) return; // ❌ skip GSAP on mobile

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 80%",
                onEnter: () => {
                    gsap.from(itemsRef.current, {
                        opacity: 0,
                        y: 60,
                        filter: "blur(6px)",
                        duration: 0.8,
                        stagger: 0.12,
                        ease: "power2.out",
                    });
                },
                once: true,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [isDesktop]);

    const features = [
        { text: "24/7 SHIPMENT TRACKING", icon: "/tracking.svg" },
        { text: "EXTENSIVE NETWORK ACROSS GCC", icon: "network.svg" },
        { text: "CUSTOMS EXPERTISE", icon: "customs.svg" },
        { text: "TIMELY DELIVERY GUARANTEE", icon: "delivery.svg" },
        { text: "COMPETITIVE PRICING", icon: "pricing.svg" },
    ];

    return (
        <section ref={sectionRef} className="md:py-5">
            <div className="w-full px-6 xl:px-10 2xl:px-24">

                {/* HEADING */}
                <div className="text-center mb-16" style={{ fontFamily: 'nb-thin' }}>
                    <h2 className="md:text-5xl text-3xl mb-7 md:mb-8">
                        Why Luke Shipping?
                    </h2>

                    <p className="text-black/60 max-w-3xl mx-auto text-[15px] leading-relaxed">
                        <span style={{ color: '#FD9708' }}>Luke Shipping</span> is dedicated to providing exceptional logistics services. <br />
                        We employ a PDCA (Plan-Do-Check-Act) cycle to continuously improve our processes.
                    </p>
                </div>

                {/* BOXES */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-1 mb-15">
                        {features.map((item, index) => {

                            // 📱 Mobile → Framer Motion
                            if (!isDesktop) {
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            x: index % 2 === 0 ? -80 : 80
                                        }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1
                                        }}
                                        className="bg-[#f3f3f3] rounded-[3px] p-10 text-center"
                                    >
                                        <img src={item.icon} className="w-25 h-25 mx-auto mb-5" />
                                        <p className="text-sm tracking-wide" style={{ fontFamily: 'nb-thin' }}>
                                            {item.text}
                                        </p>
                                    </motion.div>
                                );
                            }

                            // 💻 Desktop → GSAP controlled (no motion)
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (itemsRef.current[index] = el)}
                                    className="bg-[#f3f3f3] rounded-[3px] p-10 text-center"
                                >
                                    <img src={item.icon} className="w-25 h-25 mx-auto mb-5" />
                                    <p className="text-sm tracking-wide" style={{ fontFamily: 'nb-thin' }}>
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button
                        onClick={() => window.open("https://wa.me/918330061967", "_blank")}
                        className="bg-[#FD9708] text-black px-8 py-3 rounded-full cursor-pointer text-sm font-medium hover:bg-black hover:text-white transition"
                    >
                        BOOK SHIPMENT
                    </button>
                </div>

            </div>
        </section>
    );
}