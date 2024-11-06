import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header_bar from "./components/Header_bar";
import Home from "./components/Home";
import "./Styles/App.scss";
import "./Styles/Header.scss";
import "./Styles/Home.scss";
import "./Styles/globals.css";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Contact from "./components/Contact";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Styles/swiper-custom.css";
function App() {
  return (
    <Router>
      <Header_bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:productId" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
