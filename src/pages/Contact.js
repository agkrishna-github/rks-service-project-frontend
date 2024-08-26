import React from "react";

const Contact = () => {
  return (
    <div className="w-5/6 mx-auto min-h-[500px] p-2 grid grid-cols-2 gap-x-5 shadow-xl shadow-black rounded-md">
      <div className="bg-blue-900 shadow-sm shadow-black p-3 flex justify-center items-center text-white">
        <h3>Contact Us</h3>
      </div>
      <div className="flex flex-col justify-center items-center">
        <form action="" className="">
          <div className="flex flex-col mb-3">
            <label htmlFor="">
              <strong>Name :</strong>
            </label>
            <input type="text" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">
              <strong>Email :</strong>
            </label>
            <input type="text" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">
              <strong>Phone :</strong>
            </label>
            <input type="text" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="">
              <strong>Subject :</strong>
            </label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
