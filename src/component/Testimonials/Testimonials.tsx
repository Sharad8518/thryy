
import img from "../../assets/Group.png"
import { Star } from "lucide-react";
export default function Testimonials() {
    return (
        <section className="mt-20 px-6 md:px-12">
            <h2 className="text-white" style={{ fontSize: "36px", fontWeight: 500 }}>
                Testimonials
            </h2>

            <div className="grid grid-cols-3 gap-4 mt-6">
                {/* Left side (2/3) */}
                <div className="p-4 col-span-2 flex justify-between">

                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                 p-6 w-full max-w-2xl 
                  shadow-xl transform transition-transform duration-500 
                  hover:rotate-y-6 hover:scale-105 scale-90"
                        style={{ perspective: "1000px", width: 300, borderBottomLeftRadius: 50 }}
                    >
                        <img
                            src={img}
                            alt="user"
                            className=" shadow-md"
                        />
                        <div className="flex items-center gap-6">
                            {/* User Profile Image */}


                            {/* Testimonial Content */}
                            <div>
                                <p className="text-white italic text-lg mb-2" style={{ fontSize: 15, marginTop: 5 }}>
                                    “This platform transformed my health journey — I feel stronger and
                                    more confident every day.”
                                </p>
                                <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-end", position: "relative" }}>
                                    <div >
                                        <div className="flex space-x-1 text-yellow-400" style={{ justifyContent: "flex-end", marginRight: 55 }} >
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-yellow-400" />
                                            ))}

                                        </div>
                                        <div style={{ width: 200, height: 30, background: "#000", marginTop: 10, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, display: "flex", justifyContent: "flex-end", alignItems: "center", marginRight: 10 }}>
                                            <p style={{ color: "#fff", fontSize: 12, marginRight: 55, fontFamily: "'Roboto', sans-serif" }}>Pavan Ahirwar</p>
                                        </div>

                                    </div>

                                    <div style={{ width: 55, height: 55, background: "red", borderRadius: 100, position: "absolute", right: 0, top: 0 }}>
                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="profile"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                borderRadius: 100
                                            }}
                                        />
                                    </div>
                                </div>


                                {/* <h4 className="font-semibold text-white">Pavan Ahirwar</h4>
                     <span className="text-sm text-gray-300">Customer</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                 p-6 w-full max-w-2xl 
                  shadow-xl transform transition-transform duration-500 
                  hover:rotate-y-6 hover:scale-105 scale-100"
                        style={{ perspective: "1000px", width: 300, borderBottomLeftRadius: 50 }}
                    >
                        <img
                            src={img}
                            alt="user"
                            className=" shadow-md"
                        />
                        <div className="flex items-center gap-6">
                            {/* User Profile Image */}


                            {/* Testimonial Content */}
                            <div>
                                <p className="text-white italic text-lg mb-2" style={{ fontSize: 15, marginTop: 5 }}>
                                    “This platform transformed my health journey — I feel stronger and
                                    more confident every day.”
                                </p>
                                <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-end", position: "relative" }}>
                                    <div >
                                        <div className="flex space-x-1 text-yellow-400" style={{ justifyContent: "flex-end", marginRight: 55 }} >
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-yellow-400" />
                                            ))}

                                        </div>
                                        <div style={{ width: 200, height: 30, background: "#000", marginTop: 10, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, display: "flex", justifyContent: "flex-end", alignItems: "center", marginRight: 10 }}>
                                            <p style={{ color: "#fff", fontSize: 12, marginRight: 55, fontFamily: "'Roboto', sans-serif" }}>Pavan Ahirwar</p>
                                        </div>

                                    </div>

                                    <div style={{ width: 55, height: 55, background: "red", borderRadius: 100, position: "absolute", right: 0, top: 0 }}>
                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="profile"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                borderRadius: 100
                                            }}
                                        />
                                    </div>
                                </div>


                                {/* <h4 className="font-semibold text-white">Pavan Ahirwar</h4>
                     <span className="text-sm text-gray-300">Customer</span> */}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                 p-6 w-full max-w-2xl 
                  shadow-xl transform transition-transform duration-500 
                  hover:rotate-y-6 hover:scale-105 scale-110"
                        style={{ perspective: "1000px", width: 300, borderBottomLeftRadius: 50 }}
                    >
                        <img
                            src={img}
                            alt="user"
                            className=" shadow-md"
                        />
                        <div className="flex items-center gap-6">
                            {/* User Profile Image */}


                            {/* Testimonial Content */}
                            <div>
                                <p className="text-white italic text-lg mb-2" style={{ fontSize: 15, marginTop: 5 }}>
                                    “This platform transformed my health journey — I feel stronger and
                                    more confident every day.”
                                </p>
                                <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-end", position: "relative" }}>
                                    <div >
                                        <div className="flex space-x-1 text-yellow-400" style={{ justifyContent: "flex-end", marginRight: 55 }} >
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-yellow-400" />
                                            ))}

                                        </div>
                                        <div style={{ width: 200, height: 30, background: "#000", marginTop: 10, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, display: "flex", justifyContent: "flex-end", alignItems: "center", marginRight: 10 }}>
                                            <p style={{ color: "#fff", fontSize: 12, marginRight: 55, fontFamily: "'Roboto', sans-serif" }}>Pavan Ahirwar</p>
                                        </div>

                                    </div>

                                    <div style={{ width: 55, height: 55, background: "red", borderRadius: 100, position: "absolute", right: 0, top: 0 }}>
                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="profile"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                borderRadius: 100
                                            }}
                                        />
                                    </div>
                                </div>


                                {/* <h4 className="font-semibold text-white">Pavan Ahirwar</h4>
                                   <span className="text-sm text-gray-300">Customer</span> */}
                            </div>
                        </div>
                    </div>


                </div>

                {/* Right side (1/3) */}
                <div className=" text-white p-4 col-span-1 flex items-center justify-center flex-col rounded">
                    <div style={{ backgroundColor: "#010D3D", width: "100%", height: 200, borderTopLeftRadius: 100, borderBottomLeftRadius: 100, padding: 20, boxSizing: "border-box" }}>
                        <h1 className="text-3xl font-bold mt-5 ml-5 " style={{ fontFamily: "'Roboto', sans-serif", }}>Results That Speak</h1>
                        <p className="mt-5 ml-5" style={{ fontFamily: "'Roboto', sans-serif", }}>Hear from our happy clients and discover how our services have transformed their health, recovery, and overall wellbeing.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}
