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
                        Luke Shipping Company is dedicated to providing exceptional logistics services. <br />
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
                    <button className="bg-[#FD9708] text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
                        TRACK SHIPMENT
                    </button>
                </div>

            </div>
        </section>
    );
}