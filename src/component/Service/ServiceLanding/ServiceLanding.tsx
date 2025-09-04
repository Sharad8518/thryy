
import img from "../../../assets/service.jpg"
import { ArrowUpRight } from 'lucide-react';
import { motion } from "framer-motion";

export default function ServiceLanding() {
  return (
 <div className="relative h-[91vh] w-full overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-bottom"
    style={{ backgroundImage: `url(${img})` }}
  />

  {/* Overlay (dark filter if needed) */}
  <div className="absolute inset-0 " />

  {/* Text content */}
  <div className="relative z-10 flex h-full items-center  flex-col mt-20">
    <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-bold text-white text-center"
        style={{ width: "35%", fontFamily: "Playfair Display" }}
      >
        Recover Smarter. Perform Stronger.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="mt-10 text-center text-white text-2xl"
        style={{ width: "40%", fontFamily: "'Roboto', sans-serif" }}
      >
        Unleash your full potential with advanced recovery therapies designed for
        athletes, fitness lovers, and high performers.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex items-center justify-between gap-4 mt-10"
      >
        <button
          className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-md hover:bg-blue-700 hover:text-white transition flex items-center justify-center"
          style={{ width: 250, fontFamily: "'Roboto', sans-serif" }}
        >
          Booking Service
          <ArrowUpRight className="ml-2" />
        </button>

        <button
          className="px-6 py-3 rounded-2xl border-2 border-white text-white font-semibold shadow-md hover:bg-white hover:text-gray-900 transition"
          style={{ width: 250, fontFamily: "'Roboto', sans-serif" }}
        >
          Explore Service
        </button>
      </motion.div>
  </div>
</div>
  )
}
