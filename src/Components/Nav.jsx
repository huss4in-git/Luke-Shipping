import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solidNav, setSolidNav] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState("main");
  const [hoveredNav, setHoveredNav] = useState(null);

  const shopItems = [
    "Available Coffees",
    "Seasonal Lots",
    "Find Your Coffee",
    "Wholesale & Sourcing",
    "Partner With Us",
  ];

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

  useEffect(() => {
    if (!shopOpen) {
      setHoveredNav(null);
    }
  }, [shopOpen]);

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
          src="/shipping.jpg"
          alt="Heavy Industry Transport"
          className="absolute inset-0 w-full h-full object-cover"
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
                setShopOpen(false);

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
                setShopOpen(false);

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
              <span
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShopOpen(false);

                  setTimeout(() => {
                    navigate("/about");
                  }, 700);
                }}
                className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#FD9708]"
              >
                Services
              </span>
              <span
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShopOpen(false);

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
                  setShopOpen(false);

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
                  setShopOpen(false);

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
              if (activeMenu === "shop") setActiveMenu("main");
              else setMobileMenuOpen(false);
            }}
            className="text-[12px] cursor-pointer"
          >
            {activeMenu === "shop" ? "← SHOP" : "CLOSE"}
          </span>

          {/* REMOVED TEXT */}
          <span className="tracking-widest text-lg"></span>

          <span className="text-[12px]">CONTACT</span>
        </div>

        <div className="relative overflow-hidden h-full">
          <div className={`flex w-[200%] transition-transform duration-500 ${activeMenu === "shop" ? "-translate-x-1/2" : "translate-x-0"}`}>

            <div className="w-1/2 px-6 pt-12">
              <div className="space-y-2 text-[24px]">
                <div
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
                {shopItems.map((item, i) => (
                  <p key={i} className="cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-30">
                <p className="text-[11px] uppercase mb-4 tracking-wide">
                  Get Inspired
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <img src="/cf1.jpg" className="w-full h-[180px] object-cover" />
                  </div>

                  <div>
                    <img src="/coffee1.jpeg" className="w-full h-[180px] object-cover" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}