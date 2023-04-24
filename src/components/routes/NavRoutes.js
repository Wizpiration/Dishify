import { Link, Routes, Route } from "react-router-dom";
import Contact from "../Navigation/Contact";
import Search from "../Navigation/Search";
import About from "../Navigation/About";
import Cart from "../Cart/Cart";
import Home from "../Navigation/Home";
import Menu from "../Menu/Menu";

export default function NavRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}
