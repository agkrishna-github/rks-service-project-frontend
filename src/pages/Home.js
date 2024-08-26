import React from "react";
import Carousel from "react-material-ui-carousel";
import carImg1 from "../images/car1.webp";
import carImg2 from "../images/car2.webp";
import carImg3 from "../images/car3.jpg";

const Home = () => {
  return (
    <section className="w-5/6 mx-auto min-h-[500px] md:min-h-[200px] p-2 grid grid-cols-2 gap-x-5 shadow-xl shadow-black rounded-md md:flex md:flex-col md:mt-52">
      <div className="bg-blue-900 shadow-sm shadow-black p-3 flex justify-center items-center text-white md:hidden">
        <p>
          At Saboo RKS, we're dedicated to providing you with the finest
          vehicles that match your style and needs. Browse our collection today
          and experience automotive excellence like never before.
        </p>
      </div>
      <div className="shadow-sm shadow-black p-3 h-full w-full md:w-5/6 md:mx-auto md:shadow-none">
        <Carousel infiniteLoop className="h-full w-full mt-14 ">
          <div className="md:w-[250px] md:h-[250px]">
            <img
              src={carImg1}
              alt="Maruti Car"
              width={400}
              height={300}
              className="md:inline-block md:h-full md:w-full"
            />
          </div>
          <div className="md:w-[250px] md:h-[250px]">
            <img
              src={carImg2}
              alt="Maruti Car"
              width={400}
              height={300}
              className="md:inline-block md:h-full md:w-full"
            />
          </div>
          <div className="md:w-[250px] md:h-[250px]">
            <img
              src={carImg3}
              alt="Maruti Car"
              width={400}
              height={300}
              className="md:inline-block md:h-full md:w-full"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
