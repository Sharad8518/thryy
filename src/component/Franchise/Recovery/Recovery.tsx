
import { motion } from "framer-motion";
export default function Recovery() {
  return (
    <div className="h-[350px] flex items-center justify-center bg-gradient-to-r from-[#407BFF] to-[#006291]">
      <div className="text-center max-w-1xl px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Roboto', sans-serif" }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Be part of India’s first fitness recovery revolution
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-white/90 text-lg mb-8"
          style={{ fontFamily: "'Roboto', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Limited territories available!
        </motion.p>

        {/* Button */}
        <motion.button
          className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
          style={{ fontFamily: "'Roboto', sans-serif" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Apply for Franchise Today
        </motion.button>
      </div>
    </div>
  )
}
