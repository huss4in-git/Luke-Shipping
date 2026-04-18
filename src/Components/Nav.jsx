import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solidNav, setSolidNav] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState("main");
  const [hoveredNav, setHoveredNav] = useState(null);

  const [servicesOpen, setServicesOpen] = useState(false);

  const heroImgRef = useRef(null);

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!serviceOpen) {
      setHoveredNav(null);
    }
  }, [serviceOpen]);

  const dimOthers = (item) => {
    if (!hoveredNav) return false;
    return hoveredNav !== item;
  };

  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section className="h-screen relative overflow-hidden">

        <img
         ref={heroImgRef}
          src="/shipping.jpg"
          alt="Heavy Industry Transport"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform" }}
        />

        <div className="absolute inset-0 bg-black/25"></div>

        {/* NAVBAR */}
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
                setServiceOpen(false);

                setTimeout(() => {
                  navigate("/");
                }, 1200);
              }}
              className="md:hidden flex items-center cursor-pointer"
            >
              <img
                src="/"
                alt="Logo"
                className="h-6"
              />
            </div>

            {/* LOGO LEFT (DESKTOP UNCHANGED) */}
            <div
              onClick={() => {
                setMobileMenuOpen(false);
                setServiceOpen(false);

                setTimeout(() => {
                  navigate("/");
                }, 1200);
              }}
              className="hidden md:flex items-center cursor-pointer"
            >
              <img
                src="/"
                alt=""
                className="h-6"
              />
            </div>

            {/* MOBILE RIGHT */}
            <div
              onClick={() => setMobileMenuOpen(true)}
              className="cursor-pointer md:hidden uppercase"
            >
              Menu
            </div>

            {/* DESKTOP RIGHT (UNCHANGED) */}
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
              <span
                onClick={() => {
                  setMobileMenuOpen(false);
                  setServiceOpen(false);

                  setTimeout(() => {
                    navigate("/about");
                  }, 700);
                }}
                className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]"
              >
                About Us
              </span>

              <span
                onClick={() => {
                  setMobileMenuOpen(false);
                  setServiceOpen(false);

                  setTimeout(() => {
                    navigate("/contact");
                  }, 500);
                }}
                className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]"
              >
                Careers
              </span>
              <span
                onClick={() => {
                  setMobileMenuOpen(false);
                  setServiceOpen(false);

                  setTimeout(() => {
                    navigate("/about");
                  }, 700);
                }}
                className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]"
              >
                Our Team
              </span>
              <span className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]">Contact Us</span>
            </div>

          </div>
        </nav>

        {/* HERO TEXT */}
        <div
          className="hidden md:flex absolute inset-0 items-center justify-center text-center text-white px-6"
          style={{ fontFamily: "nb-thin" }}
        >
          <div className="max-w-3xl">

            <h1 className="text-6xl md:text-7xl mb-6 leading-tight">
              Your Cargo, Our Mission <br /> Built On Trust
            </h1>

            <p className="text-lg max-w-xl mx-auto mb-8">
              Experience world-class transport of massive industrial loads — safely, globally and on time.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="bg-[#FD9708] text-black cursor-pointer px-10 py-4 text-[13px] rounded-full uppercase tracking-wide hover:bg-black hover:text-white transition"
            >
              Request a Quote
            </button>

          </div>
        </div>

        {/* MOBILE HERO */}
        <div className="md:hidden absolute left-0 right-0 bottom-50 flex flex-col items-center text-white text-center px-6" style={{ fontFamily: "nb-thin" }}>
          <h1 className="text-4xl mb-4">Your Cargo, <br /> Our Mission <br /> Built On Trust</h1>
          <p className="text-sm max-w-[260px] mb-6">
            Experience world-class transport of massive industrial loads — safely, globally and on time.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#FD9708] cursor-pointer text-black px-8 py-4 text-[11px] rounded-full uppercase tracking-wide hover:bg-black hover:text-white transition"
          >
            Request a Quote
          </button>
        </div>

      </section>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-[1000] transform transition-transform duration-500 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
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

          {/* REMOVED TEXT */}
          <span className="tracking-widest text-lg"></span>

          <span className="text-[12px]">CONTACT</span>
        </div>

        <div className="relative overflow-hidden h-full">
          <div className={`flex w-[200%] transition-transform duration-500 ${activeMenu === "services" ? "-translate-x-1/2" : "translate-x-0"}`}>

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

                    setTimeout(() => {
                      navigate("/about");
                    }, 300);
                  }}
                  className="flex justify-between cursor-pointer"
                >
                  <span>About us</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            <div className="w-1/2 px-6 pt-12 flex flex-col h-full">

              <div className="space-y-2 text-[24px]">
              {[
  { label: "Road", path: "/road" },
  { label: "Air", path: "/air" },
  { label: "Sea", path: "/sea" },
  { label: "Customs", path: "/customs" },
  { label: "Warehousing", path: "/warehousing" },
  { label: "Projects handling", path: "/projects" },
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
    </>
  );
}