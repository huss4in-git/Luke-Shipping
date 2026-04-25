import { useRef, useEffect, useState } from "react";

// ─── data ──────────────────────────────────────────────────────────────────
const SECTION_NUMBER = "01";
const SECTION_LABEL  = "Why Luke";

const HEADLINES = [
  "We always have big plans and strong goals for both the company and our people.",
  "We've been around since 2015 and have come a long way in more than 11 years.",
];

const CAPTION_LABEL = "Our vision for a strong future.";
const CAPTION_BODY  =
  "Luke stands for independence, tradition and future. As a company, we combine our established corporate culture with a cross-generational orientation. Through targeted investments, we ensure our independence and future viability — for sustainable success and reliable partnerships.";

// Replace with your actual image URL / import
const IMAGE_URL =
  "/about.jpg";

// ─── helpers ───────────────────────────────────────────────────────────────
function useFadeIn(threshold = 0.15) {
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
    <span className="inline-flex bg-white items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-xs tracking-widest text-gray-500 font-medium uppercase">
      <span style={{color:'#fda408'}}>{number}</span> — {label}
    </span>
  );
}

function Watermark({ char }) {
  return (
    <span
      aria-hidden
      className="
        absolute right-0 top-[-2rem] select-none pointer-events-none
        text-[22rem] leading-none font-black tracking-tighter
        text-transparent
      "
      style={{
        WebkitTextStroke: "1.5px #d1d1d1",
        opacity: 0.45,
        fontFamily: "nb-thin",
      }}
    >
      {char}
    </span>
  );
}

function HeadlineBlock({ lines }) {
  const [ref, visible] = useFadeIn(0.1);
  return (
    <div ref={ref} className="space-y-6">
      {lines.map((line, i) => (
        <p
          key={i}
          className="
            text-[1.5rem] sm:text-[2.4rem] lg:text-[1.75rem]
            leading-[1.15] 
            transition-all duration-700
          "
          style={{
            fontFamily: "nb-thin",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transitionDelay: `${i * 120}ms`,
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function PhotoBlock({ src, alt }) {
  const [ref, visible] = useFadeIn(0.05);
  return (
    <div
      ref={ref}
      className="w-full overflow-hidden rounded-sm"
      style={{
        transition: "opacity 0.9s ease, transform 0.9s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.98)",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full object-cover"
        style={{ maxHeight: "560px" }}
        loading="lazy"
      />
    </div>
  );
}

function CaptionRow({ label, body }) {
  const [ref, visible] = useFadeIn(0.1);
  return (
    <div
      ref={ref}
      className="
        pt-10 border-t border-gray-200
        grid grid-cols-1 lg:grid-cols-2 gap-8 items-start
      "
      style={{
        transition: "opacity 0.7s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* left — label */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#fda408] flex-shrink-0" />
        <p
          className="text-sm text-gray-700"
          style={{ fontFamily: "nb-thin" }}
        >
          {label}
        </p>
      </div>

      {/* right — body */}
      <p
        className="text-sm sm:text-base leading-relaxed text-gray-600"
        style={{ fontFamily: "nb-thin" }}
      >
        {body}
      </p>
    </div>
  );
}

// ─── main export ───────────────────────────────────────────────────────────
export default function WhySection() {
  return (
    <>
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap');`}</style>

      <section
        className="relative bg-[#f3f3f3] px-6 sm:px-12 lg:px-20 py-20 overflow-hidden"
      >
        {/* ── top: badge + headlines + watermark ── */}
        <div className="relative max-w-screen-xl mx-auto">
          {/* Watermark — absolute, right side */}
          {/* <Watermark char="L" /> */}

          {/* Badge */}
          <div className="mb-10">
            <SectionBadge number={SECTION_NUMBER} label={SECTION_LABEL} />
          </div>

          {/* Headlines — constrained to ~55% width so watermark shows */}
          <div className="max-w-[58%] min-w-[320px]">
            <HeadlineBlock lines={HEADLINES} />
          </div>

          {/* Spacer */}
          <div className="mt-14" />

          {/* Photo */}
          <PhotoBlock src={IMAGE_URL} alt="Container" />

          {/* Caption row */}
          <div className="mt-10">
            <CaptionRow label={CAPTION_LABEL} body={CAPTION_BODY} />
          </div>
        </div>
      </section>
    </>
  );
}