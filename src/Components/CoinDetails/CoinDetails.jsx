import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CoinDetails = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = false;
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((res) => res.json())
      .then((data) => setCoin(data));
    setLoading(false);
  }, [coinId]);
  console.log(coin);
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="flex flex-col-reverse  md:flex-row justify-center md:justify-between items-center gap-2 md:gap-4 w-[80%] mx-auto  min-h-[85vh]  md:max-w-3xl">
          <div>
            <h2 className="capitalize text-3xl font-bold md:text-4xl ">
              {coin.name}
            </h2>
            <h3 className="capitalize text-xl md:text-2xl ">{coin.id} </h3>
            <p className="capitalize text-xl ">
              Categories: {coin?.categories}{" "}
            </p>
            <p className="capitalize text-xl ">
              Rank: {coin?.market_cap_rank}{" "}
            </p>
            <p className="text-2xl font-bold">Price: </p>
            <p className="underline">
              Name- Currency - Total Coin - Last Price(usd)
            </p>
            {coin?.tickers?.slice(0, 5)?.map((price) => (
              <p>
                {price.base} - {price.target} - {price?.converted_volume?.usd} -{" "}
                {price?.converted_last?.usd}
              </p>
            ))}
            <p className="capitalize text-xl ">
              Origin: {coin.country_origin ? coin.country_origin : "Not Found"}{" "}
            </p>
          </div>
          <img src={coin.image?.large} alt="" />
        </div>
      )}
    </>
  );
};

export default CoinDetails;
