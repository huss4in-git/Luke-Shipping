export default function Based() {
    const features = [
        {
            text: "24/7 SHIPMENT TRACKING",
            icon: "/tracking.svg"
        },
        {
            text: "EXTENSIVE NETWORK ACROSS GCC",
            icon: "network.svg"
        },
        {
            text: "CUSTOMS EXPERTISE",
            icon: "customs.svg"
        },
        {
            text: "TIMELY DELIVERY GUARANTEE",
            icon: "delivery.svg"
        },
        {
            text: "COMPETITIVE PRICING",
            icon: "pricing.svg"
        },
    ];

    return (
        <section className="md:py-5">
            <div className="w-full px-6 xl:px-10 2xl:px-24">

                {/* HEADING */}
                <div className="text-center mb-16" style={{ fontFamily: 'nb-thin' }}>
                    <h2 className="md:text-5xl text-3xl mb-10">
                        Why Luke Shipping?
                    </h2>

                    <p className="text-black/60 max-w-3xl mx-auto text-[15px] leading-relaxed">
                        <span style={{ color: '#FD9708' }}>Luke Shipping Co.</span> is dedicated to providing exceptional logistics services. <br />
                        We employ a PDCA (Plan-Do-Check-Act) cycle to continuously improve our processes.
                    </p>
                </div>

                {/* SINGLE ROW */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-1 mb-15">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#f3f3f3] rounded-[3px] p-10 text-center"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.text}
                                    className="w-25 h-25 mx-auto mb-5"
                                />

                                <p className="text-sm tracking-wide" style={{ fontFamily: 'nb-thin' }}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="https://www.gocomet.com/online-container-tracking/details/d24799e2-c743-4d24-a1fe-cb857d6d8019?shared=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <button
                            onClick={() => window.open("https://wa.me/918330061967", "_blank")}
                            className="bg-[#FD9708] text-black px-8 py-3 rounded-full cursor-pointer text-sm font-medium hover:bg-black hover:text-white transition"
                        >
                            BOOK SHIPMENT
                        </button>
                    </a>
                </div>

            </div>
        </section>
    );
}