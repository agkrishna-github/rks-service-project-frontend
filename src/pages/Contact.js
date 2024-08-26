import React from "react";

const Contact = () => {
  return (
    <section className="w-5/6 mx-auto min-h-[500px] p-2 pb-10 grid grid-cols-2 md:grid-cols-none gap-x-5 shadow-xl shadow-black rounded-md">
      <div className="bg-blue-900 shadow-sm shadow-black p-3 flex justify-center items-center text-white">
        <h3>Contact Us</h3>
      </div>
      <div className="flex flex-col justify-center items-center md:mt-14">
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
    </section>
  );
};

export default Contact;
