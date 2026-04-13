const features = [
    "More safety and punctuality through process optimization",
    "Customs processing, consulting and customs management across national borders and continents",
    "Customs and compliance advice: Minimizing risks through in-depth expertise",
    "Own customs warehouses: Efficient warehouse logistics for greater flexibility",
    "Import & export: professional customs clearance for all flows of goods",
    "Automated customs processing to speed up your processes",
    "Seamless customs clearance, regardless of the nature of your shipment",
    "Optimize your supply chain and ensure fast, secure customs processes"
  ];
  
  export default function Customsinfo() {
    return (
      <section className="bg-white w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 mb-10 lg:mt-15 lg:mb-15">
  
          {/* Left */}
          <div className="flex flex-col justify-between md:mt-0 mt-5 px-6 lg:px-10 mb-8 lg:mb-0">
            <h2
              className="text-3xl lg:text-4xl tracking-tight text-gray-950"
              style={{ fontFamily: "nb-thin" }}
            >
              Smart solutions and  <br /> customized customs <br /> services
            </h2>
            <div className="w-full lg:w-[75%] h-64 lg:h-100 rounded-[6px] overflow-hidden mt-6 lg:mt-auto">
              <img
                src="/cargo.jpg"
                alt="Luke Shipping fleet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* Right */}
          <div
            className="divide-y divide-gray-200 border-t border-b border-gray-200 mx-6 lg:mx-0 lg:mr-10"
            style={{ fontFamily: "nb-thin" }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 lg:px-6 py-4 lg:py-5 transition-colors duration-150 group"
              >
                <span className="text-gray-800 text-sm lg:text-[0.95rem] leading-relaxed pr-4 lg:pr-6">
                  {feature}
                </span>
                <div className="flex-shrink-0 w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#FD9708] flex items-center justify-center transition-colors duration-150">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 10l4.5 4.5L16 6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }