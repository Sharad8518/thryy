import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import img from "../assets/w-logo.png";
import { motion } from "framer-motion";
export default function Whoweare() {
    return (_jsxs("div", { className: "flex items-center justify-center h-[450px] flex-col text-center", children: [_jsx(motion.h1, { className: "text-2xl font-bold text-white", style: { fontFamily: "'Roboto', sans-serif" }, initial: { opacity: 0, y: -30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" }, viewport: { once: true }, children: "Who We Are" }), _jsx(motion.h1, { className: "text-3xl font-bold text-white mt-3", style: { fontFamily: "'Roboto', sans-serif" }, initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }, viewport: { once: true }, children: "The Science of Recovery, Now in India" }), _jsx(motion.p, { style: {
                    width: "60%",
                    textAlign: "center",
                    color: "#fff",
                    fontFamily: "'Roboto', sans-serif",
                }, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, viewport: { once: true }, children: "Thryvv Recovery Lounge was created to bring global-standard recovery therapies to India. Our expert team of physiotherapists, nutritionists, and recovery specialists ensure you receive personalized care to heal, recharge, and perform at your best." }), _jsx(motion.img, { src: img, alt: "Who We Are", style: { width: 200, height: 200, marginTop: 20 }, initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.7, delay: 0.6, type: "spring", stiffness: 100 }, viewport: { once: true } })] }));
}
