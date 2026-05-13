import Marquee from "./Marquee";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CoffeeTrail() {

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
                y: 70,
                filter: "blur(8px)",
                duration: 1,
                stagger: 0.18,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#242e22] py-24 overflow-hidden"
        >

            <div className="w-full px-6 md:px-13 xl:px-14 2xl:px-15">

                {/* TOP SECTION */}
                <div
                    ref={(el) => (itemsRef.current[0] = el)}
                    className="grid md:grid-cols-2 gap-16 items-start md:mb-22 mb-20"
                >

                    {/* LEFT TITLE */}
                    <div>
                        <h1
                            className="text-4xl md:text-5xl leading-tight"
                            style={{ color: "#faf6ed" }}
                        >
                            More than just coffee
                        </h1>
                    </div>

                    {/* RIGHT TEXT */}
                    <div style={{ fontFamily: "nb-thin" }}>
                        <p className="text-[15px] text-[#faf6ed]/80 leading-relaxed mb-6">
                            Qahua Cultr exists to make India-origin coffees easier to evaluate and buy with confidence – especially for roasters who need clarity, repeatability, and clean lot structure more than hype.
                        </p>

                        <p className="text-[15px] text-[#faf6ed]/80 leading-relaxed">
                            We work as a small, selection-led sourcing practice, focused on coffees that perform in real roastery conditions and can be represented honestly in the market.
                        </p>
                    </div>

                </div>

                {/* SECTION 1 */}
                <div
                    ref={(el) => (itemsRef.current[1] = el)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
                >

                    {/* CONTENT */}
                    <div className="order-1">
                        <h2
                            className="text-3xl md:text-4xl mb-6"
                            style={{ color: "#faf6ed" }}
                        >
                            What we do?
                        </h2>

                        <p
                            className="text-[15px] text-[#faf6ed]/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            We help roasters access India-origin coffees through a simple, disciplined workflow:
                        </p>

                        <ul
                            className="text-[15px] leading-relaxed list-disc list-outside text-[#faf6ed]/80 ml-6 max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            <li>Select coffees from a small set of producer relationships and trusted supply lines</li>
                            <li>Document lots clearly (species, variety, process, altitude, harvest context, lot type)</li>
                            <li>Prepare samples for evaluation with straightforward, trade-facing notes</li>
                            <li>Support buying decisions with clarity on availability, continuity, and intended use</li>
                        </ul>

                        <p
                            className="text-[15px] text-[#faf6ed]/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Our goal is not to “curate a narrative.” It’s to reduce uncertainty between origin and roastery.
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div className="relative order-2 overflow-hidden">
                        <img
                            src="/cf7.jpg"
                            alt="Roastery"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                </div>

                {/* SECTION 2 */}
                <div
                    ref={(el) => (itemsRef.current[2] = el)}
                    className="grid grid-cols-1 mt-30 md:grid-cols-2 gap-16 items-start"
                >

                    {/* CONTENT */}
                    <div className="order-1 md:order-2">
                        <h2
                            className="text-3xl md:text-4xl mb-6"
                            style={{ color: "#faf6ed" }}
                        >
                            How we select coffee?
                        </h2>

                        <p
                            className="text-[15px] text-[#faf6ed]/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            We select coffees with the roaster’s decision-making process in mind:
                        </p>

                        <ul
                            className="text-[15px] leading-relaxed list-disc list-outside text-[#faf6ed]/80 ml-6 max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            <li>Cup quality and structure: sweetness, balance, clarity, usable acidity, and finish</li>
                            <li>Repeatability: how reliably a coffee holds up across roasts and time</li>
                            <li>Lot definition: transparent separation between representative lots vs micro-lots</li>
                            <li>Process integrity: clean processing and realistic flavour claims</li>
                        </ul>

                        <p
                            className="text-[15px] text-[#faf6ed]/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Flavour notes are clearly identified as producer-declared, process-informed, or cup-derived.
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div className="relative order-2 md:order-1 overflow-hidden">
                        <img
                            src="/cf8.jpg"
                            alt="Roastery"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                </div>

                {/* SECTION 3 */}
                <div
                    ref={(el) => (itemsRef.current[3] = el)}
                    className="grid grid-cols-1 mt-30 mb-30 md:grid-cols-2 gap-16 items-start"
                >

                    {/* CONTENT */}
                    <div className="order-1">
                        <h2
                            className="text-3xl md:text-4xl mb-6"
                            style={{ color: "#faf6ed" }}
                        >
                            How we work with producers
                        </h2>

                        <p
                            className="text-[15px] text-[#faf6ed]/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            We work with producers in ways that prioritise accuracy, continuity, and realistic representation in the market:
                        </p>

                        <ul
                            className="text-[15px] leading-relaxed list-disc list-outside text-[#faf6ed]/80 ml-6 max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            <li>Clear lot definition and traceability at the level the coffee can genuinely support</li>
                            <li>Honest separation between representative lots and limited micro-lots</li>
                            <li>Pricing and positioning aligned with how the coffee will actually be sold and used</li>
                            <li>Long-term relationships built around repeat evaluation, not one-off releases</li>
                        </ul>

                        <p
                            className="text-[15px] text-[#faf6ed]/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Our goal is not to overstate impact. It’s to represent producers and their coffees in ways that hold up across seasons, shipments, and roastery use.
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div className="relative order-2 overflow-hidden">
                        <img
                            src="/cf10.jpg"
                            alt="Roastery"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                </div>

            </div>

            <Marquee />

        </section>
    );
}