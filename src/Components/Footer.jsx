import { FaFacebookF, FaInstagram, FaTiktok, FaSnapchatGhost, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/tic" },
    { name: "Our Team", path: "/about" },
    { name: "Tracking", path: "/tracking" },
    { name: "Careers", path: "/career" },
    { name: "Contact Us", path: "/contact" },
    { name: "Locations", path: "/" },
];

const Footer = () => {
    return (
        <footer className="bg-[white] relative overflow-hidden" style={{ fontFamily: "nb-thin" }}>

            {/* Top content */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-9 md:px-15 pt-14 md:pt-20">
                <div className="flex flex-col md:flex-row md:justify-between gap-12">

                    {/* Left */}
                    <div className="w-full md:w-[55%]">

                        {/* Follow us */}
                        <div className="mb-8 md:mb-10">
                            <h3 className="text-[16px] md:text-[17px] text-gray-900 mb-4 md:mb-5 flex items-center gap-1">
                                Follow us <span className="text-[#FD9708]">:</span>
                            </h3>

                            <div className="flex flex-wrap items-center gap-3">
                                <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#FD9708] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                    <FaFacebookF size={18} />
                                </a>
                                <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#FD9708] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                    <FaXTwitter size={18} />
                                </a>
                                <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#FD9708] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                    <FaInstagram size={18} />
                                </a>
                                <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#FD9708] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                    <FaLinkedinIn size={18} />
                                </a>
                                <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#FD9708] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                    <FaWhatsapp size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="mt-10 md:mt-16">
                            <h3 className="text-[16px] md:text-[17px] text-black mb-1">
                                Quick Links <span className="text-[#FD9708]">:</span>
                            </h3>

                            <div className="flex gap-4 mt-4 md:mt-5 mb-6 md:mb-7">
                                <a
                                    href="https://www.gocomet.com/online-container-tracking/details/d24799e2-c743-4d24-a1fe-cb857d6d8019?shared=true"
                                    className="flex items-center gap-2 bg-[#FD9708] rounded-full px-4 md:px-5 py-3 text-[11px] md:text-[12px] tracking-widest uppercase text-white hover:bg-[#FD9708] transition-colors duration-200" style={{ fontFamily: 'nb-thin' }}
                                >
                                    Track Shipment
                                </a>
                            </div>

                            <div className="grid grid-cols-3 md:grid-cols-4 gap-y-3">
                                {links.map((item, i) => (
                                    <Link
                                        key={i}
                                        to={item.path}
                                        className="text-[14px] text-gray-700 hover:text-[#FD9708] duration-300 font-medium whitespace-nowrap"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="w-full md:w-[260px]">
                        <h3 className="text-[16px] md:text-[17px] text-black mb-4 md:mb-5">
                            Contact <span className="text-[#FD9708]">:</span>
                        </h3>

                        <div className="space-y-2 md:space-y-3 text-[13px] md:text-[14px] text-gray-700">
                            <p className="font-medium">+966 58 278 0836</p>
                            <p>info@lukeshipping.com</p>
                            {/* <p className="leading-[1.6] md:leading-[1.7]">
                                Building # 6960 Ismail IBN Katheer<br />
                                Dist - Al Basatin - 5201 Jeddah : 23719<br />
                                Saudi Arabia
                            </p> */}
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-15 mt-14 md:mt-20 mb-8 md:mb-10 pb-6">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">

                    {/* Logo */}
                    {/* Logo */}
                    <div className="flex items-center gap-3 md:-ml-10 -ml-6">
                        <img src="/luke1.png" className="h-25 md:h-25" alt="" />
                    </div>

                    {/* Vision */}
                    <div className="flex justify-center md:ms-15 items-center">
                        <img
                            src="/vision.svg"
                            alt="Vision 2030"
                            className="w-[140px] md:w-[180px] object-contain"
                        />
                    </div>

                    {/* CR */}
                    <div className="text-[11px] md:text-[12px] text-gray-500">
                        <p>CR :- 0000000000 | VAT :- 000000000000000
                        </p>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;