import { PhoneIcon } from "@heroicons/react/solid";
import React from "react";

const BdContact = () => {
  return (
    <address className="bg-red-200 max-w-4xl my-10 font-mono mx-auto p-5 rounded-xl">
      <h2 className="md:text-3xl text-2xl font-bold ">Address :</h2>
      <div>
        Bangladesh
        <p>Jk Tower.</p>
        <p>31,segunbagich ,Dhaka 1000</p>
        <a href="tel:+880184437736" className="flex gap-2">
          {" "}
          <PhoneIcon className="w-4"></PhoneIcon> +880184437736
        </a>
      </div>
    </address>
  );
};

export default BdContact;
