import img from "../../assets/footer.jpg"
import logo from "../../assets/logo.png"
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Phone, Mail } from "lucide-react";
import "./Footer.css"

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#b7d2d6",
        backgroundImage: `url(${img})`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Heading */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-black mb-4 text-center mt-20"
        style={{ fontFamily: "'Roboto', sans-serif" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Stay Connected. Stay Informed.
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-black text-center"
        style={{ fontFamily: "'Roboto', sans-serif" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Join our newsletter to get health tips, expert advice, and exclusive offers—
        delivered straight to your inbox.
      </motion.p>

      {/* Newsletter Box */}
      <motion.div
        style={{
          height: 45,
          width: 550,
          borderRadius: 100,
          marginTop: 10,
          backgroundColor: "#c2d9dd",
          display: "flex",
          padding: 5,
          justifyContent: "center",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <input
          placeholder="Enter your email"
          style={{
            background: "transparent",
            outline: "none",
            width: "76%",
            fontFamily: "'Roboto', sans-serif",
          }}
        />
        <button
          style={{
            background: "#200733",
            width: 120,
            borderRadius: 100,
            color: "#fff",
            fontSize: 13,
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Subscribe
        </button>
      </motion.div>

      {/* Glass Footer */}
      <motion.footer
        style={{
          marginTop: 50,
          width: "100%",
          height: 400,
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.3)",
          padding: "30px 80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Left - Logo & Company Info */}
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            flexDirection: "column",
            width: "20%",
          }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={logo}
            alt="Company Logo"
            style={{ width: 150, height: 150, borderRadius: "50%" }}
          />
          <div>
            <p
              style={{
                color: "#444444",
                fontWeight: "500",
                fontSize: 14,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Empowering healthier lives through expert guidance, personalized plans,
              and a commitment to your well-being.
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#000",
                display: "flex",
                gap: 6,
                marginTop: 5,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              <MapPin size={20} style={{ color: "#200733" }} />
              No211 1st floor green glen layout, above Union Bank of India,
              Bellandur, Bengaluru 560103
            </p>
          </div>
        </motion.div>

        {/* Right - Social + Links */}
        <motion.div
          style={{ width: "70%" }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          viewport={{ once: true }}
        >
          {/* Social */}
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Follow us
            </h2>
            <motion.div
              className="flex space-x-4"
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
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "80%",
              fontFamily: "'Roboto', sans-serif",
              margin: "0 auto",
            }}
          >
            {/* Contact */}
            <ul>
              <li>Contact us</li>
              <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Phone size={16} color="#200733" />
                +91 7338651122
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Mail size={16} color="#200733" />
                hello@wellnesshub.com
              </li>
            </ul>

            {/* Navigation */}
            <ul style={{ listStyle: "none" }}>
              <li>
                <a href="#" style={{ color: "#200733", textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#200733", textDecoration: "none" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#200733", textDecoration: "none" }}>
                  Services
                </a>
              </li>
            </ul>

            <ul style={{ listStyle: "none" }}>
              <li>
                <a href="#" style={{ color: "#200733", textDecoration: "none" }}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#200733", textDecoration: "none" }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#200733", textDecoration: "none" }}>
                  Terms & Conditions
                </a>
              </li>
            </ul>

            <ul style={{ listStyle: "none" }}>
              <li>
                <a href="#" style={{ color: "#200733", textDecoration: "none" }}>
                  Wellness Programs
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#200733", textDecoration: "none" }}>
                  Franchise
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.footer>
    </div>
  )
}
