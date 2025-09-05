import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import circle from "../../../assets/Icon/circle.png";
import location from "../../../assets/Icon/location.png";
import setting from "../../../assets/Icon/setting.png";
import sound from "../../../assets/Icon/sound.png";
import { motion } from "framer-motion";
export default function Partner() {
    const partners = [
        {
            icon: location,
            title: "Exclusive territory rights",
            description: "Your own dedicated market.",
        },
        {
            icon: setting,
            title: "End-to-End Setup Support",
            description: "From design to launch.",
        },
        {
            icon: sound,
            title: "Marketing & Branding",
            description: "National campaigns for local growth.",
        },
        {
            icon: circle,
            title: "Ongoing Training",
            description: "Guidance for long-term success.",
        },
    ];
    return (_jsxs("div", { className: "py-16 bg-gray-50 flex flex-col items-center", children: [_jsx(motion.h2, { className: "text-4xl font-bold text-center mb-5", style: { fontFamily: "'Roboto', sans-serif" }, initial: { opacity: 0, y: -30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, viewport: { once: true }, children: "Why partner with Thryvv?" }), _jsx(motion.p, { style: { fontFamily: "'Roboto', sans-serif", textAlign: "center" }, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }, viewport: { once: true }, children: "Backed by expertise, brand trust, and a growing fitness recovery market." }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full px-6 mt-10", children: partners.map((item, index) => (_jsxs(motion.div, { className: "bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition", initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.7, delay: index * 0.2, ease: "easeOut" }, viewport: { once: true }, children: [_jsx("img", { src: item.icon, style: { width: 50, height: 50 }, alt: "icon" }), _jsx("h3", { className: "font-semibold mt-4", style: { fontFamily: "'Roboto', sans-serif" }, children: item.title }), _jsx("p", { className: "text-gray-600 mt-2", style: { fontSize: 12, fontFamily: "'Roboto', sans-serif" }, children: item.description })] }, index))) })] }));
}
