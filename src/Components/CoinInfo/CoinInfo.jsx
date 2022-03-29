import React from "react";
import { Link } from "react-router-dom";

const CoinInfo = ({ coin }) => {
  const { id } = coin;
  return (
    <Link to={`/coins-details/${id}`} className="border border-red-500 p-2">
      {coin.name}
    </Link>
  );
};

export default CoinInfo;
