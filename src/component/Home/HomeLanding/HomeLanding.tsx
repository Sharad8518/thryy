
import herobg from "../../../assets/hero.jpg"
import "./HomeLanding.css"
import { motion } from "framer-motion";

export default function HomeLanding() {
  return (
     <section
      className="relative w-full h-[89vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Glass Box with Motion */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 right-[150px] w-[350px] h-full
             bg-white/20 backdrop-blur-lg rounded-lg
             p-6 flex flex-col items-center justify-center space-y-4"
      >
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white text-2xl md:text-3xl font-bold leading-snug font-heading"
          style={{ fontFamily: "Playfair Display", fontSize: 35 }}
        >
          Recharge. Revive. Reimagine Wellness.
        </motion.h3>

        <motion.h5
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white text-sm md:text-base font-normal leading-relaxed"
        >
          Discover Thryvv Recovery Lounge — your sanctuary for premium recovery
          therapies, designed to heal your body, calm your mind, and elevate
          your lifestyle.
        </motion.h5>

        {/* Buttons with staggered animation */}
        <motion.div
          className="flex flex-col gap-4 mt-4 w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.button
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white text-black font-semibold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-gray-200"
          >
            Book Now
          </motion.button>

          <motion.button
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="w-full bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Explore Services
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
