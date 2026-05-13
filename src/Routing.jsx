import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Theme from "./utils/Theme";

function Routing() {

    return (
        <BrowserRouter>
            <Theme>
                <Navbar />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
                <Footer />
            </Theme>
        </BrowserRouter>
    );
};
export default Routing;