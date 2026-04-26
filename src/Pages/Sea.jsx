import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Seainfo from "../Components/Seainfo";
import Seafeatures from "../Components/Seafeatures";
import Banner from "../Components/Banner";
import Seaadd from "../Components/Seaadd";
import Seafaq from "../Components/Seafaq";

export default function Road() {
    const [shopOpen, setShopOpen] = useState(false);
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

            setSolidNav(currentScroll > window.innerHeight * 0.85);

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

    return (
        <>
            {/* HERO SECTION */}
            <section className="h-screen relative overflow-hidden">

                {/* BACKGROUND — add ref and remove transition on transform */}
                <img
                    ref={heroImgRef}
                    src="/sea1.jpg"
                    alt="Road Transport"
                    className="absolute inset-0 w-full h-full object-cover origin-top"
                    style={{ willChange: "transform" }}
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
                            <img src="/logo.png" alt="Logo" className="h-9" />
                        </div>

                        {/* LOGO */}
                        <div
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setTimeout(() => navigate("/"), 1200);
                            }}
                            className="hidden md:flex items-center cursor-pointer"
                        >
                            <img src="/logo.png" alt="" className="h-10" />
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
                        <div
                                className="relative"
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                <span className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">
                                    Services
                                </span>

                                {/* DROPDOWN */}
                                <div
                                    className={`absolute top-full left-0 transition-all duration-200 ease-in-out ${servicesOpen
                                            ? "opacity-100 pointer-events-auto translate-y-0"
                                            : "opacity-0 pointer-events-none -translate-y-2"
                                        }`}
                                    style={{ paddingTop: "12px" }}
                                >
                                    <div
                                        style={{
                                            minWidth: "180px",
                                            background: "white",
                                            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                                            borderRadius: "3px",
                                            padding: "8px 0",
                                        }}
                                    >
                                        {[
                                            { label: "TIC Services", path: "/tic" },
                                            { label: "Road", path: "/road" },
                                            { label: "Air", path: "/air" },
                                            { label: "Sea", path: "/sea" },
                                            { label: "Customs", path: "/customs" },
                                            { label: "Warehousing", path: "/warehousing" },
                                            { label: "Projects handling", path: "/projects" },
                                        ].map((item) => (
                                            <div
                                                key={item.label}
                                                onClick={() => {
                                                    setServicesOpen(false);
                                                    setTimeout(() => navigate(item.path), 150);
                                                }}
                                                className="px-3 py-[5px] text-[12px] text-black cursor-pointer hover:text-[#FD9708] transition-colors duration-150"
                                                style={{ fontFamily: "nb-thin", letterSpacing: "0.01em" }}
                                            >
                                                {item.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <span onClick={() => navigate("/about")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">
                                About Us
                            </span>
                            <span onClick={() => navigate("/contact")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">
                                Careers
                            </span>
                            <span onClick={() => navigate("/about")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">
                                Our Team
                            </span>
                            <span onClick={() => navigate("/")} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">
                                Contact Us
                            </span>
                        </div>

                    </div>
                </nav>

                {/* DESKTOP HERO TEXT */}
                <div className="hidden md:flex absolute inset-0 items-end pb-35 px-12 text-left text-white" style={{ fontFamily: 'nb-thin' }}>
                    <div className="max-w-4xl">

                        <p className="text-sm mb-4 opacity-80">
                        <Link to="/" className="hover:text-[#FD9708] transition-colors">Home</Link>
                                {" / "}
                                <span>Services</span>
                                {" / "}
                                <span>Sea</span>
                        </p>

                        <h1 className="text-6xl md:text-6xl">
                        Sea freight and container transport for international trade
                        </h1>

                        <div className="mt-6 max-w-xl text-sm opacity-90">
                            <span style={{ color: '#FD9708' }}>Luke Shipping Co.</span> offers reliable and tailor-made sea freight solutions for FCL, LCL and multimodal transport. We connect important economic centers worldwide with first-class and personal service.
                        </div>

                    </div>
                </div>

                {/* MOBILE HERO TEXT */}
                <div className="md:hidden absolute bottom-28 left-0 right-0 px-6 text-white" style={{fontFamily:'nb-thin'}}>

                    <p className="text-[11px] mb-3 opacity-80">
                    <Link to="/" className="hover:text-[#FD9708] transition-colors">Home</Link>
                                {" / "}
                                <span>Services</span>
                                {" / "}
                                <span>Sea</span>
                    </p>

                    <h1 className="text-3xl leading-tight mb-4">
                    Sea freight and <br/>
                     container transport <br />
                      for international trade
                    </h1>

                    <p className="text-xs opacity-90">
                    We offer reliable and tailor-made sea freight solutions for FCL, LCL and multimodal transport. We connect important economic centers worldwide with first-class and personal service.
                    </p>

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
                            <span>Sea</span>
                        </div>

                    </div>

                </div>

            </section>

            {/* MOBILE MENU */}
            {/* MOBILE MENU DRAWER */}
<div
  className={`fixed top-0 right-0 h-full w-full bg-white z-[1000] transform transition-transform duration-500 ${
    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
  style={{ fontFamily: "nb-thin" }}
>
  <div className="flex items-center justify-between px-6 h-16 border-b border-black/10">

    <span
      onClick={() => {
        if (activeMenu === "services") setActiveMenu("main");
        else setMobileMenuOpen(false);
      }}
      className="text-[12px] cursor-pointer"
    >
      {activeMenu === "services" ? "← BACK" : "CLOSE"}
    </span>

    <span></span>

    <span className="text-[12px]">CONTACT</span>
  </div>

  <div className="relative overflow-hidden h-full">
    <div
      className={`flex w-[200%] transition-transform duration-500 ${
        activeMenu === "services"
          ? "-translate-x-1/2"
          : "translate-x-0"
      }`}
    >

      {/* MAIN MENU */}
      <div className="w-1/2 px-6 pt-12">
        <div className="space-y-2 text-[24px]">

          <div
            onClick={() => setActiveMenu("services")}
            className="flex justify-between cursor-pointer"
          >
            <span>Services</span>
            <span>→</span>
          </div>

          <div className="flex justify-between">
            <span>Careers</span>
            <span>→</span>
          </div>

          <div className="flex justify-between">
            <span>Our Team</span>
            <span>→</span>
          </div>

          <div
            onClick={() => {
              setMobileMenuOpen(false);
              setActiveMenu("main");
              setTimeout(() => navigate("/about"), 300);
            }}
            className="flex justify-between cursor-pointer"
          >
            <span>About us</span>
            <span>→</span>
          </div>

        </div>
      </div>

      {/* SERVICES MENU */}
      <div className="w-1/2 px-6 pt-12 flex flex-col h-full">
        <div className="space-y-2 text-[24px]">

          {[
            { label: "TIC Service", path: "/tic" },
            { label: "Road Freight", path: "/road" },
            { label: "Air Freight", path: "/air" },
            { label: "Sea Freight", path: "/sea" },
            { label: "Customs Clearance", path: "/customs" },
            { label: "Warehousing & Distribution", path: "/warehousing" },
            { label: "Projects Handling", path: "/projects" },
          ].map((item) => (
            <p
              key={item.label}
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveMenu("main");
                setTimeout(() => navigate(item.path), 300);
              }}
              className="cursor-pointer"
            >
              {item.label}
            </p>
          ))}

        </div>
      </div>

    </div>
  </div>
</div>

            <Seainfo />
            <Seafeatures />
            <Seaadd />
            <Seafaq />
            <Banner />
            <Footer />
        
        </>
    );
}