import { useNavigate } from "react-router-dom";
import {
    UserCheck,
    FileSearch,
    FileCheck,
    Award,
    Users,
    ClipboardList,
    ShieldCheck
} from "lucide-react";
import Banner from "./Banner";

export default function Ticservice() {
    const navigate = useNavigate();

    const services = [
        {
            title: "Auditing",
            icon: UserCheck,
            desc: "Our expert assessments help organisations improve operations, reduce risks, and maintain a competitive edge amidst industrial and regulatory challenges.",
            size: "h-15 w-15"
        },
        {
            title: "Inspection",
            icon: FileSearch,
            desc: "Thorough examination and assessment of systems, products, and processes to ensure compliance with standards and regulations.",
            size: "h-15 w-15"
        },
        {
            title: "Management System Certification",
            icon: FileCheck,
            desc: "Certification services to validate that your management systems meet international standards and enhance operational excellence.",
            size: "h-15 w-15"
        },
        {
            title: "Product Certification",
            icon: Award,
            desc: "Ensuring your products meet required safety, quality, and regulatory standards for global market acceptance.",
            size: "h-15 w-15"
        },
        {
            title: "Technical Advisory",
            icon: Users,
            desc: "Expert guidance and technical support to help optimize operations, improve efficiency, and meet industry requirements.",
            size: "h-15 w-15"
        },
        {
            title: "Testing",
            icon: ClipboardList,
            desc: "Comprehensive testing services to evaluate product performance, safety, and compliance with applicable standards.",
            size: "h-15 w-15"
        },
        {
            title: "Verification & Validation",
            icon: ShieldCheck,
            desc: "Ensuring processes, systems, and products meet specified requirements and perform as intended with reliability.",
            size: "h-15 w-15"
        }
    ];

    return (
        <>
        <section className="px-1 md:px-2 md:py-30 py-25">
            <div className="w-full px-6 xl:px-10 2xl:px-24">

                {/* TITLE */}
                <div className="grid md:grid-cols-2 md:gap-50 gap-12 items-start mb-14">
                    <div className="md:ml-7">
                        <h1
                            className="text-3xl md:text-5xl leading-tight md:whitespace-nowrap"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Services
                        </h1>
                    </div>
                </div>



                {/* ---------------- MOBILE ---------------- */}
                <div className="md:hidden space-y-4">

                    {services.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                const routes = {
                                    Auditing: "/auditing",
                                    Inspection: "/inspection",
                                    "Management System Certification" :"/management",
                                    "Product Certification":"/product",
                                    "Technical Advisory":"/technical",
                                    Testing : "/testing",
                                    "Verification & Validation":"/verification"
                                };

                                navigate(routes[item.title]);
                            }}
                            className="bg-[#f3f3f3] border border-gray-200 rounded-[6px] p-5 cursor-pointer"
                        >

                            {/* TOP (TITLE + ICON) */}
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-black text-base" style={{ fontFamily: 'nb-thin' }}>
                                    {item.title}
                                </h3>

                                {(() => {
                                    const Icon = item.icon;
                                    return (
                                        <Icon className="h-10 w-10 text-[#FD9708]" />
                                    );
                                })()}
                            </div>

                            {/* CONTENT */}
                            <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{ fontFamily: 'nb-thin' }}>
                                {item.desc}
                            </p>

                            {/* ARROW */}
                            <div className="flex justify-end">
                                <span className="text-black text-xl">
                                    →
                                </span>
                            </div>

                        </div>
                    ))}

                </div>


                {/* ---------------- DESKTOP ---------------- */}
                <div
                    className="hidden md:grid md:grid-cols-4 gap-0.5 md:px-7 mb-10"
                    style={{ fontFamily: "nb-thin" }}
                >

                    {services.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                const routes = {
                                    Auditing: "/auditing",
                                    Inspection: "/inspection",
                                    "Management System Certification" :"/management",
                                    "Product Certification":"/product",
                                    "Technical Advisory":"/technical",
                                    "Projects Handling": "/projects",
                                    Testing : "/testing",
                                    "Verification & Validation":"/verification"
                                };

                                navigate(routes[item.title]);
                            }}
                            className="group relative bg-[#f3f3f3] rounded-[3px] h-[260px] overflow-hidden cursor-pointer"
                        >
                            {/* ICON */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 group-hover:-translate-y-6">
                                {(() => {
                                    const Icon = item.icon;
                                    return (
                                        <Icon className={`${item.size} text-[#FD9708] group-hover:text-white`} />
                                    );
                                })()}
                            </div>

                            {/* HOVER BACKGROUND */}
                            <div className="absolute inset-0 bg-[#FD9708] opacity-0 group-hover:opacity-100 transition duration-300"></div>

                            {/* HOVER TEXT (NEW) */}
                            <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                                <div className="flex items-end justify-between">

                                    {/* TEXT */}
                                    <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                                        <p className="text-white text-sm leading-snug max-w-[80%]">
                                            {/* you can customize per service later */}
                                            Learn more about {item.title.toLowerCase()} services.
                                        </p>
                                    </div>

                                    {/* ARROW */}
                                    <div className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 text-white text-xl">
                                        →
                                    </div>

                                </div>
                            </div>

                            {/* DEFAULT TITLE */}
                            <div className="absolute bottom-0 left-0 w-full p-5 z-20 group-hover:opacity-0 transition duration-200">
                                <span className="text-black text-sm">{item.title}</span>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
            
        </section>
        <Banner />
        </>
    );
}