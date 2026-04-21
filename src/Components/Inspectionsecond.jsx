import { useState, useMemo } from "react";
import { Car, Users, Leaf, Zap, UtensilsCrossed, Globe, TrainFront, Building2, Settings2, ShoppingCart, Factory, ShoppingBasket, FileCheck, File, NotepadText } from "lucide-react";

const services = [
  { id: 1, title: "3D AI Construction Inspection", categories: ["Automotive"], Icon: Building2 },
  { id: 2, title: "Acoustic Emission Testing", categories: ["Consumer Products and Retail", "Manufacturing" , "Building and Construction"], Icon: Users },
  { id: 3, title: "Acoustic Measurements", categories: ["Sustainability", "Consumer Products and Retail","Automotive","Rail", "Building and Construction"], Icon: ShoppingCart },
  { id: 4, title: "Air conditioning & ventilation testing inspection & certification", categories: ["Sustainability", "Energy"], Icon: Factory },
  { id: 5, title: "Airport Infrastructure Services", categories: ["Consumer Products and Retail"], Icon: UtensilsCrossed },
  { id: 6, title: "Alarm Receiving Centres", categories: ["Sustainability", "Manufacturing","Rail", "Consumer Products and Retail", "Automotive", "Building and Construction"], Icon: Globe },
  { id: 7, title: "Battery crash tests for electric vehicles", categories: ["Consumer Products and Retail"], Icon: ShoppingBasket },
  { id: 8, title: "Boiler and Machinery Engineering", categories: ["Consumer Products and Retail"], Icon: Building2 },
  { id: 9, title: "Cableway Services", categories: ["Sustainability","Consumer Products and Retail", "Manufacturing"], Icon: File },
  { id: 10, title: "Certification according to TSI and NNTR", categories: ["Sustainability","Consumer Products and Retail"], Icon: NotepadText },
  { id: 11, title: "Climate Change Risk Assessment", categories: ["Consumer Products and Retail"], Icon: FileCheck  },
  { id: 12, title: "Complete railway system services", categories: ["Automotive"], Icon: Building2 },
  { id: 13, title: "Acoustic Emission Testing", categories: ["Consumer Products and Retail", "Manufacturing" , "Building and Construction"], Icon: Users },
  { id: 3, title: "Acoustic Measurements", categories: ["Sustainability", "Consumer Products and Retail","Automotive","Rail", "Building and Construction"], Icon: ShoppingCart },
  { id: 4, title: "Air conditioning & ventilation testing inspection & certification", categories: ["Sustainability", "Energy"], Icon: Factory },
  { id: 5, title: "Airport Infrastructure Services", categories: ["Consumer Products and Retail"], Icon: UtensilsCrossed },
  { id: 6, title: "Alarm Receiving Centres", categories: ["Sustainability", "Manufacturing","Rail", "Consumer Products and Retail", "Automotive", "Building and Construction"], Icon: Globe },
  { id: 7, title: "Battery crash tests for electric vehicles", categories: ["Consumer Products and Retail"], Icon: ShoppingBasket },
  { id: 8, title: "Boiler and Machinery Engineering", categories: ["Consumer Products and Retail"], Icon: Building2 },
  { id: 9, title: "Cableway Services", categories: ["Sustainability","Consumer Products and Retail", "Manufacturing"], Icon: File },
  { id: 10, title: "Certification according to TSI and NNTR", categories: ["Sustainability","Consumer Products and Retail"], Icon: NotepadText },
  { id: 11, title: "Climate Change Risk Assessment", categories: ["Consumer Products and Retail"], Icon: FileCheck  },

];

const categories = [
  "Consumer Products and Retail",
  "Automotive",
  "Building and Construction",
  "Chemical Processing",
  "Rail",
  "Energy",
  "Manufacturing",
  "Sustainability",
];

const categoryIcons = {
  Sustainability: <Leaf className="w-4 h-4 inline mr-1" />,
};

export default function Inspectionsecond() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = useMemo(() => {
    let result = services;
    if (selectedCategories.length > 0) {
      result = result.filter((s) =>
        selectedCategories.some((cat) => s.categories.includes(cat))
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((s) => s.title.toLowerCase().includes(q));
    }
    return result;
  }, [selectedCategories, searchQuery]);

  return (
    <div className="min-h-screen bg-white px-6 md:px-15 md:py-25 py-20 font-sans">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4" style={{fontFamily:'nb-thin'}}>
        <h1 className="md:text-4xl text-3xl text-[black] ">
          Discover our inspection services
        </h1>
        {/* Search */}
        <div className="relative w-full md:w-96">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search services"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FD9708] text-base bg-white shadow-sm"
          />
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-gray-600 text-sm mb-6" style={{fontFamily:'nb-thin'}}>
        Filter the services by one or more product categories, to find the most relevant services tailored to your needs.
      </p>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-3 mb-6" style={{fontFamily:'nb-thin'}}>
        {categories.map((cat) => {
          const active = selectedCategories.includes(cat);
          return (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`flex items-center gap-1 px-5 py-2 rounded-full border text-sm font-medium transition-all duration-150 cursor-pointer
                ${active
                  ? "bg-[#FD9708] text-[white] border-[#FD9708]"
                  : "bg-white text-gray-800 border-gray-300 hover:border-[#FD9708] hover:text-[#FD9708]"
                }`}
            >
              {categoryIcons[cat] && categoryIcons[cat]}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Count */}
      <p className="text-gray-600 text-sm mb-8" style={{fontFamily:'nb-thin'}} >
        Showing {filtered.length} of {services.length} services
      </p>

      {/* Services Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-lg">
          No services found. Try a different search or filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-15">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="group relative bg-[#f3f3f3] rounded-[3px] h-[260px] overflow-hidden cursor-pointer" style={{fontFamily:'nb-thin'}}>

      {/* ICON — centered, moves up on hover */}
      <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 group-hover:-translate-y-6">
        <service.Icon className="w-16 h-16 text-[black] group-hover:text-white transition-colors duration-300" />
      </div>

      {/* HOVER BACKGROUND */}
      <div className="absolute inset-0 bg-[#FD9708] opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* HOVER CONTENT — slides up from bottom */}
      <div className="absolute bottom-0 left-0 w-full p-5 z-20">
        <div className="flex items-end justify-between">
          <p className="text-white text-sm leading-snug max-w-[80%] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
            {service.title}
          </p>
          <span className="text-white text-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
            →
          </span>
        </div>
      </div>

      {/* DEFAULT TITLE — fades out on hover */}
      <div className="absolute bottom-0 left-0 w-full p-5 z-20 group-hover:opacity-0 transition duration-200">
        <span className="text-black text-sm">{service.title}</span>
      </div>

    </div>
  );
}