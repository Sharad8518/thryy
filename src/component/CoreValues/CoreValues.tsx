import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import "./CoreValues.css"
import { motion } from "framer-motion";
export default function CoreValues() {
    const values = [
    {
      img: img1,
      title: "Science-backed treatments",
      desc: "Science-backed treatments",
    },
    {
      img: img2,
      title: "Premium, hygienic environment",
      desc: "Our team consists of certified physiotherapists and nutritionists.",
    },
    {
      img: img3,
      title: "Premium, hygienic environment",
      desc: "Athletes worldwide rely on our science-backed methods.",
    },
    {
      img: img4,
      title: "Expert guidance",
      desc: "We provide personalized recovery in a premium environment.",
    },
  ];
  return (
    <section className="py-16 text-center">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-white"
          style={{ fontFamily: "'Roboto', sans-serif" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Core Values
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          style={{ fontFamily: "'Roboto', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We believe in staying ahead with the latest, science-backed recovery
          therapies that accelerate healing, performance, and overall wellness.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
