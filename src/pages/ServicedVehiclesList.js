import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVehiclesDetails } from "../features/vehicleDetailsSlice";
import { Link } from "react-router-dom";

const ServicedVehiclesList = () => {
  const { vehicleDetails } = useSelector((state) => state?.vehicle);
  console.log(vehicleDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehiclesDetails());
  }, []);

  return (
    <section className="w-5/6 mx-auto min-h-full p-5 md:mt-56">
      <h1>Serviced Vehicle List</h1>
      <div className="shadow shadow-black">
        {vehicleDetails?.map((v) => (
          <div
            key={v._id}
            className="bg-blue-900 p-3 mb-3 grid grid-cols-2 gap-4 md:flex md:flex-col md:p-1"
          >
            <div className=" text-white">
              <p className="mb-3">
                Customer Name : <b>{v.customerName}</b>
              </p>
              <p className="mb-3">
                Vehicle Model : <b>{v.vehicle}</b>
              </p>
              <p className="mb-3">
                Vehicle Color : <b>{v.color}</b>
              </p>
              <p className="mb-3">
                Contact Number : <b>{v.phone}</b>
              </p>
              <p className="mb-3">
                House Number : <b>{v.houseNumber}</b>
              </p>
              <p className="mb-3">
                Street : <b>{v.street}</b>
              </p>
              <p className="mb-3">
                Area : <b>{v.area}</b>
              </p>
              <p className="mb-3">
                City : <b>{v.city}</b>
              </p>
              <p className="mb-3">
                Mandal : <b>{v.mandal}</b>
              </p>
              <p className="mb-3">
                State : <b>{v.state}</b>
              </p>
              <p className="mb-3">
                Pincode : <b>{v.pincode}</b>
              </p>
            </div>
            <div className="bg-white flex flex-col gap-8 justify-center items-center md:p-2">
              <div>Delivery Venue : </div>
              <Link to={`/home-delivery/${v._id}`}>
                <button className="w-[200px] p-3 rounded-md cursor-pointer hover:bg-black hover:text-white text-red-500">
                  HOME
                </button>
              </Link>
              <button className="w-[200px] p-3 rounded-md cursor-pointer hover:bg-black hover:text-white">
                SHOWROOM
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicedVehiclesList;
