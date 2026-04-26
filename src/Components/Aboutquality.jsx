import { useRef, useEffect, useState } from "react";

// ─── data ──────────────────────────────────────────────────────────────────
const SECTION_NUMBER = "03";
const SECTION_LABEL = "quality";

const DISPLAY_WORD = "Qualität";
const SUBTITLE = "Delivering what matters, reliably and responsibly.";

const IMAGE_URL = "/quality.jpg"; // replace with your public image

const FIRST_CAPTION_LABEL = "entitlement";
const FIRST_CAPTION_BODY =
    "Our customers entrust us with their shipments because they know from experience that our quality is reliable. The trust placed in us creates an obligation to deliver on our promise of quality and reliability. This is where the circle comes full circle. Trust that you have earned creates even more trust.";

const EMPLOYEES_HEADING = "Our employees —\nour most valuable asset";

const SUB_ROWS = [
    {
        dot: "#22c55e", // green
        label: "motivation",
        body: "Behind every transport, every shipment and every success are dedicated employees who achieve outstanding results every day with passion and expertise. We believe in the potential of each individual and support our teams through regular training, innovative work environments, and a culture of respect.",
    },
    {
        dot: "#fda408", // red
        label: "qualification",
        body: "Our employees are not only specialists in their fields — they are also ambassadors of our values. Together, we are shaping the future of logistics, with a focus on collaboration, diversity and trust.",
    },
];

const BOTTOM_STATEMENT = "We are certified — quality-conscious\naction is our guideline.";

// ─── helpers ───────────────────────────────────────────────────────────────
function useFadeIn(threshold = 0.1) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
}

// ─── sub-components ────────────────────────────────────────────────────────
function SectionBadge({ number, label }) {
    return (
        <span
            className="inline-flex items-center bg-white gap-2 border border-gray-300 rounded-full px-3 py-1 text-xs tracking-widest text-gray-500 font-medium uppercase w-fit"
            style={{ fontFamily: "nb-thin" }}
        >
            <span style={{ color: "#fda408" }}>{number}</span> — {label}
        </span>
    );
}

function DisplayWord({ word }) {
    const [ref, visible] = useFadeIn(0.05);
    return (
        <div
            ref={ref}
            style={{
                transition: "opacity 0.8s ease, transform 0.8s ease",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
            }}
        >
            <span
                style={{
                    fontFamily: "'Inspiration', cursive",
                    fontSize: "clamp(4.5rem, 11vw, 9.5rem)",
                    lineHeight: 1,
                    display: "inline-block",
                    color: "#f5efcc",
                    textShadow: `
            2px 2px 0 #111, 4px 4px 0 #111,
            6px 6px 0 #111, 8px 8px 0 #111,
            10px 10px 0 #111, 12px 12px 0 #111,
            14px 14px 0 #111
          `,
                    WebkitTextStroke: "2px #111",
                    letterSpacing: "-0.01em",
                    fontStyle: "italic",
                }}
            >
                {word}
            </span>
        </div>
    );
}

function CaptionRow({ dot, label, body, bordered = true }) {
    const [ref, visible] = useFadeIn(0.1);
    return (
        <div
            ref={ref}
            className={`grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 py-8 ${bordered ? "border-t border-gray-200" : ""}`}
            style={{
                transition: "opacity 0.7s ease",
                opacity: visible ? 1 : 0,
            }}
        >
            {/* dot + label */}
            <div className="flex items-start gap-2 pt-1 min-w-[120px]">
                <span
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: dot }}
                />
                <p className="text-sm text-gray-700" style={{ fontFamily: "nb-thin" }}>
                    {label}
                </p>
            </div>
            {/* body */}
            <p className="text-base leading-relaxed text-gray-950" style={{ fontFamily: "nb-thin" }}>
                {body}
            </p>
        </div>
    );
}

// ─── main export ───────────────────────────────────────────────────────────
export default function Aboutquality() {
    const [imgRef, imgVisible] = useFadeIn(0.05);
    const [stmtRef, stmtVisible] = useFadeIn(0.1);

    return (
        <>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Inspiration&display=swap');`}</style>

            <section className=" bg-[#f3f3f3] relative overflow-hidden px-6 sm:px-12 lg:px-20 py-20">
                <div className="relative max-w-screen-xl mx-auto space-y-12">

                    {/* ── Block 1: Badge + display word + subtitle ── */}
                    <div className="flex flex-col gap-5 ">
                        <SectionBadge number={SECTION_NUMBER} label={SECTION_LABEL} />
                        {/* <DisplayWord word={DISPLAY_WORD} /> */}
                        <p
                            className="text-[1.5rem] sm:text-[1.9rem] leading-[1.2] text-gray-950 max-w-[420px]"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            {SUBTITLE}
                        </p>
                    </div>

                    {/* ── Block 2: Image left | first caption right ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        {/* Image */}
                        <div
                            ref={imgRef}
                            className="overflow-hidden rounded-sm"
                            style={{
                                transition: "opacity 0.9s ease, transform 0.9s ease",
                                opacity: imgVisible ? 1 : 0,
                                transform: imgVisible ? "scale(1)" : "scale(0.98)",
                            }}
                        >
                            <img
                                src={IMAGE_URL}
                                alt="Quality at work"
                                className="w-full object-cover"
                                style={{ maxHeight: "520px" }}
                                loading="lazy"
                            />
                        </div>

                        {/* Right — first caption row */}
                        <div className="flex flex-col justify-start gap-6 pt-2">
                            {/* red dot + label + body */}
                            <div className="grid grid-cols-[auto_1fr] gap-x-16 items-start">
                                <div className="flex items-center gap-2 pt-1">
                                    <span className="w-2 h-2 rounded-full bg-[#fda408] flex-shrink-0" />
                                    <p className="text-sm text-gray-700" style={{ fontFamily: "nb-thin" }}>
                                        {FIRST_CAPTION_LABEL}
                                    </p>
                                </div>
                                <p
                                    className="text-base leading-relaxed sm:text-[20px] text-gray-950"
                                    style={{ fontFamily: "nb-thin" }}
                                >
                                    {FIRST_CAPTION_BODY}
                                </p>
                            </div>

                            {/* "Our employees" heading — appears below body text */}
                            {/* <p
                className="text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] leading-[1.15] text-gray-950 mt-6"
                style={{ fontFamily: "nb-thin", whiteSpace: "pre-line" }}
              >
                {EMPLOYEES_HEADING}
              </p> */}
                        </div>
                    </div>

                    {/* ── Block 3: Empty left | "Our employees" heading + sub-rows right ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:-mt-40">
                        <div />
                        <div className="flex flex-col">

                            {/* Heading — no border, slightly larger */}
                            <p
                                className="text-[1.5rem] md:ms-37 sm:text-[2.4rem] lg:text-[1.75rem] leading-[1.15] text-gray-950 mb-6"
                                style={{ fontFamily: "nb-thin", whiteSpace: "pre-line" }}
                            >
                                {EMPLOYEES_HEADING}
                            </p>

                            {/* Sub rows — motivation + qualification only */}
                            {SUB_ROWS.filter(row => row.dot).map((row, i) => (
                                <CaptionRow key={i} dot={row.dot} label={row.label} body={row.body} bordered />
                            ))}
                        </div>
                    </div>

                    {/* ── Block 4: Bottom statement ── */}
                    <div
                        ref={stmtRef}
                        style={{
                            transition: "opacity 0.8s ease",
                            opacity: stmtVisible ? 1 : 0,
                        }}
                    >
                        <p
                            className="text-[1.3rem] sm:text-[2.5rem] lg:text-[2rem] leading-[1.15] text-gray-950 max-w-[640px]"
                            style={{ fontFamily: "nb-thin", whiteSpace: "pre-line" }}
                        >
                            {BOTTOM_STATEMENT}
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}