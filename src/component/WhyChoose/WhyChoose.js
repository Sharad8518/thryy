import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import room from "../../assets/room.jpg";
import "./WhyChoose.css";
import { motion } from "framer-motion";
export default function WhyChoose() {
    const features = [
        {
            number: "01",
            title: "India’s First Full-Scale Recovery Lounge",
            desc: "All therapies under one roof",
        },
        {
            number: "02",
            title: "Science-Backed Recovery Methods",
            desc: "Trusted by athletes worldwide",
        },
        {
            number: "03",
            title: "Expert Team",
            desc: "Certified physiotherapists & nutritionists",
        },
        {
            number: "04",
            title: "Premium & Hygienic Environment",
            desc: "Clean, private, and relaxing space",
        },
        {
            number: "05",
            title: "Custom Packages",
            desc: "Pay per session or choose monthly recovery plans",
        },
    ];
    return (_jsx("section", { className: "py-12 px-6 flex flex-col items-center", children: _jsx("div", { className: "container mx-auto px-6", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center", children: [_jsxs(motion.div, { style: { width: "60%" }, initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8, ease: "easeOut" }, viewport: { once: true }, children: [_jsx("h2", { className: "text-3xl font-bold mb-4 text-white", style: { fontFamily: "'Roboto', sans-serif" }, children: "Why Choose Thryvv Recovery Lounge?" }), _jsx("p", { className: "text-gray-600 mb-6", style: { fontFamily: "'Roboto', sans-serif" }, children: "At Thryvv Recovery, we go beyond just rest \u2014 we help you recharge, rebuild, and rise stronger. Whether you\u2019re an athlete pushing limits, a professional balancing long days, or someone who simply values well-being, our recovery solutions are designed to fit your lifestyle." }), _jsx(motion.img, { src: room, alt: "Recovery Room", initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.8, delay: 0.3 }, viewport: { once: true } })] }), _jsx(motion.div, { className: "flex flex-col justify-center space-y-8", initial: "hidden", whileInView: "visible", variants: {
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.2 },
                            },
                        }, viewport: { once: true }, children: features.map((item) => (_jsxs(motion.div, { className: "flex items-start gap-6", variants: {
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0 },
                            }, transition: { duration: 0.7, ease: "easeOut" }, children: [_jsx("div", { className: "text-6xl font-extrabold leading-none", style: {
                                        fontFamily: "'Purple Purse', serif",
                                        color: "#848f99",
                                    }, children: item.number }), _jsx("div", { style: { width: 2, height: 70, backgroundColor: "white" } }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-white", style: { fontFamily: "'Roboto', sans-serif" }, children: item.title }), _jsx("p", { className: "text-gray-600", style: { fontFamily: "'Roboto', sans-serif" }, children: item.desc })] })] }, item.number))) })] }) }) }));
}
