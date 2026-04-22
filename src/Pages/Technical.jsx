import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserCheck, ClipboardCheck, TrendingUp, ShieldAlert, Clock, FileSearch, Users, Award } from "lucide-react";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Technicalsection from "../Components/Technicalsection";

export default function Technical() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [solidNav, setSolidNav] = useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const [activeMenu, setActiveMenu] = useState("main");
    const [servicesOpen, setServicesOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("challenges");
    const heroImgRef = useRef(null);

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

            // scroll-spy: highlight sidebar item based on scroll position
            const ids = ["challenges", "contact-us", "solution-finder", "related-resources"];
            for (let i = ids.length - 1; i >= 0; i--) {
                const el = document.getElementById(ids[i]);
                if (el && el.getBoundingClientRect().top <= 140) {
                    setActiveSection(ids[i]);
                    break;
                }
            }
            lastScroll = currentScroll;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const challenges = [
        {
            icon: <ClipboardCheck size={48} strokeWidth={1.2} color="#1a3fa8" />,
            title: "Regulatory or industry requirements",
            desc: "Regulatory, supply chain, and reputational requirements are vital to success. Our customised team with the right expertise will help you meet the requirements.",
        },
        {
            icon: <TrendingUp size={48} strokeWidth={1.2} color="#1a3fa8" />,
            title: "Identifying inefficiencies and areas of improvement",
            desc: "We align our auditing services to help you get to the root cause of inefficiencies and improve your organisation's integrity, efficiency, and stability.",
        },
        {
            icon: <ShieldAlert size={48} strokeWidth={1.2} color="#1a3fa8" />,
            title: "Risk management and prevention of compliance failures",
            desc: "Our audits of your operations, facilities, and supply chain identify risks and vulnerabilities so that you can manage them and achieve continuous improvement.",
        },
        {
            icon: <Clock size={48} strokeWidth={1.2} color="#1a3fa8" />,
            title: "Meeting tight timelines and project deadlines",
            desc: "Our experienced auditors work within your schedule to ensure timely delivery without compromising the thoroughness and quality of the audit process.",
        },
        {
            icon: <FileSearch size={48} strokeWidth={1.2} color="#1a3fa8" />,
            title: "Internal or external audit readiness",
            desc: "Whether preparing for a third-party review or strengthening internal controls, we provide structured guidance to ensure you're fully prepared and confident.",
        },
        {
            icon: <Users size={48} strokeWidth={1.2} color="#1a3fa8" />,
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
                } ${solidNav ? "bg-white text-black" : "bg-transparent text-white"}`}
                style={{ fontFamily: "nb-thin" }}
            >
                <div className="flex items-center justify-between w-full px-6 md:px-12 h-16">
                    <div onClick={() => { setMobileMenuOpen(false); setTimeout(() => navigate("/"), 1200); }} className="md:hidden flex items-center cursor-pointer">
                        <img src="/" alt="Logo" className="h-6" />
                    </div>
                    <div onClick={() => { setMobileMenuOpen(false); setTimeout(() => navigate("/"), 1200); }} className="hidden md:flex items-center cursor-pointer">
                        <img src="/" alt="" className="h-6" />
                    </div>
                    <div onClick={() => setMobileMenuOpen(true)} className="cursor-pointer md:hidden uppercase">Menu</div>
                    <div className="hidden md:flex space-x-8 uppercase">
                        <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                            <span className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">Services</span>
                            <div
                                className={`absolute top-full left-0 transition-all duration-200 ease-in-out ${servicesOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"}`}
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
                                        <div key={item.label} onClick={() => { setServicesOpen(false); setTimeout(() => navigate(item.path), 150); }} className="px-3 py-[5px] text-[12px] text-black cursor-pointer hover:text-[#FD9708] transition-colors duration-150" style={{ fontFamily: "nb-thin", letterSpacing: "0.01em" }}>
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
                className={`fixed top-0 right-0 h-full w-full bg-white z-[1000] transform transition-transform duration-500 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                style={{ fontFamily: "nb-thin" }}
            >
                <div className="flex items-center justify-between px-6 h-16 border-b border-black/10">
                    <span onClick={() => { if (activeMenu === "services") setActiveMenu("main"); else setMobileMenuOpen(false); }} className="text-[12px] cursor-pointer">
                        {activeMenu === "services" ? "← BACK" : "CLOSE"}
                    </span>
                    <span></span>
                    <span className="text-[12px]">CONTACT</span>
                </div>
                <div className="relative overflow-hidden h-full">
                    <div className={`flex w-[200%] transition-transform duration-500 ${activeMenu === "services" ? "-translate-x-1/2" : "translate-x-0"}`}>
                        <div className="w-1/2 px-6 pt-12">
                            <div className="space-y-2 text-[24px]">
                                <div onClick={() => setActiveMenu("services")} className="flex justify-between cursor-pointer"><span>Services</span><span>→</span></div>
                                <div className="flex justify-between"><span>Careers</span><span>→</span></div>
                                <div className="flex justify-between"><span>Our Team</span><span>→</span></div>
                                <div onClick={() => { setMobileMenuOpen(false); setActiveMenu("main"); setTimeout(() => navigate("/about"), 300); }} className="flex justify-between cursor-pointer"><span>About us</span><span>→</span></div>
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
                                    <p key={item.label} onClick={() => { setMobileMenuOpen(false); setActiveMenu("main"); setTimeout(() => navigate(item.path), 300); }} className="cursor-pointer">{item.label}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── HERO SECTION ───────────────────────────────────── */}
            <section className="h-[50vh] relative overflow-hidden" style={{ fontFamily: "nb-thin" }}>
                <img ref={heroImgRef} src="/cargo.jpg" alt="Auditing" className="absolute inset-0 w-full h-full object-cover origin-top" style={{ willChange: "transform" }} />
                <div className="absolute inset-0 bg-[black]/60"></div>

                {/* DESKTOP */}
                <div className="hidden md:flex absolute inset-0 items-end pb-24 px-16 text-white">
                    <div className="flex items-end justify-between w-full">
                        <div className="max-w-2xl">
                            <p className="text-sm mb-4 opacity-60">Home / Services / Technical Advisory</p>
                            <h1 className="text-6xl leading-tight">Technical Advisory</h1>
                            <p className="mt-4 max-w-xl text-sm opacity-75">
                            Optimise processes and manage safety, quality and sustainability risks through technical advisory solutions.
                            </p>
                            <div className="flex items-center gap-4 mt-8">
                                <button onClick={() => navigate("/contact")} className="bg-[#FD9708] hover:text-[#FD9708] text-[white] text-sm px-6 py-3 rounded-full hover:bg-black/80 transition-colors duration-200 cursor-pointer" style={{ fontFamily: "nb-thin" }}>
                                    Contact Us
                                </button>
                                <button onClick={() => navigate("/services")} className="border border-[#FD9708] hover:border-[black] text-[white] text-sm px-6 py-3 rounded-full hover:bg-black hover:text-[#FD9708] transition-all duration-200 cursor-pointer" style={{ fontFamily: "nb-thin" }}>
                                    Explore our services
                                </button>
                            </div>
                        </div>
                        <div className="flex-shrink-0 opacity-75 mb-2">
                            <Users size={150} strokeWidth={0.9} color="#FD9708" />
                        </div>
                    </div>
                </div>

                {/* MOBILE */}
                <div className="md:hidden absolute bottom-12 left-0 right-0 px-6 text-white">
                    <p className="text-[11px] mb-3 opacity-60">Home / Services / Technical Advisory</p>
                    <h1 className="text-3xl leading-tight mb-3">Technical Advisory</h1>
                    <p className="text-xs opacity-70 mb-5">Optimise processes and manage safety, quality and sustainability risks through technical advisory solutions.</p>
                    <div className="flex gap-3">
                        <button onClick={() => navigate("/contact")} className="bg-[#FD9708] text-[white] text-xs px-5 py-2 rounded-full cursor-pointer" style={{ fontFamily: "nb-thin" }}>Contact Us</button>
                        <button onClick={() => navigate("/services")} className="border border-[#FD9708] text-white text-xs px-5 py-2 rounded-full cursor-pointer" style={{ fontFamily: "nb-thin" }}>Explore services</button>
                    </div>
                </div>
            </section>
            <Technicalsection />
            <Banner />
            <Footer />
        </>
    );
}