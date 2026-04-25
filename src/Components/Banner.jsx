
export default function Banner() {
  const buttonActions = [
    {
      label: "Shipment tracking",
      href: "https://www.gocomet.com/online-container-tracking/details/d24799e2-c743-4d24-a1fe-cb857d6d8019?shared=true",
    },
    { label: "Request a quote", href: null },
    {
      label: "Contact",
      href: "https://wa.me/966582780836",
    },
  ];

  const handleClick = (btn) => {
    if (btn.href) {
      window.open(btn.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden py-20 sm:py-28 lg:py-35 flex items-center justify-center min-h-[320px]"
      style={{ backgroundColor: "#fda408" }}
    >
      {/* Left image - hidden on mobile */}
      <div className="absolute left-0 top-0 h-full w-1/4 sm:w-1/5 hidden sm:block">
        <img
          src="/left.png"
          alt=""
          className="w-full h-full object-cover scale-140 object-right opacity-60"
        />
      </div>

      {/* Right image */}
      <div className="absolute right-0 top-0 h-full w-2/5 sm:w-1/5">
        <img
          src="/right.png"
          alt=""
          className="w-full h-full object-cover scale-125 sm:scale-140 object-left opacity-60 sm:opacity-60"
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-start sm:items-center text-left sm:text-center px-6 sm:px-12 lg:px-6 w-full sm:max-w-2xl sm:mx-auto pr-[45%] sm:pr-12 lg:pr-6">
        <h2
          className="text-white text-3xl sm:text-3xl lg:text-5xl mb-6 sm:mb-8 leading-tight"
          style={{ fontFamily: "nb-thin" }}
        >
          Delivering what matters, <br /> reliably and responsibly.
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center sm:justify-center gap-3 w-full">
          {buttonActions.map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              className="flex cursor-pointer items-center justify-between sm:justify-center gap-2 pl-4 pr-4 py-1.5 sm:px-5 sm:py-2.5 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white text-sm transition-colors duration-150"
              style={{ fontFamily: "nb-thin" }}
            >
              <span>{btn.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}