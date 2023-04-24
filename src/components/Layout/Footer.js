import {
  AiOutlineCopyrightCircle,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="grid grid-cols-2  md:grid-cols-4 gap-8 mx-auto bg-[#FFF6D6] py-6 mt-10">
        <div className="flex flex-col mx-auto">
          {/* <h1 className="font-bold text-1xl">Services</h1> */}
          <ul>
            <li>
              <h1 className="font-bold text-1xl">Services</h1>
            </li>
            <li className="py-1 mt-3">
              <Link to="./">Online Order</Link>
            </li>
            <li className="py-1">Pre-Reservation</li>
            <li className="py-1">24/7 Services</li>
            <li className="py-1">Super Chef</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <ul>
            <li>
              <h1 className="font-bold text-1xl">Quick Links</h1>
            </li>
            <li className="py-1 mt-3">
              <Link to="./menu">Menu</Link>
            </li>
            <li className="py-1">Reviews</li>
            <li className="py-1">Blogs</li>
            <Link to="./menu">Order Foods</Link>
            <li className="py-1"></li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <ul>
            <li>
              <h1 className="font-bold text-1xl">About</h1>
            </li>
            <li className="py-1 mt-3">Our Story</li>
            <li className="py-1">Benefits</li>
            <li className="py-1">Career</li>
            <li className="py-1">Our Chefs</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <ul>
            <li>
              <h1 className="font-bold text-1xl">Help</h1>
            </li>
            <li className="py-1 mt-3">
              <Link to="./contact">Contact</Link>
            </li>
            <li className="py-1">Support</li>
            <li className="py-1">FAQ</li>
          </ul>
        </div>
      </footer>
      <div className="flex items-center md:gap-[14rem] gap-3 justify-between bg-[#545454] text-white p-4 md:px-[6rem]">
        <div className="flex items-center">
          <span>
            <AiOutlineCopyrightCircle />
          </span>
          <h1> 2023 Dishify. All rights reserved</h1>
        </div>
        <div className="flex justify-between md:gap-9 gap-2">
          <AiFillFacebook />
          <AiFillTwitterCircle />
          <AiOutlineInstagram />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
}
