import React, { useEffect, useState } from "react";
import CoinInfo from "../CoinInfo/CoinInfo";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  return (
    <div className="min-h-[89vh] mx-auto my-20 max-w-[94%] md:max-w-[80%] justify-center grid grid-cols-4 gap-4">
      {coins.map((coin) => (
        <CoinInfo coin={coin} key={coin.id}></CoinInfo>
      ))}
    </div>
  );
};

export default Coins;
