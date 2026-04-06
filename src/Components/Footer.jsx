import { FaFacebookF, FaInstagram, FaTiktok, FaSnapchatGhost, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f0f0f0] relative overflow-hidden" style={{ fontFamily: "nb-thin" }}>


      {/* Top content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-10 pt-12">
        <div className="flex justify-between">

          {/* Left: Follow us + Quick Links */}
          <div className="w-[55%]">
            {/* Follow us */}
            <div className="mb-10">
              <h3 className="text-[17px] text-gray-900 mb-1 flex items-center gap-1">
                Follow us on:
              </h3>
              <div className="w-[95px] h-[1px] bg-yellow-400 mb-4" />
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a href="#" className="w-[42px] h-[42px] rounded-full bg-[black] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <FaFacebookF size={18} />
                </a>
                {/* X/Twitter */}
                <a href="#" className="w-[42px] h-[42px] rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <FaXTwitter size={18} />
                </a>
                {/* Instagram */}
                <a href="#" className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  style={{ background: "black" }}>
                  <FaInstagram size={18} />
                </a>
                {/* LinkedIn */}
                <a href="#" className="w-[42px] h-[42px] rounded-full bg-[black] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <FaLinkedinIn size={18} />
                </a>
                {/* WhatsApp */}
                <a href="#" className="w-[42px] h-[42px] rounded-full bg-[black] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-16">
              <h3 className="text-[17px] text-gray-900 mb-1">Quick Links</h3>
              <div className="w-[85px] h-[1px] bg-yellow-400 mb-6" />

              {/* CTA Buttons */}
              <div className="flex gap-4 mb-7">
                <a
                  href="#"
                  className="flex items-center gap-2 border border-gray-800 rounded-full px-5 py-2 text-[12px]  tracking-widest uppercase text-gray-900 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                  Track Shipment
                </a>
              </div>

              {/* Nav Links Grid */}
              <div className="grid grid-cols-4 gap-y-3">
                {[
                  "Home", "About Us", "Services", "Certifications",
                  "Tracking", "Career", "Contact Us", "Locations", "",
                ].map((item, i) => (
                  item ? (
                    <a
                      key={i}
                      href="#"
                      className="text-[13px] text-gray-700 hover:text-gray-900 font-medium transition-colors duration-150 whitespace-nowrap"
                    >
                      {item}
                    </a>
                  ) : <span key={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Quick Contact */}
          <div className="w-[260px]">
            <h3 className="text-[17px] text-gray-900 mb-1">Quick Contact</h3>
            <div className="w-[105px] h-[1px] bg-yellow-400 mb-6" />
            <div className="space-y-3 text-[14px] text-gray-700">
              <p className="font-medium">+966 58 278 0836</p>
              <p className="mt-2">info@lukeshipping.com.sa</p>
              <p className="mt-2 leading-[1.7]">
                Building # 6960 Ismail IBN Katheer<br />
                Dist - Al Basatin - 5201 Jeddah : 23719<br />
                Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-10 mt-20 pb-6">
        <div className="flex items-end justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Luke Icon */}
            <img src="/air1.png" className="h-10" alt="" />
            <div>
               
              <p className="text-[15px]  text-gray-900 leading-tight tracking-wide uppercase">
                Luke Shipping Co.
              </p>
              {/* <p className="text-[11px] text-gray-500 leading-tight" dir="rtl">
                شركة اتش ال اس للحلول اللوجستية
              </p> */}
            </div>
          </div>

          {/* Vision 2030 */}
          <div className="flex justify-center items-center">
  <img
    src="/vision.svg"
    alt="Vision 2030"
    className="w-[160px] md:w-[180px] object-contain"
  />
</div>

          {/* CR / VAT */}
          <div className="text-right text-[12px] text-gray-500">
            <p>CR :- 7003690828 | VAT :- 300118595400003</p>
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="text-center mt-6 pt-4 border-t border-gray-200">
          <p className="text-[13px] text-gray-500">
            Copyright: © 2026 Luke Shipping Company. All rights reserved.
          </p>
        </div> */}
      </div>

    </footer>
  );
};

export default Footer;