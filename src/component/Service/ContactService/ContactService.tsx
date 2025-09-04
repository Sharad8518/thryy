import mobile from "../../../assets/mobile/mobile3.png"
import { motion } from "framer-motion";
import { Phone } from 'lucide-react';
export default function ContactService() {
  return (
     <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="p-4 md:col-span-2 flex  justify-center flex-col text-white text-center md:text-left"
        >
          <h4 className="text-2xl font-bold mb-4"style={{fontFamily: "'Roboto', sans-serif",fontSize:35}}>
            Not Sure Which Service is Right for You?
          </h4>
          <p className="mb-4 text-lg" style={{fontFamily: "'Roboto', sans-serif"}}>
            Choosing the right recovery therapy can feel overwhelming—but you
            don’t have to figure it out alone. Our expert team is here to guide
            you.
          </p>
          <p className="text-lg" style={
            {fontFamily: "'Roboto', sans-serif"}
          }>
            Get personalized recommendations based on your needs, goals, and
            lifestyle.
          </p>

          <button
            className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-md hover:bg-blue-700 hover:text-white transition mt-10 flex item-center justify-center"
            style={{ width: 350,fontFamily: "'Roboto', sans-serif" }}
          >
            <Phone style={{marginRight:10}}/>
            Call Now 
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="p-4 md:col-span-1 flex items-center justify-center"
        >
          <img
            src={mobile}
            alt="Mobile illustration"
            className="max-w-xs md:max-w-sm"
          />
        </motion.div>
      </div>
    </div>
  )
}
