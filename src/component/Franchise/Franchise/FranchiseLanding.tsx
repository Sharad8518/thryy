import { motion } from "framer-motion";

export default function FranchiseLanding() {
  return (
    <div className="bg-gradient-to-r from-[#001D2B] to-[#006291] flex items-center justify-center text-white flex-col" style={{height:"85vh"}}>
      {/* Heading */}
      <motion.h1
        className="text-4xl text-center"
        style={{ fontFamily: "Playfair Display" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Own a Piece of India’s First Fitness Recovery Lounge Chain
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-2xl text-center mt-5"
        style={{ fontFamily: "'Roboto', sans-serif" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        Join the booming wellness industry with a proven, profitable business model.
      </motion.p>

      {/* Button */}
      <motion.button
        className="bg-white h-[40px] w-[300px] mt-10 text-black"
        style={{ borderRadius: 100, fontFamily: "'Roboto', sans-serif" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Apply for Franchise Today
      </motion.button>
    </div>
  )
}
