import { useEffect, useRef } from "react";

export default function PersonasYTalento() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const marqueeRef = useRef(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (!sectionRef.current || !imageRef.current || !marqueeRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionHeight = section.offsetHeight;
            const windowH = window.innerHeight;

            // Parallax: image slides up as you scroll down
            const scrollProgress =
                (window.scrollY - sectionTop + windowH) / (sectionHeight + windowH);
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
            const parallaxOffset = (clampedProgress - 0.5) * 120; // ±60px range
            imageRef.current.style.transform = `translateY(${parallaxOffset}px)`;

            // Marquee direction based on scroll direction
            const currentScrollY = window.scrollY;
            const direction = currentScrollY > lastScrollY ? -1 : 1;
            lastScrollY = currentScrollY;

            const marquee = marqueeRef.current;
            const current = parseFloat(marquee.dataset.offset || "0");
            const next = current + direction * 1.5;
            marquee.dataset.offset = next;
            marquee.style.transform = `translateX(${next % (marquee.scrollWidth / 2)}px)`;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const marqueeText = "DELIVERING WHAT MATTERS – RELIABLY AND RESPONSIBLY – ";

    return (
        <section
            ref={sectionRef}
            className="relative bg-[white] min-h-screen overflow-hidden"
        >

            {/* Main content grid */}
            <div className="max-w-[1400px] mx-auto px-10 pt-24 pb-20 grid grid-cols-2 gap-20 items-start">
                {/* Left: text content */}
                <div>
                    <p className="text-[#FD9708] text-[20px] tracking-widest uppercase mb-8" style={{ fontFamily: 'nb-thin' }}>
                        About Us
                    </p>

                    <p
                        className="text-[13px] text-[#333] leading-[1.7] max-w-[500px] text-left"
                        style={{ fontFamily: "nb-thin" }}
                    >
                        Luke Shipping is a logistics company focused on delivering reliable, efficient, and customer-oriented transport and supply chain solutions in a rapidly evolving global market. With strong industry experience and a growing operational network, we provide tailored services that ensure the smooth and timely movement of goods across regions.
                    </p>

                    <br />
                    <p
                        className="text-[13px] text-[#333] leading-[1.7] max-w-[500px] text-left"
                        style={{ fontFamily: "nb-thin" }}
                    >
                        Alongside our logistics operations, we offer Testing, Inspection, and Certification (TIC) services to support quality assurance, compliance, and safety throughout the supply chain. These services help our clients meet international standards, minimize risks, and maintain consistency in their operations.
                    </p>
                    <br />
                    <p
                        className="text-[13px] text-[#333] leading-[1.7] max-w-[500px] text-left mb-10"
                        style={{ fontFamily: "nb-thin" }}
                    >
                        Driven by professionalism, reliability, and continuous improvement, Luke Shipping is committed to simplifying logistics and supporting businesses in reaching their goals.       </p>

                    {/* CTA pill button */}
                    <button className="flex cursor-pointer items-center gap-2 border border-[#FD9708] rounded-full px-4 py-1.5 text-[#FD9708] text-xs tracking-widest uppercase hover:bg-[#FD9708] hover:text-white transition-colors duration-300" style={{ fontFamily: 'nb-thin' }}>
                        CONTACT US
                    </button>
                </div>

                {/* Right: parallax image */}
                <div className="overflow-hidden h-[400px] w-full">
                    <img
                        ref={imageRef}
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80"
                        alt="Team at work"
                        className="w-full h-[500px] object-cover transition-transform duration-75 ease-out"
                        style={{ willChange: "transform" }}
                    />
                </div>
            </div>

            {/* Marquee strip */}
            {/* <div className="mt-16 overflow-hidden border-t border-b border-transparent py-4">
        <div
          ref={marqueeRef}
          data-offset="0"
          className="flex whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-[#1a2040] text-5xl font-light tracking-tight mr-0"
              style={{
                fontFamily: "'Georgia', serif",
                WebkitTextStroke: "1px #1a2040",
                color: "transparent",
                letterSpacing: "0.02em",
              }}
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div> */}
        </section>
    );
}