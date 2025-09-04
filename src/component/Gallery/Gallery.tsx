
import img5 from "../../assets/5.jpg"
import img6 from "../../assets/6.jpg"
import img7 from "../../assets/7.jpg"
import img8 from "../../assets/8.jpg"
import { motion } from "framer-motion";

export default function Gallery() {
     const images = [
    img5,
    img6,
    img7,
    img8
  ];
  return (
     <section className="py-16 text-center">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h1>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
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
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
