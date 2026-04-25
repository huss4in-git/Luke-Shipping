import { useRef, useEffect, useState } from "react";

// ─── data ──────────────────────────────────────────────────────────────────
const SECTION_NUMBER = "02";
const SECTION_LABEL = "trust";

const DISPLAY_WORD = "Vertrauen"; // swap to your word
const SUBTITLE = "What is particularly important to you is not entrusted to everyone.";

const CAPTION_LABEL = "entitlement";
const BODY_PARAGRAPHS = [
    "Our customers entrust us with things that are of great value to them. An element without which production stands still. An asset that must be handled with extreme care. A part that is assembled on time by a craftsman.",
    "You don't entrust these goods to everyone. When it comes down to it, quality beats any price — no matter how cheap. Luke stands for quality and reliability. And quality and reliability create trust.",
];

const RIGHT_IMAGE_URL = "/trust1.jpg";// your public folder image

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

// ─── Decorative SVG line art (right side) ──────────────────────────────────
function LineArt() {
    return (
        <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-30"
            aria-hidden
        >
            {/* large arc */}
            <path
                d="M 480 20 Q 180 20 20 480"
                stroke="#aaa"
                strokeWidth="0.8"
                fill="none"
            />
            {/* second arc */}
            <path
                d="M 500 80 Q 220 80 80 500"
                stroke="#aaa"
                strokeWidth="0.8"
                fill="none"
            />
            {/* dots at key intersections */}
            <circle cx="480" cy="20" r="4" fill="#bbb" />
            <circle cx="310" cy="160" r="4" fill="#bbb" />
            <circle cx="200" cy="340" r="4" fill="#bbb" />
        </svg>
    );
}

// ─── Big script display word ────────────────────────────────────────────────
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
                    fontSize: "clamp(5rem, 12vw, 10rem)",
                    lineHeight: 1,
                    display: "inline-block",
                    // cream fill
                    color: "#f5efcc",
                    // thick black 3-D extrusion via layered text-shadow
                    textShadow: `
            2px 2px 0 #111,
            4px 4px 0 #111,
            6px 6px 0 #111,
            8px 8px 0 #111,
            10px 10px 0 #111,
            12px 12px 0 #111,
            14px 14px 0 #111,
            0 0 0 #111
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

// ─── main export ───────────────────────────────────────────────────────────
export default function Aboutussecond() {
    const [bodyRef, bodyVisible] = useFadeIn(0.1);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inspiration&display=swap');
      `}</style>

            <section className="relative overflow-hidden px-6 sm:px-12 lg:px-20 py-20">
                <div className="relative max-w-screen-xl mx-auto">

                    {/* ── Row 1: left content + right line art ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">

                        {/* LEFT — badge, display word, subtitle */}
                        <div className="flex flex-col gap-6 z-10">
                            {/* Badge */}
                            <span
                                className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-xs tracking-widest text-gray-500 font-medium uppercase w-fit"
                                style={{ fontFamily: "nb-thin" }}
                            >
                                <span style={{ color: "#fda408" }}>{SECTION_NUMBER}</span>
                                {" "}—{" "}{SECTION_LABEL}
                            </span>

                            {/* Big italic script word */}
                            {/* <DisplayWord word={DISPLAY_WORD} /> */}

                            {/* Subtitle */}
                            <p
                                className="text-[1.4rem] sm:text-[1.75rem] leading-[1.25] text-gray-950 max-w-[480px]"
                                style={{ fontFamily: "nb-thin" }}
                            >
                                {SUBTITLE}
                            </p>
                        </div>

                        {/* RIGHT — decorative line art */}
                        <div className="hidden mt-15 lg:block relative h-[420px]">
                            {/* RIGHT — image */}
                            <div className="hidden lg:block relative h-[420px]">
                                <img
                                    src={RIGHT_IMAGE_URL}
                                    alt=""
                                    className="w-full h-full object-cover rounded-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ── Row 2: caption + body (right-aligned) ── */}
                    <div
                        ref={bodyRef}
                        className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                        style={{
                            transition: "opacity 0.7s ease",
                            opacity: bodyVisible ? 1 : 0,
                        }}
                    >
                        {/* Left col — red dot + label */}
                        <div className="flex items-center gap-2 lg:justify-end lg:pt-0.5">
                            <span className="w-2 h-2 rounded-full bg-[#fda408] flex-shrink-0" />
                            <p
                                className="text-[12px] text-gray-700"
                                style={{ fontFamily: "nb-thin" }}
                            >
                                {CAPTION_LABEL}
                            </p>
                        </div>

                        {/* Right col — paragraphs */}
                        <div className="space-y-6 ">
                            {BODY_PARAGRAPHS.map((para, i) => (
                                <p
                                    key={i}
                                    className="text-base sm:text-base leading-relaxed text-gray-950"
                                    style={{ fontFamily: "nb-thin" }}
                                >
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}