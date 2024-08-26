import React from "react";
import Carousel from "react-material-ui-carousel";
import carImg1 from "../images/car1.webp";
import carImg2 from "../images/car2.webp";
import carImg3 from "../images/car3.jpg";

const Home = () => {
  return (
    <div
      className="w-screen p-3"
      // style={{ height: "calc(100vh - 90px)" }}
    >
      <div className="w-5/6 mx-auto min-h-[500px] p-2 grid grid-cols-2 gap-x-5 shadow-xl shadow-black rounded-md">
        <div className="bg-blue-900 shadow-sm shadow-black p-3 flex justify-center items-center text-white">
          <p>
            At Saboo RKS, we're dedicated to providing you with the finest
            vehicles that match your style and needs. Browse our collection
            today and experience automotive excellence like never before.
          </p>
        </div>
        <div className="shadow-sm shadow-black p-3 h-full w-full">
          <Carousel infiniteLoop className="h-full w-full mt-14">
            <div>
              <img src={carImg1} alt="Maruti Car" width={400} height={300} />
            </div>
            <div>
              <img src={carImg2} alt="Maruti Car" width={400} height={300} />
            </div>
            <div>
              <img src={carImg3} alt="Maruti Car" width={400} height={300} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
