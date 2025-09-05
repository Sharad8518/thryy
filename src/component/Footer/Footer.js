import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import img from "../../assets/footer.jpg";
import logo from "../../assets/logo.png";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Phone, Mail } from "lucide-react";
import "./Footer.css";
export default function Footer() {
    return (_jsxs("div", { style: {
            backgroundColor: "#b7d2d6",
            backgroundImage: `url(${img})`,
            backgroundBlendMode: "overlay",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            minHeight: "600px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        }, children: [_jsx(motion.h2, { className: "text-2xl md:text-3xl font-bold text-black mb-4 text-center mt-20", style: { fontFamily: "'Roboto', sans-serif" }, initial: { opacity: 0, y: -20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: "Stay Connected. Stay Informed." }), _jsx(motion.p, { className: "text-black text-center", style: { fontFamily: "'Roboto', sans-serif" }, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, viewport: { once: true }, children: "Join our newsletter to get health tips, expert advice, and exclusive offers\u2014 delivered straight to your inbox." }), _jsxs(motion.div, { style: {
                    height: 45,
                    width: 550,
                    borderRadius: 100,
                    marginTop: 10,
                    backgroundColor: "#c2d9dd",
                    display: "flex",
                    padding: 5,
                    justifyContent: "center",
                }, initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.5, delay: 0.4 }, viewport: { once: true }, children: [_jsx("input", { placeholder: "Enter your email", style: {
                            background: "transparent",
                            outline: "none",
                            width: "76%",
                            fontFamily: "'Roboto', sans-serif",
                        } }), _jsx("button", { style: {
                            background: "#200733",
                            width: 120,
                            borderRadius: 100,
                            color: "#fff",
                            fontSize: 13,
                            fontFamily: "'Roboto', sans-serif",
                        }, children: "Subscribe" })] }), _jsxs(motion.footer, { style: {
                    marginTop: 50,
                    width: "100%",
                    height: 400,
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                    padding: "30px 80px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                }, initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, viewport: { once: true }, children: [_jsxs(motion.div, { style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 15,
                            flexDirection: "column",
                            width: "20%",
                        }, initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.7, delay: 0.8 }, viewport: { once: true }, children: [_jsx("img", { src: logo, alt: "Company Logo", style: { width: 150, height: 150, borderRadius: "50%" } }), _jsxs("div", { children: [_jsx("p", { style: {
                                            color: "#444444",
                                            fontWeight: "500",
                                            fontSize: 14,
                                            fontFamily: "'Roboto', sans-serif",
                                        }, children: "Empowering healthier lives through expert guidance, personalized plans, and a commitment to your well-being." }), _jsxs("p", { style: {
                                            fontSize: 14,
                                            color: "#000",
                                            display: "flex",
                                            gap: 6,
                                            marginTop: 5,
                                            fontFamily: "'Roboto', sans-serif",
                                        }, children: [_jsx(MapPin, { size: 20, style: { color: "#200733" } }), "No211 1st floor green glen layout, above Union Bank of India, Bellandur, Bengaluru 560103"] })] })] }), _jsxs(motion.div, { style: { width: "70%" }, initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.7, delay: 1 }, viewport: { once: true }, children: [_jsxs("div", { className: "flex flex-col items-center justify-center text-center mb-6", children: [_jsx("h2", { className: "text-xl font-bold mb-3", style: { fontFamily: "'Roboto', sans-serif" }, children: "Follow us" }), _jsx(motion.div, { className: "flex space-x-4", initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: {
                                            hidden: {},
                                            visible: {
                                                transition: { staggerChildren: 0.2 },
                                            },
                                        }, children: [Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (_jsx(motion.a, { href: "#", className: "p-2 rounded-full bg-white/30 hover:bg-white/50 transition", variants: {
                                                hidden: { opacity: 0, scale: 0.8 },
                                                visible: { opacity: 1, scale: 1 },
                                            }, whileHover: { scale: 1.2 }, children: _jsx(Icon, { className: "w-5 h-5" }) }, i))) })] }), _jsxs("div", { style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "80%",
                                    fontFamily: "'Roboto', sans-serif",
                                    margin: "0 auto",
                                }, children: [_jsxs("ul", { children: [_jsx("li", { children: "Contact us" }), _jsxs("li", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [_jsx(Phone, { size: 16, color: "#200733" }), "+91 7338651122"] }), _jsxs("li", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [_jsx(Mail, { size: 16, color: "#200733" }), "hello@wellnesshub.com"] })] }), _jsxs("ul", { style: { listStyle: "none" }, children: [_jsx("li", { children: _jsx("a", { href: "#", style: { color: "#200733", textDecoration: "none" }, children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: "#", style: { color: "#200733", textDecoration: "none" }, children: "About Us" }) }), _jsx("li", { children: _jsx("a", { href: "#", style: { color: "#200733", textDecoration: "none" }, children: "Services" }) })] }), _jsxs("ul", { style: { listStyle: "none" }, children: [_jsx("li", { children: _jsx("a", { href: "#", style: { color: "#200733", textDecoration: "none" }, children: "Contact" }) }), _jsx("li", { children: _jsx("a", { href: "#", style: { color: "#200733", textDecoration: "none" }, children: "Privacy Policy" }) }), _jsx("li", { children: _jsx("a", { href: "#", style: { color: "#200733", textDecoration: "none" }, children: "Terms & Conditions" }) })] }), _jsxs("ul", { style: { listStyle: "none" }, children: [_jsx("li", { children: _jsx("a", { href: "#", style: { color: "#200733", textDecoration: "none" }, children: "Wellness Programs" }) }), _jsx("li", { children: _jsx("a", { href: "#", style: { color: "#200733", textDecoration: "none" }, children: "Franchise" }) })] })] })] })] })] }));
}
