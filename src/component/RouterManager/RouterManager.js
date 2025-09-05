import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';
import AboutUsSection from '../About/AboutUsSection';
import Service from '../Service/Service';
import Franchise from '../Franchise/Franchise';
export default function RouterManager() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutUsSection, {}) }), _jsx(Route, { path: "/service", element: _jsx(Service, {}) }), _jsx(Route, { path: "/franchise", element: _jsx(Franchise, {}) })] }));
}
