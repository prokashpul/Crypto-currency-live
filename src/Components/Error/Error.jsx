import { HomeIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[80.7vh] w-full">
      <h2 className="text-9xl font-bold">
        4<span className="text-red-500">0</span>4
      </h2>
      <Link
        to="/"
        className="flex gap-2 text-center font-bold text-2xl text-red-500 my-3"
      >
        <HomeIcon className="w-8"></HomeIcon> Back To Home
      </Link>
    </div>
  );
};

export default Error;
