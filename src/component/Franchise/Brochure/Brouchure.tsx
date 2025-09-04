
import { ArrowDownToLine } from 'lucide-react';
import { motion } from "framer-motion";
export default function Brouchure() {
    return (
        <div
      className="flex items-center justify-center flex-col"
      style={{ height: "70vh" }}
    >
      {/* Animated Card */}
      <motion.div
        className="rounded-2xl shadow-lg p-10 w-[500px] text-center bg-gradient-to-r from-[#407BFF] to-[#006291]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          className="text-2xl font-bold mb-4 text-white"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Investment Starting From: ₹XX Lakhs
        </h2>
        <p
          className="text-2xl text-white mb-6"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Expected ROI: XX% annually
        </p>
      </motion.div>

      {/* Animated Button */}
      <motion.button
        className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition mt-10 flex items-center justify-center gap-2"
        style={{ fontFamily: "'Roboto', sans-serif", width: "250px" }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <ArrowDownToLine />
        Download Brochure
      </motion.button>
    </div>
    )
}
