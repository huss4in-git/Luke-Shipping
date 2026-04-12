export default function Banner() {
    return (
      <section
        className="relative w-full overflow-hidden py-35 flex items-center justify-center"
        style={{ backgroundColor: "#fda408" }}
      >
       {/* Left image */}
<div className="absolute left-0 top-0 h-full w-1/5">
  <img
    src="/left.png"
    alt=""
    className="w-full h-full object-cover scale-140 object-right opacity-60"
  />
</div>

{/* Right image */}
<div className="absolute right-0 top-0 h-full w-1/5">
  <img
    src="/right.png"
    alt=""
    className="w-full h-full object-cover scale-140 object-left opacity-60"
  />
</div>
  
        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <h2
            className="text-white text-4xl lg:text-5xl  mb-8"
            style={{ fontFamily: "nb-thin" }}
          >
            Delivering what matters, <br /> reliably and responsibly.
          </h2>
  
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Shipment tracking" },
              { label: "Request a quote" },
              { label: "Contact" },
            ].map((btn, i) => (
              <button
                key={i}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white text-sm transition-colors duration-150"
                style={{ fontFamily: "nb-thin" }}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }