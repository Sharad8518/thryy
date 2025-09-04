
import { motion } from 'framer-motion';
import HeroImage from '../../assets/hero-image.jpg'; 
import "./Anout.css"
export default function AboutThryvv() {
  return (
   <section className="text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
  <div className="max-w-3xl flex flex-col items-center gap-8">
    
    {/* Text Content */}
    <motion.div
      className="w-full text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{fontSize:32,fontFamily:"'Roboto', sans-serif"}} >
        About Thryvv Recovery Lounge
      </h1>
      <p className="text-lg md:text-xl leading-relaxed" style={{fontSize:16,fontFamily:"'Roboto', sans-serif"}}>
        At Thryvv, we blend advanced recovery techniques with a luxurious spa experience. 
        From stress relief to muscle repair, our therapies are designed to help you feel your absolute best.
        Whether you’re an athlete, a wellness enthusiast, or simply seeking deep relaxation, your journey to optimal recovery begins here.
      </p>
    </motion.div>

    {/* Image */}
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src={HeroImage}
        alt="Wellness therapy"
        className="rounded-lg shadow-lg object-cover w-full h-80 md:h-[400px]"
      />
    </motion.div>

  </div>
</section>
  )
}
