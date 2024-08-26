import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getSingleVehiclesDetails } from "../features/vehicleDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getDriversDetails } from "../features/driversDetailsSlice";

const HomeDelivery = () => {
  const [driver, setDriver] = useState("");
  console.log(driver);
  const { singleVehicleDetails } = useSelector((state) => state?.vehicle);
  const { driversDetails } = useSelector((state) => state?.driver);

  const dispatch = useDispatch();

  const params = useParams();
  console.log(params.vid);

  useEffect(() => {
    dispatch(getDriversDetails());
    dispatch(getSingleVehiclesDetails(params.vid));
  }, [driver]);

  return (
    <section className="w-screen" style={{ minHeight: "calc(100vh - 100px)" }}>
      <div className="w-5/6 mx-auto shadow shadow-black p-5 md:p-2">
        <h1>Home Delivery</h1>
        <div className="md:flex md:flex-col">
          <div className="bg-blue-900 p-3 mb-3 grid grid-cols-2 gap-4">
            <div className="text-white">
              <p className="mb-3">
                Customer Name : <b>{singleVehicleDetails?.customerName}</b>
              </p>
              <p className="mb-3">
                Vehicle Model : <b>{singleVehicleDetails?.vehicle}</b>
              </p>
              <p className="mb-3">
                Vehicle Color : <b>{singleVehicleDetails?.color}</b>
              </p>
              <p className="mb-3">
                Contact Number : <b>{singleVehicleDetails?.phone}</b>
              </p>
              <p className="mb-3">
                House Number : <b>{singleVehicleDetails?.houseNumber}</b>
              </p>
              <p className="mb-3">
                Street : <b>{singleVehicleDetails?.street}</b>
              </p>
              <p className="mb-3">
                Area : <b>{singleVehicleDetails?.area}</b>
              </p>
              <p className="mb-3">
                City : <b>{singleVehicleDetails?.city}</b>
              </p>
              <p className="mb-3">
                Mandal : <b>{singleVehicleDetails?.mandal}</b>
              </p>
              <p className="mb-3">
                State : <b>{singleVehicleDetails?.state}</b>
              </p>
              <p className="mb-3">
                Pincode : <b>{singleVehicleDetails?.pincode}</b>
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-col gap-8 justify-center items-center">
            <h4>Driver Details</h4>

            <div>
              <select
                name=""
                id=""
                value={driver}
                className="w-48 p-3"
                onChange={(e) => setDriver(e.target.value)}
              >
                <option value="">Select Driver</option>
                {driversDetails?.map((d) => (
                  <option value={d?.driverId} className="w-48 p-3 inline-block">
                    {d?.driverName}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-5 md:mb-10">
              <Link
                to="/gmappage"
                className="inline-block p-3 bg-blue-400 rounded-md text-white no-underline"
              >
                Start Pickup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDelivery;
