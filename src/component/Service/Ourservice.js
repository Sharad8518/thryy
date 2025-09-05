import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from 'framer-motion';
import mobile1 from "../../assets/mobile/mobile1.png";
import mobile2 from "../../assets/mobile/mobile2.png";
import { ArrowUpRight } from "lucide-react";
import "./Ourservice.css";
import "swiper/css";
import "swiper/css/pagination";
export default function Ourservice() {
    const cards = [
        {
            id: 1,
            image: "https://media.post.rvohealth.io/wp-content/uploads/2020/07/Young-female-receiving-massage-by-therapist-in-traditional-thai-position-1200x628-facebook-1200x628.jpg",
            title: "Leg Air Compression Mass...",
            description: "Detoxify your body and soothe your senses with our rejuvenating steam therapy, designed to promote deep relaxation and improved circulation.",
        },
        {
            id: 2,
            image: "https://media.post.rvohealth.io/wp-content/uploads/2020/07/Young-female-receiving-massage-by-therapist-in-traditional-thai-position-1200x628-facebook-1200x628.jpg",
            title: "Leg Air Compression Mass...",
            description: "Detoxify your body and soothe your senses with our rejuvenating steam therapy, designed to promote deep relaxation and improved circulation.",
        },
        {
            id: 3,
            image: "https://www.health.com/thmb/XwSLq9__b0ANDbCqdb2kGAVdXLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1438172458-fc10c26db84048b99a3feaa316701fa3.jpg",
            title: "Card Title 2",
            description: "Detoxify your body and soothe your senses with our rejuvenating steam therapy, designed to promote deep relaxation and improved circulation.",
        },
        {
            id: 4,
            image: "https://media.istockphoto.com/id/591403622/photo/man-receiving-forehead-massage.jpg?s=612x612&w=0&k=20&c=LeoSFWQgkOxHY700KoXF5STCYpFGg47nGhOM5SU7c2I=",
            title: "Card Title 3",
            description: "Detoxify your body and soothe your senses with our rejuvenating steam therapy, designed to promote deep relaxation and improved circulation.",
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: " text-white flex flex-col items-center  px-6 md:px-12", children: [_jsx("h1", { className: "text-3xl md:text-5xl font-bold mb-4", style: { fontSize: 40, fontFamily: "'Roboto', sans-serif" }, children: "Our services" }), _jsx("p", { className: "text-lg md:text-xl leading-relaxed", style: { fontSize: 16, fontFamily: "'Roboto', sans-serif", textAlign: "center" }, children: "Where innovation meets recovery \u2014 every service tailored for your body\u2019s peak potential." }), _jsx("br", {})] }), _jsx("section", { className: "bg-white  p-6", children: _jsxs("div", { className: "grid grid-cols-3 gap-4", children: [_jsx("div", { className: "bg-white p-4 col-span-2", children: _jsx(Swiper, { modules: [Pagination], spaceBetween: 20, slidesPerView: 3, centeredSlides: true, pagination: { clickable: true }, onSwiper: (swiper) => console.log(swiper), className: "mySwiper", breakpoints: {
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }, children: cards.map((card) => (_jsx(SwiperSlide, { className: "transition-transform duration-300", children: ({ isActive }) => (_jsxs("div", { className: `bg-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col items-center transform transition-transform duration-300 ${isActive ? "scale-105" : "scale-90 opacity-70"}`, children: [_jsx("img", { src: card.image, alt: card.title, className: "w-full h-40 object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-lg font-bold", children: card.title }), _jsx("p", { className: "text-gray-600 text-sm mt-2", children: card.description })] }), _jsx("button", { className: "bg-blue-600 text-white px-4 py-2 rounded-lg transition", style: { backgroundColor: "#200733", width: "90%", marginBottom: 10 }, children: "Explore" })] })) }, card.id))) }) }), _jsx("div", { className: "bg-white-700 p-4 col-span-1 flex items-center justify-center flex-col", children: _jsxs(motion.div, { className: "bg-white text-gray-900 rounded-2xl  p-6 flex flex-col  max-w-sm", children: [_jsx("h2", { className: "text-2xl font-bold mb-2", children: "Experience the Thryvv Difference" }), _jsx("p", { className: "text-gray-600 text-center mb-4", children: "From advanced recovery treatments to holistic wellness solutions, our curated range of services is designed to help you feel, move, and live at your absolute best." }), _jsx("button", { className: "bg-blue-600 text-white px-4 py-2 rounded-lg  transition", style: { backgroundColor: "#200733", }, children: "Explore" })] }) })] }) }), _jsx("section", { className: " p-6 ", style: { boxSizing: "border-box" }, children: _jsxs("div", { className: "grid grid-cols-4 gap-2", children: [_jsx("div", { className: "p-4 col-span-2 flex justify-center items-center", children: _jsxs("div", { className: "p-4 w-2/3 ", style: { marginTop: 100 }, children: [_jsx("h1", { className: "text-3xl md:text-5xl font-bold mb-4 text-white", style: { fontSize: 30 }, children: "Your health is your greatest investment\u2014start today." }), _jsx("p", { className: "text-white", children: "Take the first step toward lasting wellness with expert care, personalized plans, and unwavering support, empowering you to live a healthier, more vibrant, and balanced life every day\u2014 nurturing your mind, body, and spirit for long-term health, happiness, and fulfillment." }), _jsxs("button", { className: "inline-flex items-center px-6 py-3 bg-white hover:bg-white text-black rounded-2xl font-semibold shadow-lg transition justify-center", style: { marginTop: 20, width: 250 }, children: ["Book Now", _jsx(ArrowUpRight, { className: "ml-2 w-5 h-5" })] })] }) }), _jsxs("div", { className: " text-white p-4 col-span-2 flex item-center justify-center min-h-[600px]", style: { position: "relative" }, children: [_jsx("img", { src: mobile1, style: { position: "absolute", left: 0 } }), _jsx("img", { src: mobile2, style: { position: "absolute", right: 0, top: 200 } })] })] }) })] }));
}
