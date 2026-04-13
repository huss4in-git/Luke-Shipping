import { Cpu, PackageCheck, Layers, ShieldCheck, Container, Clock } from "lucide-react";

const iconStyle = { color: "#fda408", width: 28, height: 28 };

const features = [
  {
    icon: <Cpu style={iconStyle} />,
    title: "Technology",
    description: "Use of modern technologies for maximum efficiency and transparency",
  },
  {
    icon: <PackageCheck style={iconStyle} />,
    title: "POD",
    description: "Proof of Delivery (POD) and optional transportation insurance",
  },
  {
    icon: <Layers style={iconStyle} />,
    title: "Shipment summary",
    description: "Summaries of small shipments to save freight",
  },
  {
    icon: <ShieldCheck style={iconStyle} />,
    title: "Certifications",
    description: "Certifications such as AEO F and RegB for the highest safety standards",
  },
  {
    icon: <Container style={iconStyle} />,
    title: "Project transportation",
    description: "All types of project transport — from large machines to sensitive goods",
  },
  {
    icon: <Clock style={iconStyle} />,
    title: "Dispatch times",
    description: "Short shipping times and competitive conditions",
  },
];

export default function Seafeatures() {
  return (
    <section className="bg-white w-full px-6 lg:px-10 py-16">
      <h2
        className="md:text-4xl text-3xl tracking-tight text-gray-950 mb-10 md:mb-25"
        style={{ fontFamily: "nb-thin" }}
      >
        Convincing features
      </h2>

      <div className="border border-gray-300 rounded-sm divide-y divide-gray-300">
        {features.map((feature, i) => (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-2 px-6 py-6 gap-4 lg:gap-0"
          >
            {/* Left — icon + title */}
            <div className="flex items-center gap-4">
              {feature.icon}
              <span
                className="text-lg text-gray-900"
                style={{ fontFamily: "nb-thin" }}
              >
                {feature.title}
              </span>
            </div>

            {/* Right — description */}
            <div className="flex items-center">
              <span
                className="text-gray-600 text-[0.95rem] leading-relaxed"
                style={{ fontFamily: "nb-thin" }}
              >
                {feature.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}