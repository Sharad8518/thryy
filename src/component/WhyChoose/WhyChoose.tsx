import room from "../../assets/room.jpg"
import "./WhyChoose.css"
import { motion } from "framer-motion";

export default function WhyChoose() {
    const features = [
        {
            number: "01",
            title: "India’s First Full-Scale Recovery Lounge",
            desc: "All therapies under one roof",
        },
        {
            number: "02",
            title: "Science-Backed Recovery Methods",
            desc: "Trusted by athletes worldwide",
        },
        {
            number: "03",
            title: "Expert Team",
            desc: "Certified physiotherapists & nutritionists",
        },
        {
            number: "04",
            title: "Premium & Hygienic Environment",
            desc: "Clean, private, and relaxing space",
        },
        {
            number: "05",
            title: "Custom Packages",
            desc: "Pay per session or choose monthly recovery plans",
        },
    ];

    return (
        <section className="py-12 px-6 flex flex-col items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <motion.div
            style={{ width: "60%" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Why Choose Thryvv Recovery Lounge?
            </h2>
            <p
              className="text-gray-600 mb-6"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              At Thryvv Recovery, we go beyond just rest — we help you recharge,
              rebuild, and rise stronger. Whether you’re an athlete pushing
              limits, a professional balancing long days, or someone who simply
              values well-being, our recovery solutions are designed to fit your
              lifestyle.
            </p>
            <motion.img
              src={room}
              alt="Recovery Room"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            {features.map((item) => (
              <motion.div
                key={item.number}
                className="flex items-start gap-6"
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div
                  className="text-6xl font-extrabold leading-none"
                  style={{
                    fontFamily: "'Purple Purse', serif",
                    color: "#848f99",
                  }}
                >
                  {item.number}
                </div>
                <div
                  style={{ width: 2, height: 70, backgroundColor: "white" }}
                />
                <div>
                  <h3
                    className="text-xl font-semibold text-white"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    )
}
