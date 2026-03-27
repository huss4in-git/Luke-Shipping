import { useEffect, useState } from "react";

export default function TrackShipmentSticky() {
  const [show, setShow] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setShow(isHovering);
  }, [isHovering]);

  return (
    <div className="fixed left-0 bottom-0 z-50">

      {/* Wrapper */}
      <div className="relative flex flex-col items-start">

        {/* Track box */}
        <a
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          href="https://www.gocomet.com/online-container-tracking/details/d24799e2-c743-4d24-a1fe-cb857d6d8019?shared=true"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            absolute bottom-[60px] left-0
            bg-white h-[220px] w-[60px] flex items-center justify-center shadow-md
            transform transition-transform duration-300 ease-in-out
            ${show ? "translate-y-0" : "translate-y-full"}
          `}
          style={{ fontFamily: "nb-thin" }}
        >
          <span className="rotate-[-90deg] text-[16px] text-black whitespace-nowrap tracking-wide">
            Track a Shipment
          </span>
        </a>

        {/* Icon */}
        <div className="bg-[#FD9708] h-[60px] w-[60px] flex items-center justify-center relative z-10">
          <a
            href="https://www.gocomet.com/online-container-tracking/details/d24799e2-c743-4d24-a1fe-cb857d6d8019?shared=true"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src="/track.png"
              alt="track icon"
              className="w-15 h-15 object-contain"
            />
          </a>
        </div>

      </div>
    </div>
  );
}