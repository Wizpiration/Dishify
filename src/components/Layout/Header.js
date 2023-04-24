import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import HeaderCartBtn from "./HeaderCartBtn";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <Fragment>
      <header className="flex justify-between items-center">
        <h1 className="text-sec font-bold text-2xl">
          <Link to="/home">Dishify</Link>
        </h1>

        <nav className="hidden md:flex justify-around items-center gap-2 text-black text-lg ">
          <Link className="hover:bg-sec rounded-md" to="/home">
            Home
          </Link>
          <Link className="hover:bg-sec rounded-md" to="/about">
            About us
          </Link>
          <Link className="hover:bg-sec rounded-md" to="/contact">
            Contact us
          </Link>
          <Link className="hover:bg-sec rounded-md" to="/search">
            Search
          </Link>
        </nav>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[25%] h-full text-lg ease-in-out duration-500 m-2 mt-14"
              : "fixed right-[-100%]"
          }
        >
          <ul className="p-2 rounded-md">
            <li>
              <Link className="hover:bg-sec rounded-md" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:bg-sec rounded-md" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:bg-sec rounded-md" to="/contact">
                Contact us
              </Link>
            </li>
            <li>
              <Link className="hover:bg-sec rounded-md" to="/search">
                Search
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center gap-2">
          <HeaderCartBtn />

          <div className="block md:hidden">
            <button onClick={handleNav}>
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </button>
          </div>
        </div>
      </header>
      {/* <NavRoutes /> */}
    </Fragment>
  );
}
