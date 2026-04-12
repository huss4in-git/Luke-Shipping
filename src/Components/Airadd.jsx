import { UserCircle, Package, DollarSign, ArrowLeftRight, Handshake } from "lucide-react";

const iconStyle = { width: 28, height: 28 };

const services = [
  {
    icon: <DollarSign style={iconStyle} />,
    title: "Customs processing",
    description: "Cost-efficient modes of transport such as sea freight for long distances combined with fast options such as air freight for shorter routes — saving you time and money.",
  },
  {
    icon: <ArrowLeftRight style={iconStyle} />,
    title: "Flexibility",
    description: "Multimodal transport creates alternatives in the event of unforeseen disruptions such as weather problems or port strikes and ensures a reliable supply chain.",
  },
  {
    icon: <Handshake style={iconStyle} />,
    title: "Environmental friendliness",
    description: "The use of low-emission modes of transport, such as rail transport, actively contributes to reducing CO₂ emissions and supports your sustainability goals.",
  },
];

export default function Airadd() {
  return (
    <section className="bg-white w-full px-6 lg:px-10 md:mt-15 mb-10 md:mb-35 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

        {/* Left */}
        <div className="flex flex-col justify-between pr-0 lg:pr-16">
          <div>
            <h2
              className="text-3xl lg:text-4xl tracking-tight text-gray-950 mb-10 md:mb-75 leading-tight"
              style={{ fontFamily: "nb-thin" }}
            >
               The benefits of multimodal transport solutions at a glance
      
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-6" style={{ fontFamily: "nb-thin" }}>
            Our airfreight solutions are ideal when speed, reliability and global reach are required.
             Whether it's a time-critical shipment, high-quality goods or an international direct connection — 
             with Luke Air & Sea, your goods reach their destination worldwide securely, on time and transparently.
            Through our close cooperation with leading cargo airlines and global partners, we offer flexible capacities, short delivery times and maximum planning security — for air freight that you can rely on at any time.
            </p>

          </div>

          {/* Button */}
          <div className="md:mb-0 mb-10">
            <button className="flex items-center gap-0 group cursor-pointer">
              <span className="bg-[#FD9708] hover:bg-[#FD9708] text-white text-sm px-5 py-2 rounded-full transition-colors duration-150" style={{ fontFamily: "nb-thin" }}>
                Contact Us
              </span>
            </button>
          </div>
        </div>

        {/* Right — 2x3 grid with borders */}
        <div className="grid sm:grid-cols-1 grid-cols-1">
  {services.map((service, i) => (
    <div
      key={i}
      className={`p-6 lg:p-8 border border-gray-200 ${
        i > 0 ? "border-t-0" : ""
      }`}
    >
              {service && (
                <>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg text-gray-900 mb-3 leading-snug" style={{ fontFamily: "nb-thin" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "nb-thin" }}>
                    {service.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}