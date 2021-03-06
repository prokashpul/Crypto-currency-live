import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-[78.3vh] max-w-[94%] md:max-w-[1080px] mx-auto">
      <div className="text-5xl font-bold my-4 text-center">Contact Us</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
        itaque quisquam delectus incidunt illo rerum iure molestias soluta
        facilis. Amet enim incidunt harum? Sint itaque vel explicabo consectetur
        eos. Unde.
      </p>
      <div className="flex text-center md:gap-4 md:justify-center md:flex-row flex-col items-center">
        <Link
          to="/contact/bd-address"
          className="bg-red-500 w-[250px] text-white duration-500 rounded-md md:my-8 mt-4  hover:bg-red-700 py-2 px-4 text-xl font-bold"
        >
          Bangladesh Office
        </Link>
        <Link
          to="/contact/us-address"
          className="bg-red-500 w-[250px] w-100 text-white duration-500 rounded-md md:my-8 mt-4 hover:bg-red-700 py-2 px-4 text-xl font-bold"
        >
          Us Office
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Contact;
