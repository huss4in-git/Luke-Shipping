import { useNavigate } from "react-router-dom";

export default function Services() {
    const navigate = useNavigate();

    const services = [
        { title: "Road", image: "/road.png", size: "h-48" },
        { title: "Air", image: "/air.png", size: "h-30" },
        { title: "Sea", image: "/sea1.png", size: "h-40" },
        
        { title: "Customs Clearance", image: "/customs.png", size: "h-40" },
        { title: "Warehousing & Distribution", image: "/warehouse.png", size: "h-30" },
        { title: "Projects Handling", image: "/project1.png", size: "h-45" },
    ];

    return (
        <section className="px-1 md:px-2 md:py-30 py-25">
            <div className="w-full px-6 xl:px-10 2xl:px-24">

                {/* TITLE */}
                <div className="grid md:grid-cols-2 md:gap-50 gap-12 items-start mb-14">
                    <div className="md:ml-7">
                        <h1
                            className="text-3xl md:text-5xl leading-tight md:whitespace-nowrap"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Our wide range <br />
                            of services
                        </h1>
                    </div>
                </div>



                {/* ---------------- MOBILE ---------------- */}
                <div className="md:hidden space-y-3">

                    {/* TIC CARD (MOBILE ONLY) */}
                    <div
                        onClick={() => navigate("/tic")}
                        className="bg-white rounded-[6px] overflow-hidden cursor-pointer"
                    >
                        {/* IMAGE */}
                        <div className="bg-[#f3f3f3] mb-3 flex items-center justify-center h-[175px]">
                            <img
                                src="/tic1.png"
                                alt="TIC Services"
                                className="h-25 object-contain"
                            />
                        </div>

                        {/* BOTTOM */}
                        <div className="px-4 py-4 flex items-center gap-3 text-sm">
                            <span className="text-black whitespace-nowrap">
                                TIC Services
                            </span>

                            <div className="flex-1 h-[0.5px] bg-gray-300 relative">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#f3f3f3] rounded-full"></div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#f3f3f3] rounded-full"></div>
                            </div>

                            <span className="text-black whitespace-nowrap">
                                Learn more →
                            </span>
                        </div>
                    </div>

                    {services.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                const routes = {
                                    "Road": "/road",
                                    "Sea": "/sea",
                                    "Air": "/air",
                                    "Customs Clearance": "/customs",
                                    "Warehousing & Distribution": "/warehousing",
                                    "Projects Handling": "/projects",
                                };
                            
                                navigate(routes[item.title]);
                            }}
                            className="bg-white rounded-[6px] overflow-hidden cursor-pointer"
                        >

                            {/* IMAGE */}
                            <div className="bg-[#f3f3f3] mb-3 flex items-center justify-center h-[175px]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`${item.title === "Road"
                                        ? "h-40"
                                        : item.title === "Sea"
                                            ? "h-30"
                                            : item.title === "Customs Clearance"
                                                ? "h-28"
                                                : item.title === "Warehousing & Distribution"
                                                    ? "h-23"
                                                    : item.title === "Projects Handling"
                                                        ? "h-30"
                                                        : "h-25"
                                        } object-contain`}
                                />
                            </div>

                            {/* BOTTOM */}
                            <div className="px-4 py-4 flex items-center gap-3 text-sm">
                                <span className="text-black whitespace-nowrap">
                                    {item.title === "Warehousing & Distribution"
                                        ? "Warehousing"
                                        : item.title === "Customs Clearance"
                                            ? "Customs"
                                            : item.title}
                                </span>

                                <div className="flex-1 h-[0.5px] bg-gray-300 relative">
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#f3f3f3] rounded-full"></div>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#f3f3f3] rounded-full"></div>
                                </div>

                                <span className="text-black whitespace-nowrap">
                                    Learn more →
                                </span>
                            </div>

                        </div>
                    ))}

                </div>


                {/* ---------------- DESKTOP ---------------- */}
                <div
                    className="hidden md:grid md:grid-cols-3 gap-0.5 md:px-7"
                    style={{ fontFamily: "nb-thin" }}
                >

                    {services.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                const routes = {
                                    "Road": "/road",
                                    "Sea": "/sea",
                                    "Air": "/air",
                                    "Customs Clearance": "/customs",
                                    "Warehousing & Distribution": "/warehousing",
                                    "Projects Handling": "/projects",
                                };
                            
                                navigate(routes[item.title]);
                            }}
                            className="group relative bg-[#f3f3f3] rounded-[3px] h-[260px] overflow-hidden cursor-pointer"
                        >
                            {/* IMAGE */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`${item.size} object-contain`}
                                />
                            </div>

                            {/* HOVER */}
                            <div className="absolute inset-0 bg-[#FD9708] opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            {/* BOTTOM */}
                            <div className="absolute bottom-0 left-0 w-full z-20">

                                <div className="h-[0.5px] w-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

                                <div className="p-5 flex items-center justify-between text-sm">
                                    <span className="text-black group-hover:text-white transition">
                                        {item.title}
                                    </span>

                                    <span className="opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 text-white">
                                        Learn more →
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                {/* ================= TIC FEATURE STRIP ================= */}
                <div className="hidden md:block md:px-7 mt-10">
                    <div className="relative flex items-center mb-10">
                        <div className="w-[3px] h-[3px] bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 h-[0.5px] bg-gray-300"></div>
                        <div className="w-[3px] h-[3px] bg-gray-300 rounded-full flex-shrink-0"></div>
                    </div>
                    <div
                        onClick={() => navigate("/tic")}
                        className="bg-[#f3f3f3] rounded-[3px] overflow-hidden group cursor-pointer relative"
                    >

                        {/* HOVER OVERLAY (MUST BE HERE) */}
                        <div className="absolute inset-0 bg-[#FD9708] opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>

                        <div className="grid md:grid-cols-3 h-[220px] relative z-20">

                            {/* COL 1 */}
                            <div className="flex items-center justify-center">
                                <img src="/tic1.png" alt="TIC Services" className="h-35 object-contain" />
                            </div>
                            <div></div>

                            {/* COL 3 */}
                            <div className="flex flex-col justify-center px-6 md:px-5">
                                <h2 className="text-sm tracking-wide transition group-hover:text-white" style={{ fontFamily: 'nb-thin' }}>
                                    TIC Services
                                </h2>

                                <p className="text-sm opacity-70 mt-2 transition group-hover:text-white" style={{ fontFamily: 'nb-thin' }}>
                                    Testing • Inspection • Certification
                                </p>
                            </div>

                        </div>

                        {/* LEARN MORE */}
                        <div className="absolute bottom-6 right-6 md:right-5 z-20">
                            <span className="text-sm opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white" style={{ fontFamily: 'nb-thin' }}>
                                Learn more →
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}