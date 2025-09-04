


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"
import { motion } from 'framer-motion';
import mobile1 from "../../assets/mobile/mobile1.png"
import mobile2 from "../../assets/mobile/mobile2.png"
import { ArrowUpRight } from "lucide-react";
import "./Ourservice.css"
export default function Ourservice() {
  interface CardData {
    id: number;
    image: string;
    title: string;
    description: string;
  }

  const cards: CardData[] = [
    {
      id: 1,
      image: "https://media.post.rvohealth.io/wp-content/uploads/2020/07/Young-female-receiving-massage-by-therapist-in-traditional-thai-position-1200x628-facebook-1200x628.jpg",
      title: "Leg Air Compression Mass...",
      description: "Detoxify your body and soothe your senses with our rejuvenating steam therapy, designed to promote deep relaxation and improved circulation.",
    },
    {
      id: 2,
      image: "https://media.post.rvohealth.io/wp-content/uploads/2020/07/Young-female-receiving-massage-by-therapist-in-traditional-thai-position-1200x628-facebook-1200x628.jpg",
      title: "Leg Air Compression Mass...",
      description: "Detoxify your body and soothe your senses with our rejuvenating steam therapy, designed to promote deep relaxation and improved circulation.",
    },
    {
      id: 3,
      image: "https://www.health.com/thmb/XwSLq9__b0ANDbCqdb2kGAVdXLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1438172458-fc10c26db84048b99a3feaa316701fa3.jpg",
      title: "Card Title 2",
      description: "Detoxify your body and soothe your senses with our rejuvenating steam therapy, designed to promote deep relaxation and improved circulation.",
    },
    {
      id: 4,
      image: "https://media.istockphoto.com/id/591403622/photo/man-receiving-forehead-massage.jpg?s=612x612&w=0&k=20&c=LeoSFWQgkOxHY700KoXF5STCYpFGg47nGhOM5SU7c2I=",
      title: "Card Title 3",
      description: "Detoxify your body and soothe your senses with our rejuvenating steam therapy, designed to promote deep relaxation and improved circulation.",
    },
  ];

  return (
    <>
      <section className=" text-white flex flex-col items-center  px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontSize: 40, fontFamily: "'Roboto', sans-serif" }} >
          Our services
        </h1>
        <p className="text-lg md:text-xl leading-relaxed" style={{ fontSize: 16, fontFamily: "'Roboto', sans-serif", textAlign: "center" }}>
          Where innovation meets recovery — every service tailored for your body’s peak potential.
        </p>
        <br />
      </section>
      <section className="bg-white  p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 col-span-2">

            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={3}           // always 3 visible
              centeredSlides={true}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              className="mySwiper"
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {cards.map((card) => (
                <SwiperSlide
                  key={card.id}
                  className="transition-transform duration-300"
                >
                  {({ isActive }) => (
                    <div
                      className={`bg-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col items-center transform transition-transform duration-300 ${isActive ? "scale-105" : "scale-90 opacity-70"
                        }`}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{card.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{card.description}</p>
                      </div>
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                        style={{ backgroundColor: "#200733", width: "90%", marginBottom: 10 }}
                      >
                        Explore
                      </button>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

          <div className="bg-white-700 p-4 col-span-1 flex items-center justify-center flex-col">

            <motion.div className="bg-white text-gray-900 rounded-2xl  p-6 flex flex-col  max-w-sm">
              <h2 className="text-2xl font-bold mb-2">Experience the Thryvv Difference</h2>
              <p className="text-gray-600 text-center mb-4">
                From advanced recovery treatments to holistic wellness solutions, our curated range of services is designed to help you feel, move, and live at your absolute best.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg  transition" style={{ backgroundColor: "#200733", }}>
                Explore
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className=" p-6 " style={{boxSizing:"border-box"}}>
        <div className="grid grid-cols-4 gap-2">
          {/* Left Side (2 columns wide) */}
          <div className="p-4 col-span-2 flex justify-center items-center">
            <div className="p-4 w-2/3 " style={{ marginTop: 100 }}>
              <h1
                className="text-3xl md:text-5xl font-bold mb-4 text-white"
                style={{ fontSize: 30 }}
              >
                Your health is your greatest investment—start today.
              </h1>
              <p className="text-white">
                Take the first step toward lasting wellness with expert care,
                personalized plans, and unwavering support, empowering you to
                live a healthier, more vibrant, and balanced life every day—
                nurturing your mind, body, and spirit for long-term health,
                happiness, and fulfillment.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-white hover:bg-white text-black rounded-2xl font-semibold shadow-lg transition justify-center" style={{ marginTop: 20, width: 250 }}>
                Book Now
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side (1 column wide) */}
          <div className=" text-white p-4 col-span-2 flex item-center justify-center min-h-[600px]" style={{ position: "relative" }}>
            <img src={mobile1} style={{ position: "absolute", left: 0 }} />
            <img src={mobile2} style={{ position: "absolute", right: 0, top: 200 }} />
          </div>
        </div>
      </section>

     
    </>
  )
}
