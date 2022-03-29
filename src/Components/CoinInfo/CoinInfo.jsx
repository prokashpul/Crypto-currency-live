import React from "react";
import { Link } from "react-router-dom";

const CoinInfo = ({ coin }) => {
  const { id, image, name, symbol } = coin;
  return (
    <Link
      to={`/coins-details/${id}`}
      className="border border-red-500 p-2 flex gap-4 rounded-md shadow-lg"
    >
      <img src={image} alt="" height="50" width="50" />
      <div>
        <h2 className="text-base font-semibold">{name}</h2>
        <p>{symbol}</p>
      </div>
    </Link>
  );
};

export default CoinInfo;
