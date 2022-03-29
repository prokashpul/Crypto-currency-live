import React, { useEffect, useState } from "react";
import CoinInfo from "../CoinInfo/CoinInfo";
import Spinner from "../Spinner/Spinner";

const Coins = () => {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="min-h-[89vh] mx-auto my-20  max-w-[94%] md:max-w-[85%] justify-center grid grid-cols-1 md:grid-cols-4 gap-4">
          {coins.map((coin) => (
            <CoinInfo coin={coin} key={coin.id}></CoinInfo>
          ))}
        </div>
      )}
    </>
  );
};

export default Coins;
