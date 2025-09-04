
import Home from '../Home/Home'
import { Routes, Route } from 'react-router-dom';
import AboutUsSection from '../About/AboutUsSection';
import Service from '../Service/Service';
import Franchise from '../Franchise/Franchise';

export default function RouterManager() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUsSection />} />
            <Route path="/service" element={<Service />} />
            <Route path="/franchise" element={<Franchise />} />
        </Routes>
    )
}
