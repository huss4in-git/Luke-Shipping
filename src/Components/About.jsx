import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(itemsRef.current.filter(Boolean), {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 95%", // better for mobile
                    once: true,
                },
                opacity: 0,
                y: 50,
                filter: "blur(4px)",
                duration: 0.7,
                stagger: 0.15,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="px-1 md:px-2 py-20 md:py-30">

            <div className="w-full px-6 xl:px-10 2xl:px-24">

                {/* TOP SECTION */}
                <div className="grid md:grid-cols-2 md:gap-50 gap-12 items-start">

                    {/* LEFT TITLE */}
                    <div
                        ref={(el) => (itemsRef.current[0] = el)}
                        className="md:ml-7"
                    >
                        <h1
                            className="text-3xl md:text-5xl leading-tight md:whitespace-nowrap"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Your trusted partner across{" "}
                            <br className="hidden md:block" />
                            continents
                        </h1>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div style={{ fontFamily: "nb-thin" }}>
                        <p
                            ref={(el) => (itemsRef.current[1] = el)}
                            className="text-[15px] text-black font-medium mb-3"
                        >
                            Fast, effective, and safe logistics solutions
                        </p>

                        <p
                            ref={(el) => (itemsRef.current[2] = el)}
                            className="text-[15px] text-black/50 leading-relaxed max-w-[520px]"
                        >
                            <span style={{ color: '#FD9708' }}>Luke Shipping Company</span> is a seasoned logistics provider with a rich history
                            spanning 11 years. Our unwavering commitment to excellence has positioned us as a
                            trusted partner for businesses seeking reliable and efficient supply chain solutions.
                            With a profound understanding of the intricate global supply chain, we offer tailored
                            logistics solutions that seamlessly integrate with your business operations. Our
                            expertise lies in providing cost-effective, time-sensitive, and secure transportation of
                            your goods from origin to destination.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}