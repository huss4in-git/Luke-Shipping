import { Bus, Layers, MapPin, ArrowLeftRight, Zap } from "lucide-react";

const features = [
  {
    icon: <Layers className="w-7 h-7 text-[#fda408]" />,
    title: "Always up to date",
    description: "State-of-the-art assistance systems for maximum safety",
  },
  {
    icon: <MapPin className="w-7 h-7 text-[#fda408]" />,
    title: "sites",
    description: "Strategically distributed locations for fast deliveries",
  },
  {
    icon: <ArrowLeftRight className="w-7 h-7 text-[#fda408]" />,
    title: "scheduled services",
    description: "Scheduled scheduled services with high reliability",
  },
  {
    icon: <Zap className="w-7 h-7 text-[#fda408]" />,
    title: "premium services",
    description: "Express and fixed-date deliveries",
  },
];

export default function Roadfeatures() {
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