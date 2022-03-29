import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Navlinks = ({ link }) => {
  return (
    <li className="m-4 hover:text-red-500 md:m-0">
      <CustomLink to={link.link}>{link.name}</CustomLink>
    </li>
  );
};

export default Navlinks;
