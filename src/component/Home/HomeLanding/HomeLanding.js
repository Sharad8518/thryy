import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import herobg from "../../../assets/hero.jpg";
import "./HomeLanding.css";
import { motion } from "framer-motion";
export default function HomeLanding() {
    return (_jsx("section", { className: "relative w-full h-[89vh] bg-cover bg-center bg-no-repeat", style: { backgroundImage: `url(${herobg})` }, children: _jsxs(motion.div, { initial: { opacity: 0, x: 150 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, ease: "easeOut" }, className: "absolute top-0 right-[150px] w-[350px] h-full\r\n             bg-white/20 backdrop-blur-lg rounded-lg\r\n             p-6 flex flex-col items-center justify-center space-y-4", children: [_jsx(motion.h3, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.3 }, className: "text-white text-2xl md:text-3xl font-bold leading-snug font-heading", style: { fontFamily: "Playfair Display", fontSize: 35 }, children: "Recharge. Revive. Reimagine Wellness." }), _jsx(motion.h5, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.5 }, className: "text-white text-sm md:text-base font-normal leading-relaxed", children: "Discover Thryvv Recovery Lounge \u2014 your sanctuary for premium recovery therapies, designed to heal your body, calm your mind, and elevate your lifestyle." }), _jsxs(motion.div, { className: "flex flex-col gap-4 mt-4 w-full", initial: "hidden", animate: "visible", variants: {
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 },
                        },
                    }, children: [_jsx(motion.button, { variants: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }, transition: { duration: 0.6 }, className: "w-full bg-white text-black font-semibold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-gray-200", children: "Book Now" }), _jsx(motion.button, { variants: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }, transition: { duration: 0.6 }, className: "w-full bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-white hover:text-black", children: "Explore Services" })] })] }) }));
}
