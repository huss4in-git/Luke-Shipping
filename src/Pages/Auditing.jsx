import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserCheck } from "lucide-react";

export default function Auditing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [solidNav, setSolidNav] = useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const [activeMenu, setActiveMenu] = useState("main");
    const [servicesOpen, setServicesOpen] = useState(false);
    const heroImgRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        let lastScroll = 0;
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setSolidNav(currentScroll > window.innerHeight * 0.45);
            if (currentScroll > lastScroll && currentScroll > 100) {
                setNavVisible(false);
            } else {
                setNavVisible(true);
            }

            if (heroImgRef.current) {
                heroImgRef.current.style.transform = `translateY(${currentScroll * 0.2}px)`;
            }
            lastScroll = currentScroll;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const challenges = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="6" width="28" height="36" rx="2" stroke="#1a3fa8" strokeWidth="2" fill="none"/>
                    <path d="M14 16h16M14 22h16M14 28h10" stroke="#1a3fa8" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="35" cy="35" r="8" fill="none" stroke="#00c97a" strokeWidth="2"/>
                    <path d="M31.5 35l2.5 2.5 4-4" stroke="#00c97a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Regulatory or industry requirements",
            desc: "Regulatory, supply chain, and reputational requirements are vital to success. Our customised team with the right expertise will help you meet the requirements.",
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="6" y="28" width="8" height="14" rx="1" fill="none" stroke="#1a3fa8" strokeWidth="2"/>
                    <rect x="20" y="20" width="8" height="22" rx="1" fill="none" stroke="#1a3fa8" strokeWidth="2"/>
                    <rect x="34" y="12" width="8" height="30" rx="1" fill="none" stroke="#1a3fa8" strokeWidth="2"/>
                    <circle cx="10" cy="16" r="3" fill="none" stroke="#00c97a" strokeWidth="2"/>
                    <circle cx="24" cy="10" r="3" fill="none" stroke="#00c97a" strokeWidth="2"/>
                    <path d="M13 14l8-3" stroke="#00c97a" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            ),
            title: "Identifying inefficiencies and areas of improvement",
            desc: "We align our auditing services to help you get to the root cause of inefficiencies and improve your organisation's integrity, efficiency, and stability.",
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="6" y="28" width="8" height="14" rx="1" fill="none" stroke="#1a3fa8" strokeWidth="2"/>
                    <rect x="20" y="20" width="8" height="22" rx="1" fill="none" stroke="#1a3fa8" strokeWidth="2"/>
                    <rect x="34" y="12" width="8" height="30" rx="1" fill="none" stroke="#1a3fa8" strokeWidth="2"/>
                    <path d="M8 26l10-8 8 6 10-14" stroke="#1a3fa8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Risk management and prevention of compliance failures",
            desc: "Our audits of your operations, facilities, and supply chain identify risks and vulnerabilities so that you can manage them and achieve continuous improvement.",
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="16" fill="none" stroke="#1a3fa8" strokeWidth="2"/>
                    <path d="M24 14v10l6 4" stroke="#00c97a" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            title: "Meeting tight timelines and project deadlines",
            desc: "Our experienced auditors work within your schedule to ensure timely delivery without compromising the thoroughness and quality of the audit process.",
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M10 38l8-16 8 10 6-8 6 14" stroke="#1a3fa8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 10h36" stroke="#00c97a" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 10v32" stroke="#1a3fa8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            title: "Internal or external audit readiness",
            desc: "Whether preparing for a third-party review or strengthening internal controls, we provide structured guidance to ensure you're fully prepared and confident.",
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="18" cy="20" r="8" fill="none" stroke="#1a3fa8" strokeWidth="2"/>
                    <circle cx="30" cy="20" r="8" fill="none" stroke="#1a3fa8" strokeWidth="2"/>
                    <path d="M10 38c0-5 3.6-8 8-8s8 3 8 3 4-3 8-3 8 3 8 8" stroke="#00c97a" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            title: "Building stakeholder confidence and trust",
            desc: "Independent, credible audit outcomes strengthen relationships with regulators, investors, and customers — demonstrating your commitment to transparency.",
        },
    ];

    return (
        <>
            {/* ── NAVBAR ─────────────────────────────────────────── */}
            <nav
                className={`fixed top-0 left-0 w-full z-[999] text-[12px] transition-all duration-500 transform ${
                    navVisible ? "translate-y-0" : "-translate-y-full"
                } ${solidNav ? "bg-white text-black shadow-sm" : "bg-transparent text-black"}`}
                style={{ fontFamily: "nb-thin" }}
            >
                <div className="flex items-center justify-between w-full px-6 md:px-12 h-16">
                    <div
                        onClick={() => { setMobileMenuOpen(false); setTimeout(() => navigate("/"), 1200); }}
                        className="md:hidden flex items-center cursor-pointer"
                    >
                        <img src="/" alt="Logo" className="h-6" />
                    </div>
                    <div
                        onClick={() => { setMobileMenuOpen(false); setTimeout(() => navigate("/"), 1200); }}
                        className="hidden md:flex items-center cursor-pointer"
                    >
                        <img src="/" alt="" className="h-6" />
                    </div>
                    <div onClick={() => setMobileMenuOpen(true)} className="cursor-pointer md:hidden uppercase">
                        Menu
                    </div>
                    <div className="hidden md:flex space-x-8 uppercase">
                        <div
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <span className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">
                                Services
                            </span>
                            <div
                                className={`absolute top-full left-0 transition-all duration-200 ease-in-out ${
                                    servicesOpen
                                        ? "opacity-100 pointer-events-auto translate-y-0"
                                        : "opacity-0 pointer-events-none -translate-y-2"
                                }`}
                                style={{ paddingTop: "12px" }}
                            >
                                <div style={{ minWidth: "180px", background: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.10)", borderRadius: "3px", padding: "8px 0" }}>
                                    {[
                                        { label: "TIC Services", path: "/tic" },
                                        { label: "Road", path: "/road" },
                                        { label: "Air", path: "/air" },
                                        { label: "Sea", path: "/sea" },
                                        { label: "Customs", path: "/customs" },
                                        { label: "Warehousing", path: "/warehousing" },
                                        { label: "Projects handling", path: "/projects" },
                                        { label: "Auditing", path: "/auditing" },
                                    ].map((item) => (
                                        <div
                                            key={item.label}
                                            onClick={() => { setServicesOpen(false); setTimeout(() => navigate(item.path), 150); }}
                                            className="px-3 py-[5px] text-[12px] text-black cursor-pointer hover:text-[#FD9708] transition-colors duration-150"
                                            style={{ fontFamily: "nb-thin", letterSpacing: "0.01em" }}
                                        >
                                            {item.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <span onClick={() => navigate("/about")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">About Us</span>
                        <span onClick={() => navigate("/contact")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">Careers</span>
                        <span onClick={() => navigate("/about")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">Our Team</span>
                        <span onClick={() => navigate("/")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">Contact Us</span>
                    </div>
                </div>
            </nav>

            {/* ── MOBILE MENU DRAWER ─────────────────────────────── */}
            <div
                className={`fixed top-0 right-0 h-full w-full bg-white z-[1000] transform transition-transform duration-500 ${
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ fontFamily: "nb-thin" }}
            >
                <div className="flex items-center justify-between px-6 h-16 border-b border-black/10">
                    <span
                        onClick={() => { if (activeMenu === "services") setActiveMenu("main"); else setMobileMenuOpen(false); }}
                        className="text-[12px] cursor-pointer"
                    >
                        {activeMenu === "services" ? "← BACK" : "CLOSE"}
                    </span>
                    <span></span>
                    <span className="text-[12px]">CONTACT</span>
                </div>
                <div className="relative overflow-hidden h-full">
                    <div className={`flex w-[200%] transition-transform duration-500 ${activeMenu === "services" ? "-translate-x-1/2" : "translate-x-0"}`}>
                        <div className="w-1/2 px-6 pt-12">
                            <div className="space-y-2 text-[24px]">
                                <div onClick={() => setActiveMenu("services")} className="flex justify-between cursor-pointer">
                                    <span>Services</span><span>→</span>
                                </div>
                                <div className="flex justify-between"><span>Careers</span><span>→</span></div>
                                <div className="flex justify-between"><span>Our Team</span><span>→</span></div>
                                <div onClick={() => { setMobileMenuOpen(false); setActiveMenu("main"); setTimeout(() => navigate("/about"), 300); }} className="flex justify-between cursor-pointer">
                                    <span>About us</span><span>→</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 px-6 pt-12">
                            <div className="space-y-2 text-[24px]">
                                {[
                                    { label: "TIC Service", path: "/tic" },
                                    { label: "Road Freight", path: "/road" },
                                    { label: "Air Freight", path: "/air" },
                                    { label: "Sea Freight", path: "/sea" },
                                    { label: "Customs Clearance", path: "/customs" },
                                    { label: "Warehousing & Distribution", path: "/warehousing" },
                                    { label: "Projects Handling", path: "/projects" },
                                    { label: "Auditing", path: "/auditing" },
                                ].map((item) => (
                                    <p key={item.label} onClick={() => { setMobileMenuOpen(false); setActiveMenu("main"); setTimeout(() => navigate(item.path), 300); }} className="cursor-pointer">
                                        {item.label}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── HERO SECTION ───────────────────────────────────── */}
            <section className="h-[50vh] relative overflow-hidden" style={{ fontFamily: "nb-thin" }}>

                {/* PARALLAX IMAGE */}
                <img
                    ref={heroImgRef}
                    src="/cargo.jpg"
                    alt="Auditing"
                    className="absolute inset-0 w-full h-full object-cover origin-top"
                    style={{ willChange: "transform" }}
                />

                {/* YELLOW TINT OVERLAY */}
                <div className="absolute inset-0 bg-[#FD9708]/70"></div>

                {/* DESKTOP — lifted content, no underline */}
                <div className="hidden md:flex absolute inset-0 items-end pb-24 px-12 text-black">
                    <div className="flex items-end justify-between w-full">

                        {/* LEFT: text + buttons */}
                        <div className="max-w-2xl">
                            <p className="text-sm mb-4 opacity-60">
                                Home / Services / Auditing
                            </p>
                            <h1 className="text-6xl leading-tight">
                                Auditing
                            </h1>
                            <p className="mt-4 max-w-xl text-sm opacity-75">
                            Our expert assessments help organisations improve operations, reduce risks, and maintain a competitive edge amidst industrial and regulatory challenges.                            </p>

                            {/* BUTTONS — gap-4 between them, no underline */}
                            <div className="flex items-center gap-4 mt-8">
                                <button
                                    onClick={() => navigate("/contact")}
                                    className="bg-black text-[#FD9708] text-xs px-6 py-2.5 rounded-full hover:bg-black/80 transition-colors duration-200 cursor-pointer"
                                    style={{ fontFamily: "nb-thin" }}
                                >
                                    Contact Us
                                </button>
                                <button
                                    onClick={() => navigate("/services")}
                                    className="border border-black text-black text-xs px-6 py-2.5 rounded-full hover:bg-black hover:text-[#FD9708] transition-all duration-200 cursor-pointer"
                                    style={{ fontFamily: "nb-thin" }}
                                >
                                    Explore our services
                                </button>
                            </div>
                        </div>

                        {/* RIGHT: UserCheck lucide icon */}
                        <div className="flex-shrink-0 opacity-75 mb-2">
                            <UserCheck size={190} strokeWidth={0.9} color="#000" />
                        </div>

                    </div>
                </div>

                {/* MOBILE HERO TEXT */}
                <div className="md:hidden absolute bottom-12 left-0 right-0 px-6 text-black">
                    <p className="text-[11px] mb-3 opacity-60">Home / Services / Auditing</p>
                    <h1 className="text-3xl leading-tight mb-3">
                        Auditing
                    </h1>
                    <p className="text-xs opacity-70 mb-5">
                        Expert assessments to reduce risks and meet regulatory requirements.
                    </p>
                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate("/contact")}
                            className="bg-black text-[#FD9708] text-xs px-5 py-2 rounded-full cursor-pointer"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Contact Us
                        </button>
                        <button
                            onClick={() => navigate("/services")}
                            className="border border-black text-black text-xs px-5 py-2 rounded-full cursor-pointer"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Explore services
                        </button>
                    </div>
                </div>

            </section>

            {/* ── COMMON CHALLENGES ──────────────────────────────── */}
            <section className="bg-white py-20 px-6 md:px-16" style={{ fontFamily: "nb-thin" }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">

                    {/* Sticky sidebar */}
                    <aside className="hidden md:block w-48 flex-shrink-0">
                        <div className="sticky top-24 space-y-3 text-sm border-l-2 border-gray-100 pl-4">
                            {["Challenges", "Contact us", "Solution finder", "Related resources"].map((item, i) => (
                                <div
                                    key={item}
                                    className={`cursor-pointer transition-colors duration-150 ${i === 0 ? "text-[#1a3fa8] font-semibold" : "text-gray-400 hover:text-[#1a3fa8]"}`}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Main content */}
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                            Common challenges
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {challenges.map((c, i) => (
                                <div key={i} className="flex flex-col gap-4">
                                    <div className="w-14 h-14">{c.icon}</div>
                                    <h3 className="text-base font-bold text-gray-900 leading-snug">{c.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA STRIP ──────────────────────────────────────── */}
            <section className="bg-[#1a3fa8] text-white py-16 px-6 md:px-16 text-center" style={{ fontFamily: "nb-thin" }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to strengthen your audit process?</h2>
                <p className="text-base opacity-75 mb-8 max-w-xl mx-auto">
                    Speak with our auditing specialists today and discover how we can help your organisation stay compliant and competitive.
                </p>
                <button
                    onClick={() => navigate("/contact")}
                    className="bg-[#FD9708] text-black font-semibold px-10 py-3 rounded-full text-sm hover:bg-[#e88800] transition-colors duration-200 cursor-pointer"
                >
                    Get in touch
                </button>
            </section>
        </>
    );
}