import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../Components/About";
import Footer from "../Components/Footer";

export default function Warehousing() {
    const [shopOpen, setShopOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [solidNav, setSolidNav] = useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const [activeMenu, setActiveMenu] = useState("main");

    const navigate = useNavigate();

    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            setSolidNav(currentScroll > window.innerHeight * 0.85);

            if (currentScroll > lastScroll && currentScroll > 100) {
                setNavVisible(false);
            } else {
                setNavVisible(true);
            }

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section className="h-screen relative overflow-hidden">

                {/* BACKGROUND */}
                <img
                    src="/tic.jpg"
                    alt="Road Transport"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30"></div>

                {/* NAVBAR (UNCHANGED) */}
                <nav
                    className={`fixed top-0 left-0 w-full z-[999] text-[12px] transition-all duration-500 transform ${navVisible ? "translate-y-0" : "-translate-y-full"
                        } ${solidNav
                            ? "bg-white text-black"
                            : "bg-transparent text-white"
                        }`}
                    style={{ fontFamily: "nb-thin" }}
                >
                    <div className="flex items-center justify-between w-full px-6 md:px-12 h-16">

                        {/* MOBILE LEFT */}
                        <div
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setTimeout(() => navigate("/"), 1200);
                            }}
                            className="md:hidden flex items-center cursor-pointer"
                        >
                            <img src="/" alt="Logo" className="h-6" />
                        </div>

                        {/* LOGO */}
                        <div
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setTimeout(() => navigate("/"), 1200);
                            }}
                            className="hidden md:flex items-center cursor-pointer"
                        >
                            <img src="/" alt="" className="h-6" />
                        </div>

                        {/* MOBILE MENU */}
                        <div
                            onClick={() => setMobileMenuOpen(true)}
                            className="cursor-pointer md:hidden uppercase"
                        >
                            Menu
                        </div>

                        {/* DESKTOP MENU */}
                        <div className="hidden md:flex space-x-8 uppercase">
                            <span onClick={() => navigate("/about")} className="cursor-pointer">
                                Services
                            </span>
                            <span onClick={() => navigate("/about")} className="cursor-pointer">
                                About Us
                            </span>
                            <span onClick={() => navigate("/contact")} className="cursor-pointer">
                                Careers
                            </span>
                            <span onClick={() => navigate("/about")} className="cursor-pointer">
                                Our Team
                            </span>
                            <span>Contact Us</span>
                        </div>

                    </div>
                </nav>

                {/* DESKTOP HERO TEXT */}
                <div className="hidden md:flex absolute inset-0 items-end pb-35 px-12 text-left text-white" style={{ fontFamily: 'nb-thin' }}>
                    <div className="max-w-4xl">

                        <p className="text-sm mb-4 opacity-80">
                            Home / Services / Warehousing & Distribution
                        </p>

                        <h1 className="text-6xl md:text-6xl">
                        Logistics and order picking for efficient supply chains
                        </h1>

                        <div className="mt-6 max-w-xl text-sm opacity-90">
                        Whether it's distribution logistics, just-in-time delivery or value-added services: We tailor your warehouse processes.
                        </div>

                    </div>
                </div>

                {/* MOBILE HERO TEXT */}
                <div className="md:hidden absolute bottom-28 left-0 right-0 px-6 text-white">

                    <p className="text-[11px] mb-3 opacity-80">
                        Home / Services / Warehousing
                    </p>

                    <h1 className="text-3xl leading-tight mb-4">
                    Logistics and order picking for efficient supply chains
                    </h1>

                    <p className="text-xs opacity-90">
                    Whether it's distribution logistics, just-in-time delivery or value-added services: We tailor your warehouse processes.                    </p>

                </div>

                {/* BOTTOM BAR */}
                <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-6 text-white">

                    {/* LINE */}
                    <div className="w-full h-[1px] bg-white/40 mb-6 relative">

                    </div>

                    {/* CONTENT */}
                    <div className="flex items-center justify-between text-xs md:text-sm opacity-90" style={{ fontFamily: 'nb-thin' }}>

                        {/* LEFT */}
                        <div className="flex items-center gap-3">
                            <span className="text-lg">↓</span>
                            <span>About</span>
                        </div>

                        {/* CENTER */}
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#FD9708] rounded-full"></span>
                            <span>Warehousing & Distribution</span>
                        </div>

                    </div>

                </div>

            </section>

            {/* MOBILE MENU */}
            <div
                className={`fixed top-0 right-0 h-full w-full bg-white z-[1000] transform transition-transform duration-500 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-6 h-16 border-b border-black/10">

                    <span
                        onClick={() => {
                            if (activeMenu === "shop") setActiveMenu("main");
                            else setMobileMenuOpen(false);
                        }}
                        className="text-[12px] cursor-pointer"
                    >
                        CLOSE
                    </span>

                    <span></span>
                    <span className="text-[12px]">CONTACT</span>
                </div>

                <div className="px-6 pt-12 space-y-4 text-[24px]">
                    <div>Services →</div>
                    <div>Careers →</div>
                    <div>Our Team →</div>
                    <div onClick={() => navigate("/about")} className="cursor-pointer">
                        About us →
                    </div>
                </div>
            </div>

            <Footer />
        
        </>
    );
}