import { UserCircle, Package } from "lucide-react";

const services = [
  {
    icon: (
      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">
        ZOLL
      </div>
    ),
    title: "Customs processing",
    description: "Import/export services, customs warehouses",
  },
  {
    icon: (
      <svg className="w-10 h-10" width="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 12.5C17.5 13.8807 16.3807 15 15 15C13.6192 15 12.5 13.8807 12.5 12.5C12.5 11.1193 13.6192 10 15 10C16.3807 10 17.5 11.1193 17.5 12.5Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0164 15.314C14.0077 15.3605 14.0022 15.4082 14.0001 15.4568L13.9708 16.1395C13.9647 16.2821 14.1899 16.3696 14.3089 16.2908C14.6552 16.0614 15.0739 16.0271 15.4356 16.1615C15.6494 16.241 15.9738 16.1131 15.9836 15.8852L15.9982 15.5425C16.0016 15.4642 15.9959 15.3877 15.982 15.3138C15.9579 15.1857 15.8189 15.1286 15.6927 15.1614C15.4711 15.2189 15.2387 15.2496 14.9992 15.2496C14.7596 15.2496 14.5272 15.219 14.3057 15.1614C14.1795 15.1286 14.0405 15.1858 14.0164 15.314Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8903 18.0408C13.8917 18.007 13.9392 17.9955 13.9579 18.0237L15.7304 20.6998C15.7595 20.7438 15.774 20.7959 15.7718 20.8486L15.5706 25.543C15.567 25.6271 15.5528 25.7104 15.5283 25.7909L13.6711 31.902C13.6367 32.0155 13.5823 32.1218 13.5106 32.2162L9.79632 37.1051C9.46221 37.5449 8.83487 37.6305 8.3951 37.2964C7.95534 36.9623 7.86969 36.335 8.20379 35.8952L11.7826 31.1847C11.8005 31.1611 11.8141 31.1345 11.8227 31.1062L13.5686 25.361C13.5747 25.3409 13.5783 25.32 13.5792 25.299L13.8903 18.0408Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.6144 23.3729C20.3928 23.2912 20.132 23.4346 20.2501 23.6391C20.3881 23.8783 20.694 23.9602 20.9332 23.8221L21.1307 23.7081C21.1896 23.6741 21.1749 23.5794 21.1111 23.5559L20.6144 23.3729Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.5306 21.7009C22.5503 21.7157 22.5769 21.718 22.5982 21.7057L23.0312 21.4557C23.2704 21.3176 23.5762 21.3996 23.7143 21.6387L30.2217 32.9099C30.2813 33.0132 30.3843 33.082 30.4981 33.1177C30.6257 33.1577 30.766 33.1558 30.8818 33.089L38.6915 28.5801C38.9306 28.442 39.2364 28.5239 39.3745 28.7631C39.5126 29.0022 39.4306 29.308 39.1915 29.4461L31.8093 33.7082C31.5869 33.8366 31.5079 34.1134 31.5387 34.3683C31.6086 34.9469 31.3358 35.5382 30.7992 35.848C30.0818 36.2622 29.1644 36.0164 28.7502 35.2989C28.4256 34.7368 28.5063 34.052 28.9015 33.5825C29.0767 33.3743 29.1635 33.0771 29.0275 32.8414L23.3482 23.0047C23.2636 22.8582 23.116 22.7706 22.9593 22.7567C22.9216 22.7533 22.8894 22.7801 22.8774 22.816C22.7028 23.34 22.1364 23.6232 21.6125 23.4485L17.1125 21.9485C16.9006 21.8779 16.7184 21.7383 16.595 21.552L14.1664 17.8854C13.8615 17.4249 13.9875 16.8044 14.448 16.4994C14.9084 16.1945 15.5289 16.3205 15.8339 16.781L17.9769 20.0164C18.0385 20.1096 18.1296 20.1794 18.2356 20.2147L22.245 21.5511C22.3505 21.5863 22.4464 21.6374 22.5306 21.7009Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.8254 18.6882C32.0645 18.5501 32.3703 18.632 32.5084 18.8712L34.7584 22.7683C34.8965 23.0074 34.8145 23.3132 34.5754 23.4513L28.0802 27.2013C27.841 27.3394 27.5352 27.2574 27.3972 27.0183L25.1472 23.1212C25.0091 22.882 25.091 22.5762 25.3302 22.4382L31.8254 18.6882Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.3302 27.6345C28.091 27.7726 28.0091 28.0784 28.1472 28.3175L30.3972 32.2146C30.5352 32.4538 30.841 32.5357 31.0802 32.3977L37.5754 28.6477C37.8145 28.5096 37.8965 28.2038 37.7584 27.9646L35.5084 24.0675C35.3703 23.8284 35.0645 23.7464 34.8254 23.8845L28.3302 27.6345Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2853 27.4525C15.2348 27.6189 15.2742 27.7995 15.3896 27.9296L17.8897 30.7503C17.9481 30.8162 17.9881 30.8963 18.0056 30.9827L19.1636 36.6985C19.2733 37.2398 19.801 37.5897 20.3423 37.48C20.8835 37.3703 21.2334 36.8426 21.1238 36.3013L19.8857 30.1902C19.8507 30.0176 19.7708 29.8573 19.6539 29.7255L15.8868 25.4754C15.8643 25.45 15.8223 25.4659 15.8223 25.4999C15.8223 25.6231 15.8041 25.7455 15.7683 25.8634L15.2853 27.4525Z" fill="currentColor"></path></svg>
    ),
    title: "Transport of dangerous goods",
    description: "We meet the highest safety standards",
  },
  {
    icon: (<UserCircle className="w-9 h-9 text-black" />),
    title: "Individual advice",
    description: "Our local experts will advise you on your special cases",
  },
  {
    icon: <Package className="w-9 h-9 text-black" />,
    title: "Sustainable logistics solutions",
    description: "with certified environmental management",
  }
];

export default function Roadadd() {
  return (
    <section className="bg-white w-full px-6 lg:px-10 md:mt-15 mb-10 md:mb-25 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

        {/* Left */}
        <div className="flex flex-col justify-between pr-0 lg:pr-16">
          <div>
            <h2
              className="text-3xl lg:text-4xl tracking-tight text-gray-950 mb-10 leading-tight"
              style={{ fontFamily: "nb-thin" }}
            >
                Additional services for your{" "}
                            <br className="hidden md:block" />
                            transport
             
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-6" style={{ fontFamily: "nb-thin" }}>
              In addition to reliable truck transport, we offer a wide range of additional services that make
              your international shipping more efficient, safer and more sustainable. Our experts support you
              from planning to final delivery — with tailor-made solutions for every transport requirement.
              We take care of the complete customs processing, including import and export formalities,
              and customs warehouse management, in order to make your supply chain
              legally secure and time-saving. Our certified dangerous goods transports are available for
              sensitive goods — in accordance with the highest safety standards, of course.
We also rely on sustainable
              logistics concepts with certified environmental management and modern vehicles with reduced
              CO₂ emissions.
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
        <div className="grid sm:grid-cols-2 grid-cols-1 border border-gray-200">
          {services.map((service, i) => (
            <div
            key={i}
            className={`p-6 lg:p-8 ${i % 2 === 0 ? "sm:border-r border-gray-200" : ""} ${i < services.length - 1 ? "border-b border-gray-200" : ""} ${i < 2 ? "sm:border-b border-gray-200" : "sm:border-b-0"}`}
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