import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState({});
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, [coinId]);
  console.log(coin);
  return (
    <div className="flex justify-between gap-4 w-[80%] mx-auto  min-h-[85vh]">
      <div>
        <h2 className="capitalize">{coin.id}</h2>
      </div>
      <img src={coin.image?.large} alt="" />
    </div>
  );
};

export default CoinDetails;
