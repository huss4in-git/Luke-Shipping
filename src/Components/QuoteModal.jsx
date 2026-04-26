import { useState, useEffect } from "react";
import { Ship, PlaneTakeoff, Truck } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useQuote } from "./QuoteContext";

const FREIGHT_TYPES = [
    { val: "sea", icon: <Ship size={20} strokeWidth={1.5} />, label: "Sea", sub: "FCL / LCL" },
    { val: "air", icon: <PlaneTakeoff size={20} strokeWidth={1.5} />, label: "Air", sub: "Express / Standard" },
    { val: "road", icon: <Truck size={20} strokeWidth={1.5} />, label: "Road", sub: "FTL / LTL" },
];

const CONTAINER_SIZES = [
    { val: "20ft", label: "20ft", sub: "~33 CBM" },
    { val: "40ft", label: "40ft", sub: "~67 CBM" },
    { val: "40hc", label: "40ft HC", sub: "~76 CBM · High Cube" },
    { val: "lcl", label: "LCL / Partial", sub: "Less than container" },
];

const CARGO_TYPES = [
    "General Cargo", "Machinery & Equipment", "Electronics & Tech",
    "Food & Perishables", "Chemicals & Hazmat", "Automobiles & Vehicles",
    "Textiles & Garments", "Construction Materials", "Project / OOG Cargo", "Other",
];

const INCOTERMS = ["EXW", "FOB", "CIF", "DDP", "CFR", "DAP"];
const STEP_TITLES = ["Route & Freight Type", "Cargo Details", "Your Information"];

const COUNTRY_CODES = [
    { code: "+93", country: "Afghanistan" },
    { code: "+355", country: "Albania" },
    { code: "+213", country: "Algeria" },
    { code: "+376", country: "Andorra" },
    { code: "+244", country: "Angola" },
    { code: "+54", country: "Argentina" },
    { code: "+374", country: "Armenia" },
    { code: "+61", country: "Australia" },
    { code: "+43", country: "Austria" },
    { code: "+994", country: "Azerbaijan" },
    { code: "+973", country: "Bahrain" },
    { code: "+880", country: "Bangladesh" },
    { code: "+375", country: "Belarus" },
    { code: "+32", country: "Belgium" },
    { code: "+501", country: "Belize" },
    { code: "+229", country: "Benin" },
    { code: "+975", country: "Bhutan" },
    { code: "+591", country: "Bolivia" },
    { code: "+387", country: "Bosnia" },
    { code: "+267", country: "Botswana" },
    { code: "+55", country: "Brazil" },
    { code: "+673", country: "Brunei" },
    { code: "+359", country: "Bulgaria" },
    { code: "+226", country: "Burkina Faso" },
    { code: "+257", country: "Burundi" },
    { code: "+855", country: "Cambodia" },
    { code: "+237", country: "Cameroon" },
    { code: "+1", country: "Canada" },
    { code: "+238", country: "Cape Verde" },
    { code: "+236", country: "Central African Republic" },
    { code: "+235", country: "Chad" },
    { code: "+56", country: "Chile" },
    { code: "+86", country: "China" },
    { code: "+57", country: "Colombia" },
    { code: "+269", country: "Comoros" },
    { code: "+243", country: "Congo (DRC)" },
    { code: "+242", country: "Congo" },
    { code: "+506", country: "Costa Rica" },
    { code: "+385", country: "Croatia" },
    { code: "+53", country: "Cuba" },
    { code: "+357", country: "Cyprus" },
    { code: "+420", country: "Czech Republic" },
    { code: "+45", country: "Denmark" },
    { code: "+253", country: "Djibouti" },
    { code: "+1", country: "Dominican Republic" },
    { code: "+593", country: "Ecuador" },
    { code: "+20", country: "Egypt" },
    { code: "+503", country: "El Salvador" },
    { code: "+240", country: "Equatorial Guinea" },
    { code: "+291", country: "Eritrea" },
    { code: "+372", country: "Estonia" },
    { code: "+268", country: "Eswatini" },
    { code: "+251", country: "Ethiopia" },
    { code: "+679", country: "Fiji" },
    { code: "+358", country: "Finland" },
    { code: "+33", country: "France" },
    { code: "+241", country: "Gabon" },
    { code: "+220", country: "Gambia" },
    { code: "+995", country: "Georgia" },
    { code: "+49", country: "Germany" },
    { code: "+233", country: "Ghana" },
    { code: "+30", country: "Greece" },
    { code: "+502", country: "Guatemala" },
    { code: "+224", country: "Guinea" },
    { code: "+245", country: "Guinea-Bissau" },
    { code: "+592", country: "Guyana" },
    { code: "+509", country: "Haiti" },
    { code: "+504", country: "Honduras" },
    { code: "+852", country: "Hong Kong" },
    { code: "+36", country: "Hungary" },
    { code: "+354", country: "Iceland" },
    { code: "+91", country: "India" },
    { code: "+62", country: "Indonesia" },
    { code: "+98", country: "Iran" },
    { code: "+964", country: "Iraq" },
    { code: "+353", country: "Ireland" },
    { code: "+972", country: "Israel" },
    { code: "+39", country: "Italy" },
    { code: "+225", country: "Ivory Coast" },
    { code: "+1", country: "Jamaica" },
    { code: "+81", country: "Japan" },
    { code: "+962", country: "Jordan" },
    { code: "+7", country: "Kazakhstan" },
    { code: "+254", country: "Kenya" },
    { code: "+383", country: "Kosovo" },
    { code: "+965", country: "Kuwait" },
    { code: "+996", country: "Kyrgyzstan" },
    { code: "+856", country: "Laos" },
    { code: "+371", country: "Latvia" },
    { code: "+961", country: "Lebanon" },
    { code: "+266", country: "Lesotho" },
    { code: "+231", country: "Liberia" },
    { code: "+218", country: "Libya" },
    { code: "+423", country: "Liechtenstein" },
    { code: "+370", country: "Lithuania" },
    { code: "+352", country: "Luxembourg" },
    { code: "+853", country: "Macau" },
    { code: "+261", country: "Madagascar" },
    { code: "+265", country: "Malawi" },
    { code: "+60", country: "Malaysia" },
    { code: "+960", country: "Maldives" },
    { code: "+223", country: "Mali" },
    { code: "+356", country: "Malta" },
    { code: "+222", country: "Mauritania" },
    { code: "+230", country: "Mauritius" },
    { code: "+52", country: "Mexico" },
    { code: "+373", country: "Moldova" },
    { code: "+976", country: "Mongolia" },
    { code: "+382", country: "Montenegro" },
    { code: "+212", country: "Morocco" },
    { code: "+258", country: "Mozambique" },
    { code: "+95", country: "Myanmar" },
    { code: "+264", country: "Namibia" },
    { code: "+977", country: "Nepal" },
    { code: "+31", country: "Netherlands" },
    { code: "+64", country: "New Zealand" },
    { code: "+505", country: "Nicaragua" },
    { code: "+227", country: "Niger" },
    { code: "+234", country: "Nigeria" },
    { code: "+389", country: "North Macedonia" },
    { code: "+47", country: "Norway" },
    { code: "+968", country: "Oman" },
    { code: "+92", country: "Pakistan" },
    { code: "+507", country: "Panama" },
    { code: "+675", country: "Papua New Guinea" },
    { code: "+595", country: "Paraguay" },
    { code: "+51", country: "Peru" },
    { code: "+63", country: "Philippines" },
    { code: "+48", country: "Poland" },
    { code: "+351", country: "Portugal" },
    { code: "+974", country: "Qatar" },
    { code: "+40", country: "Romania" },
    { code: "+7", country: "Russia" },
    { code: "+250", country: "Rwanda" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+221", country: "Senegal" },
    { code: "+381", country: "Serbia" },
    { code: "+232", country: "Sierra Leone" },
    { code: "+65", country: "Singapore" },
    { code: "+421", country: "Slovakia" },
    { code: "+386", country: "Slovenia" },
    { code: "+252", country: "Somalia" },
    { code: "+27", country: "South Africa" },
    { code: "+211", country: "South Sudan" },
    { code: "+34", country: "Spain" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+249", country: "Sudan" },
    { code: "+597", country: "Suriname" },
    { code: "+46", country: "Sweden" },
    { code: "+41", country: "Switzerland" },
    { code: "+963", country: "Syria" },
    { code: "+886", country: "Taiwan" },
    { code: "+992", country: "Tajikistan" },
    { code: "+255", country: "Tanzania" },
    { code: "+66", country: "Thailand" },
    { code: "+228", country: "Togo" },
    { code: "+216", country: "Tunisia" },
    { code: "+90", country: "Turkey" },
    { code: "+993", country: "Turkmenistan" },
    { code: "+256", country: "Uganda" },
    { code: "+380", country: "Ukraine" },
    { code: "+971", country: "UAE" },
    { code: "+44", country: "United Kingdom" },
    { code: "+1", country: "United States" },
    { code: "+598", country: "Uruguay" },
    { code: "+998", country: "Uzbekistan" },
    { code: "+58", country: "Venezuela" },
    { code: "+84", country: "Vietnam" },
    { code: "+967", country: "Yemen" },
    { code: "+260", country: "Zambia" },
    { code: "+263", country: "Zimbabwe" },
];

export default function QuoteModal() {

    const { quoteOpen, closeQuote } = useQuote();
    const isOpen = quoteOpen;
    const onClose = closeQuote;

    const [step, setStep] = useState(1);
    const [freight, setFreight] = useState(null);
    const [containerSize, setContainerSize] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [countryCode, setCountryCode] = useState("+91");

    const [form, setForm] = useState({
        origin: "", destination: "", weight: "",
        incoterm: "", cargoType: "", name: "",
        company: "", email: "", phone: "",
        shipmentDate: "", notes: "",
    });

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: "" }));
    };

    useEffect(() => {
        if (isOpen) {
            if (window.lenis) window.lenis.stop();
        } else {
            if (window.lenis) window.lenis.start();
        }

        return () => {
            if (window.lenis) window.lenis.start();
        };
    }, [isOpen]);

    const validateStep1 = () => {
        const newErrors = {};
        if (!form.origin.trim()) newErrors.origin = "Origin is required";
        if (!form.destination.trim()) newErrors.destination = "Destination is required";
        if (!freight) newErrors.freight = "Please select a freight type";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (!containerSize) newErrors.containerSize = "Please select a container size";
        if (!form.cargoType) newErrors.cargoType = "Please select a cargo type";
        if (!form.weight.trim()) newErrors.weight = "Weight is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep3 = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.company.trim()) newErrors.company = "Company is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!form.phone.trim()) newErrors.phone = "Phone is required";
        else if (!/^\d{6,15}$/.test(form.phone.replace(/\s/g, ""))) newErrors.phone = "Enter a valid phone number";
        if (!form.shipmentDate) newErrors.shipmentDate = "Shipment date is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleStep1Continue = () => {
        if (validateStep1()) setStep(2);
    };

    const handleStep2Continue = () => {
        if (validateStep2()) setStep(3);
    };

    const handleSubmit = () => {
        if (!validateStep3()) return;

        emailjs.send(
            "service_bgswcnc",
            "template_5ng4n9i",
            {
                from_name: form.name,
                company: form.company,
                email: form.email,
                phone: `${countryCode} ${form.phone}`,
                origin: form.origin,
                destination: form.destination,
                freight_type: freight,
                container_size: containerSize,
                cargo_type: form.cargoType,
                weight: form.weight,
                incoterm: form.incoterm,
                shipment_date: form.shipmentDate,
                notes: form.notes,
            },
            "8T9Gsr4biQ7tJaxvq"
        )
            .then(() => {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    setStep(1);
                    setFreight(null);
                    setContainerSize(null);
                    setCountryCode("+91");
                    setErrors({});
                    setForm({ origin: "", destination: "", weight: "", incoterm: "", cargoType: "", name: "", company: "", email: "", phone: "", shipmentDate: "", notes: "" });
                    onClose();
                }, 3000);
            })
            .catch((err) => {
                console.error("EmailJS error:", err);
                alert("Something went wrong. Please try again.");
            });
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[2000] flex items-center justify-center px-4"
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div
                style={{
                    background: "#fff",
                    width: "100%",
                    maxWidth: "520px",
                    borderRadius: "16px",
                    fontFamily: "nb-thin",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    animation: "fadeScaleIn 0.3s ease forwards",
                }}
            >
                {/* HEADER */}
                <div style={{ borderBottom: "1px solid #f0f0f0", padding: "20px 24px 16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                            <p style={{ color: "#FD9708", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 4px" }}>
                                Luke Shipping Company
                            </p>
                            <h2 style={{ fontSize: "17px", fontWeight: 500, margin: 0, color: "#111" }}>
                                {STEP_TITLES[step - 1]}
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#999", lineHeight: 1, padding: "2px 0 0" }}
                        >✕</button>
                    </div>
                    <div style={{ display: "flex", gap: "4px", marginTop: "16px" }}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} style={{
                                height: "2px", flex: 1,
                                background: i <= step ? "#FD9708" : "#e5e5e5",
                                borderRadius: "2px",
                                transition: "background 0.3s"
                            }} />
                        ))}
                    </div>
                </div>

                {/* BODY */}
                <div style={{ padding: "24px" }}>

                    {/* STEP 1 */}
                    {step === 1 && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                                <div>
                                    <label style={labelStyle}>From</label>
                                    <input
                                        type="text"
                                        placeholder="Origin city / port"
                                        value={form.origin}
                                        onChange={e => handleChange("origin", e.target.value)}
                                        style={{ ...inputStyle, borderColor: errors.origin ? "#f87171" : "#e5e5e5" }}
                                        onFocus={e => e.target.style.borderColor = errors.origin ? "#f87171" : "#FD9708"}
                                        onBlur={e => e.target.style.borderColor = errors.origin ? "#f87171" : "#e5e5e5"}
                                    />
                                    {errors.origin && <p style={errorStyle}>{errors.origin}</p>}
                                </div>
                                <div>
                                    <label style={labelStyle}>To</label>
                                    <input
                                        type="text"
                                        placeholder="Destination city / port"
                                        value={form.destination}
                                        onChange={e => handleChange("destination", e.target.value)}
                                        style={{ ...inputStyle, borderColor: errors.destination ? "#f87171" : "#e5e5e5" }}
                                        onFocus={e => e.target.style.borderColor = errors.destination ? "#f87171" : "#FD9708"}
                                        onBlur={e => e.target.style.borderColor = errors.destination ? "#f87171" : "#e5e5e5"}
                                    />
                                    {errors.destination && <p style={errorStyle}>{errors.destination}</p>}
                                </div>
                            </div>

                            <div>
                                <label style={labelStyle}>Freight Type</label>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginTop: "8px" }}>
                                    {FREIGHT_TYPES.map((ft) => (
                                        <div
                                            key={ft.val}
                                            onClick={() => { setFreight(ft.val); setErrors(p => ({ ...p, freight: "" })); }}
                                            style={{
                                                border: `1.5px solid ${errors.freight ? "#f87171" : freight === ft.val ? "#FD9708" : "#e5e5e5"}`,
                                                background: freight === ft.val ? "#fffbf5" : "#fff",
                                                borderRadius: "10px",
                                                padding: "12px 8px",
                                                textAlign: "center",
                                                cursor: "pointer",
                                                transition: "all 0.15s",
                                            }}
                                        >
                                            <div style={{ marginBottom: "5px", display: "flex", justifyContent: "center", color: freight === ft.val ? "#FD9708" : "#666" }}>
                                                {ft.icon}
                                            </div>
                                            <div style={{ fontSize: "12px", fontWeight: 500, color: freight === ft.val ? "#FD9708" : "#111" }}>{ft.label}</div>
                                            <div style={{ fontSize: "10px", color: "#bbb", marginTop: "2px" }}>{ft.sub}</div>
                                        </div>
                                    ))}
                                </div>
                                {errors.freight && <p style={errorStyle}>{errors.freight}</p>}
                            </div>

                            <button style={primaryBtn} onClick={handleStep1Continue}>Continue</button>
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <div>
                                <label style={labelStyle}>Container / Cargo Size</label>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "8px" }}>
                                    {CONTAINER_SIZES.map((s) => (
                                        <div
                                            key={s.val}
                                            onClick={() => { setContainerSize(s.val); setErrors(p => ({ ...p, containerSize: "" })); }}
                                            style={{
                                                border: `1.5px solid ${errors.containerSize ? "#f87171" : containerSize === s.val ? "#FD9708" : "#e5e5e5"}`,
                                                background: containerSize === s.val ? "#fffbf5" : "#fff",
                                                borderRadius: "8px",
                                                padding: "10px 12px",
                                                cursor: "pointer",
                                                transition: "all 0.15s",
                                            }}
                                        >
                                            <div style={{ fontSize: "12px", fontWeight: 500, color: containerSize === s.val ? "#FD9708" : "#111" }}>{s.label}</div>
                                            <div style={{ fontSize: "10px", color: "#bbb" }}>{s.sub}</div>
                                        </div>
                                    ))}
                                </div>
                                {errors.containerSize && <p style={errorStyle}>{errors.containerSize}</p>}
                            </div>

                            <div>
                                <label style={labelStyle}>Cargo Type</label>
                                <select
                                    value={form.cargoType}
                                    onChange={e => handleChange("cargoType", e.target.value)}
                                    style={{ ...inputStyle, appearance: "none", borderColor: errors.cargoType ? "#f87171" : "#e5e5e5" }}
                                >
                                    <option value="">Select cargo type</option>
                                    {CARGO_TYPES.map((c) => <option key={c}>{c}</option>)}
                                </select>
                                {errors.cargoType && <p style={errorStyle}>{errors.cargoType}</p>}
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                                <div>
                                    <label style={labelStyle}>Est. Weight</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. 5000 kg"
                                        value={form.weight}
                                        onChange={e => handleChange("weight", e.target.value)}
                                        style={{ ...inputStyle, borderColor: errors.weight ? "#f87171" : "#e5e5e5" }}
                                        onFocus={e => e.target.style.borderColor = "#FD9708"}
                                        onBlur={e => e.target.style.borderColor = errors.weight ? "#f87171" : "#e5e5e5"}
                                    />
                                    {errors.weight && <p style={errorStyle}>{errors.weight}</p>}
                                </div>
                                <div>
                                    <label style={labelStyle}>Incoterm</label>
                                    <select
                                        value={form.incoterm}
                                        onChange={e => handleChange("incoterm", e.target.value)}
                                        style={{ ...inputStyle, appearance: "none" }}
                                    >
                                        <option value="">Select</option>
                                        {INCOTERMS.map((t) => <option key={t}>{t}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "10px" }}>
                                <button style={secondaryBtn} onClick={() => setStep(1)}>← Back</button>
                                <button style={{ ...primaryBtn, flex: 2 }} onClick={handleStep2Continue}>Continue</button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                                <div>
                                    <label style={labelStyle}>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={e => handleChange("name", e.target.value)}
                                        style={{ ...inputStyle, borderColor: errors.name ? "#f87171" : "#e5e5e5" }}
                                        onFocus={e => e.target.style.borderColor = "#FD9708"}
                                        onBlur={e => e.target.style.borderColor = errors.name ? "#f87171" : "#e5e5e5"}
                                    />
                                    {errors.name && <p style={errorStyle}>{errors.name}</p>}
                                </div>
                                <div>
                                    <label style={labelStyle}>Company</label>
                                    <input
                                        type="text"
                                        placeholder="Company name"
                                        value={form.company}
                                        onChange={e => handleChange("company", e.target.value)}
                                        style={{ ...inputStyle, borderColor: errors.company ? "#f87171" : "#e5e5e5" }}
                                        onFocus={e => e.target.style.borderColor = "#FD9708"}
                                        onBlur={e => e.target.style.borderColor = errors.company ? "#f87171" : "#e5e5e5"}
                                    />
                                    {errors.company && <p style={errorStyle}>{errors.company}</p>}
                                </div>
                            </div>

                            <div>
                                <label style={labelStyle}>Email</label>
                                <input
                                    type="email"
                                    placeholder="you@company.com"
                                    value={form.email}
                                    onChange={e => handleChange("email", e.target.value)}
                                    style={{ ...inputStyle, borderColor: errors.email ? "#f87171" : "#e5e5e5" }}
                                    onFocus={e => e.target.style.borderColor = "#FD9708"}
                                    onBlur={e => e.target.style.borderColor = errors.email ? "#f87171" : "#e5e5e5"}
                                />
                                {errors.email && <p style={errorStyle}>{errors.email}</p>}
                            </div>

                            <div>
                                <label style={labelStyle}>Phone</label>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <select
                                        value={countryCode}
                                        onChange={e => setCountryCode(e.target.value)}
                                        style={{ ...inputStyle, width: "130px", flexShrink: 0, appearance: "none", paddingRight: "8px" }}
                                    >
                                        {COUNTRY_CODES.map((c) => (
                                            <option key={`${c.country}-${c.code}`} value={c.code}>
                                                {c.code} {c.country}
                                            </option>
                                        ))}
                                    </select>
                                    <div style={{ flex: 1 }}>
                                        <input
                                            type="tel"
                                            placeholder="00000 00000"
                                            value={form.phone}
                                            onChange={e => handleChange("phone", e.target.value.replace(/[^0-9\s]/g, ""))}
                                            style={{ ...inputStyle, borderColor: errors.phone ? "#f87171" : "#e5e5e5" }}
                                            onFocus={e => e.target.style.borderColor = "#FD9708"}
                                            onBlur={e => e.target.style.borderColor = errors.phone ? "#f87171" : "#e5e5e5"}
                                        />
                                    </div>
                                </div>
                                {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
                            </div>

                            <div>
                                <label style={labelStyle}>Shipment Date</label>
                                <input
                                    type="date"
                                    value={form.shipmentDate}
                                    onChange={e => handleChange("shipmentDate", e.target.value)}
                                    style={{ ...inputStyle, borderColor: errors.shipmentDate ? "#f87171" : "#e5e5e5" }}
                                    onFocus={e => e.target.style.borderColor = "#FD9708"}
                                    onBlur={e => e.target.style.borderColor = errors.shipmentDate ? "#f87171" : "#e5e5e5"}
                                />
                                {errors.shipmentDate && <p style={errorStyle}>{errors.shipmentDate}</p>}
                            </div>

                            <div>
                                <label style={labelStyle}>Notes (optional)</label>
                                <textarea
                                    rows={2}
                                    placeholder="Special requirements, dimensions, hazmat..."
                                    value={form.notes}
                                    onChange={e => handleChange("notes", e.target.value)}
                                    style={{ ...inputStyle, resize: "none", fontFamily: "nb-thin" }}
                                    onFocus={e => e.target.style.borderColor = "#FD9708"}
                                    onBlur={e => e.target.style.borderColor = "#e5e5e5"}
                                />
                            </div>

                            {submitted && (
                                <div style={{ background: "#f6fef9", border: "1px solid #bbf7d0", borderRadius: "8px", padding: "14px", textAlign: "center" }}>
                                    <div style={{ fontWeight: 500, color: "#15803d", fontSize: "14px" }}>✓ Quote request sent</div>
                                    <div style={{ fontSize: "12px", color: "#16a34a", marginTop: "4px" }}>We'll get back to you within 24 hours.</div>
                                </div>
                            )}

                            <div style={{ display: "flex", gap: "10px" }}>
                                <button style={secondaryBtn} onClick={() => setStep(2)}>← Back</button>
                                <button
                                    style={{ ...primaryBtn, flex: 2, background: "#111", color: "#FD9708" }}
                                    onClick={handleSubmit}
                                >Submit Request</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
        @keyframes fadeScaleIn {
          from { opacity: 0; transform: scale(0.97) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
        </div>
    );
}

const labelStyle = {
    fontSize: "11px",
    color: "#888",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "6px",
};

const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    padding: "10px 12px",
    fontSize: "13px",
    outline: "none",
    background: "#fff",
    transition: "border 0.2s",
    fontFamily: "nb-thin",
    color: "#111",
};

const primaryBtn = {
    width: "100%",
    background: "#FD9708",
    border: "none",
    color: "#111",
    fontSize: "13px",
    padding: "13px",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "nb-thin",
    letterSpacing: "0.04em",
};

const secondaryBtn = {
    flex: 1,
    background: "#f5f5f5",
    border: "none",
    color: "#555",
    fontSize: "13px",
    padding: "13px",
    borderRadius: "8px",
    cursor: "pointer",
    fontFamily: "nb-thin",
};

const errorStyle = {
    fontSize: "11px",
    color: "#ef4444",
    margin: "4px 0 0",
};