import { Cpu, PackageCheck, Layers, ShieldCheck, Container, Clock, Earth, PersonStanding, LogOut, Computer } from "lucide-react";

const iconStyle = { color: "#fda408", width: 28, height: 28 };

const features = [
  {
    icon: <Earth style={iconStyle} />,
    title: "Site logistics",
    description: "Dynamic, networked locations enable international projects.",
  },
  {
    icon: <PersonStanding style={iconStyle} />,
    title: "Safety standards",
    description: "TAPA compliant solutions with temperature control and video monitoring.",
  },
  {
    icon: <LogOut style={iconStyle} />,
    title: "Outsourcing solutions",
    description: "Tailored concepts for upstream and downstream production processes.",
  },
  {
    icon: <Layers style={iconStyle} />,
    title: "Value Added Services",
    description: "Increased performance through innovative logistics solutions.",
  },
  {
    icon: <Container style={iconStyle} />,
    title: "Sustainable logistics",
    description: "Low-emission technologies, rail transport and green logistics.",
  },
  {
    icon: <Computer style={iconStyle} />,
    title: "Technological expertise",
    description: "In-house software development and hardware solutions to increase efficiency.",
  },
];

export default function Customsfeatures() {
  return (
    <section className="bg-white w-full pb-30 px-6 lg:px-10 py-16">
      <h2
        className="md:text-4xl text-3xl tracking-tight text-gray-950 mb-10 md:mb-25"
        style={{ fontFamily: "nb-thin" }}
      >
        Special services
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