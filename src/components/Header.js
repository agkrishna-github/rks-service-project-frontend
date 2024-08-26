import React from "react";
import logo from "../images/rkslogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="h-[100px] md:min-h-[350px] w-screen grid grid-cols-2 md:w-screen md:flex md:flex-col">
      <div className="bg-[#F4F4F4] ms-36 h-[100px]">
        <img src={logo} alt="SABOO LOGO" className="h-full" />
      </div>
      <ul className="list-none flex justify-center items-center bg-blue-900 md:flex md:flex-col">
        <Link to="/" className="no-underline">
          <li className="me-3 p-3 text-white w-[100px] text-center rounded-md hover:bg-blue-400 hover:text-white cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/services" className="no-underline">
          <li className="me-3 p-3 text-white w-[100px] text-center rounded-md hover:bg-blue-400 hover:text-white cursor-pointer">
            Service
          </li>
        </Link>
        <Link to="/about" className="no-underline">
          <li className="me-3 p-3 text-white w-[100px] text-center rounded-md hover:bg-blue-400 hover:text-white cursor-pointer">
            About Us
          </li>
        </Link>
        <Link to="/contact" className="no-underline">
          <li className="p-3 text-white w-[120px] text-center rounded-md hover:bg-blue-400 hover:text-white cursor-pointer">
            Contact Us
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default Header;
