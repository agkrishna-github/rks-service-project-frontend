import React from "react";

const About = () => {
  return (
    <section className="w-5/6 mx-auto min-h-[500px] p-2 grid grid-cols-2 md:grid-cols-none gap-x-5 shadow-xl shadow-black rounded-md ">
      <div className="flex flex-col justify-center items-center">
        <h3>Our Workshops</h3>
        <ul className="mt-3">
          <li className="mt-2">Somajiguda</li>
          <li className="mt-2">Kushaiguda</li>
          <li className="mt-2">Tadbund</li>
          <li className="mt-2">Malakpet</li>
        </ul>
      </div>
      <div className="bg-blue-900 shadow-sm shadow-black p-3 flex justify-center items-center text-white">
        <p>
          Saboo RKS Motors has been at the forefront of Hyderabad's automotive
          industry, driving growth in automobile sales and service for over four
          decades. With a history dating back to 1973, we began as a 2-wheeler
          dealership and have since expanded to include 4-wheelers, becoming an
          esteemed Maruti Suzuki dealer in 1997. Our extensive reach throughout
          the city is comprised of five sales outlets, nine workshops, four
          pre-owned vehicle sales outlets, one commercial outlet, and two
          premium NEXA dealerships.
        </p>
      </div>
    </section>
  );
};

export default About;
