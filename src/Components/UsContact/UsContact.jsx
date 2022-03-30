import { PhoneIcon } from "@heroicons/react/solid";
import React from "react";

const UsContact = () => {
  return (
    <address className="bg-green-200 max-w-4xl my-10 font-mono mx-auto p-5 rounded-xl">
      <h2 className="md:text-3xl text-2xl font-bold ">Address :</h2>
      <div>
        New York,US
        <p>Jk Tower.</p>
        <p>1776 Marshville Road ,New City 10956</p>
        <a href="tel:+18456002121" className="flex gap-2">
          {" "}
          <PhoneIcon className="w-4"></PhoneIcon> +1(845)6002121
        </a>
      </div>
    </address>
  );
};

export default UsContact;
