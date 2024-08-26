import React from "react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <section className="w-5/6 mx-auto min-h-[500px] p-2 grid grid-cols-2 gap-x-5 shadow-xl shadow-black rounded-md md:grid-cols-none">
      <div className="bg-blue-900 shadow-sm shadow-black p-3 flex flex-col justify-center text-white ">
        <p>
          <Link
            className="no-underline hover:underline hover:text-red-500 text-white"
            to=""
          >
            <h3>vehicle Details</h3>
          </Link>
        </p>
        <p className="border border-white p-2 rounded-md">
          <Link
            className="no-underline hover:underline hover:text-red-500 text-white"
            to="/serviced-vehicles-list"
          >
            <h3>Serviced Vehicles</h3>
          </Link>
        </p>
        <p>
          <Link
            className="no-underline hover:underline hover:text-red-500 text-white"
            to=""
          >
            <h3>Delivery Vechicles</h3>
          </Link>
        </p>
        <p>
          <Link
            className="no-underline hover:underline hover:text-red-500 text-white"
            to=""
          >
            <h3>Delayed Vehicles</h3>
          </Link>
        </p>
      </div>
      <div className="shadow-sm shadow-black p-3 h-full w-full md:hidden"></div>
    </section>
  );
};

export default ServicesPage;
