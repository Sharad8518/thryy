
import { motion } from "framer-motion";
import img1 from "../../assets/Exprience/1.jpg"
import img2 from "../../assets/Exprience/2.jpg"
import img3 from "../../assets/Exprience/3.jpg"
import img4 from "../../assets/Exprience/4.jpg"
import img5 from "../../assets/Exprience/5.jpg"
import img6 from "../../assets/Exprience/6.jpg"
import img7 from "../../assets/Exprience/6.jpg"
import { ArrowUpRight } from 'lucide-react';
const services = [
 {
    id: 1,
    title: "Steam Bath",
    description:
      "Detoxify your body and soothe your senses with our rejuvenating steam therapy, designed to promote deep relaxation and improved circulation.",
    benefits: ["Muscle relaxation", "Toxin removal", "Glowing skin"],
    image: img1,
  },
  {
    id: 2,
    title: "Ice Bath",
    description:
      "Reduce inflammation, speed up recovery, and boost mental clarity with an invigorating ice bath experience — a refreshing ritual to recharge your body and mind",
    benefits: ["Muscle relaxation,", "toxin removal", "Iglowing skin"],
    image: img2,
  },

    {
    id: 3,
    title: "Red Light Therapy",
    description:
      "Stimulate cell regeneration and speed up healing with advanced red light technology.",
    benefits: ["Skin rejuvenation", "joint pain relief", "muscle repair"],
    image: img3,
  },

  
    {
    id: 4,
    title: "Leg Air Compression Massage",
    description:
      "Boost circulation, drain excess fluid, and reduce swelling in tired legs.",
    benefits: ["Lymphatic drainage", "leg fatigue relief", "post-workout recover"],
    image: img4,
  },

  {
    id: 5,
    title: "Fitness Cupping & Needling",
    description:
      "Deep tissue recovery for pain relief and mobility improvement",
    benefits: ["Muscle knot release", "improved flexibility", "increased blood flow."],
    image: img5,
  },

    {
    id: 6,
    title: "Physiotherapy",
    description:
      "Get professional rehab plans, posture correction, and strength training guidance.",
    benefits: ["Injury recovery", "mobility improvement", "pain managemen"],
    image: img6,
  },

    {
    id: 7,
    title: "Nutritional & Dietician Consultation",
    description:
      "Custom nutrition plans for recovery, fitness goals, and overall wellness .",
    benefits: ["Weight management", "sports nutrition", "immunity boost"],
    image: img7,
  },

   {
    id: 8,
    title: "Kinesiology Tape",
    description:
      "Boost performance, reduce pain, and support recovery with flexible taping that stabilizes muscles and promotes circulation.",
    benefits: ["Injury Recovery", "Improved Mobility", "Pain Relief","Enhanced Muscle Support"],
    image: img5,
  },
];
export default function Experience() {
  return (
     <div className="w-full flex flex-col items-center justify-center text-center px-6 py-12">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-6"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        Experience the Thryvv Difference
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl text-lg text-gray-200"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        From advanced recovery treatments to holistic wellness solutions, our
        curated range of services is designed to help you feel, move, and live
        at your absolute best.
      </motion.p>

      <div className="max-w-6xl mx-auto space-y-12 px-6 mt-20">
  {services.map((service, index) => (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row items-center  rounded-2xl  overflow-hidden ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="md:w-1/2 w-full p-8 text-center md:text-left">
        <h2 className="text-2xl font-bold text-white mb-4">
          {service.title}
        </h2>
        <p className="text-gray-600 mb-4 text-white">{service.description}</p>

        {/* Benefits */}
        <ul className="text-white mb-6 list-disc list-inside flex ml-5 flex-wrap " style={{listStyle:"none"}}>
            <li style={{marginRight:10}}>Benefit : </li>
          {service.benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>

        {/* Button */}
        <button className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-md hover:bg-blue-700 transition flex item-center justify-center" style={{width:"100%"}}>
          Contact To Book Slot <ArrowUpRight style={{marginLeft:5}}/>
        </button>
      </div>
    </motion.div>
  ))}
</div>
    </div>
  )
}
