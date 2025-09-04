
import img from "../../../assets/Franchise.png"
import { motion } from "framer-motion";
export default function AboutFranchise() {
    return (
         <div
      className="flex items-center justify-center"
      style={{ height: "80vh" }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-6"
        style={{ height: "100%" }}
      >
        {/* Left Column - Image */}
        <motion.div
          className="flex items-center justify-center"
          style={{ height: "100%" }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={img}
            alt="Franchise"
            className="rounded-2xl shadow-lg"
            style={{ width: 250 }}
          />
        </motion.div>

        {/* Right Column - Text */}
        <motion.div
          className="flex flex-col justify-center"
          style={{ alignItems: "end" }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            About Our Franchise
          </h2>
          <p
            className="text-lg leading-relaxed text-white"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            The wellness and recovery industry is booming globally. Be part of
            the movement with Thryvv Recovery Lounge — a proven business model
            backed by expert support, premium branding, and growing demand.
          </p>

          <motion.button
            className="bg-white w-[280px] h-[40px] mt-6 text-black"
            style={{ borderRadius: 100, fontFamily: "'Roboto', sans-serif" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Franchise Today
          </motion.button>
        </motion.div>
      </div>
    </div>
    )
}
