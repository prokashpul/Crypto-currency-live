import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navLink = useNavigate();
  const coin = () => {
    const path = "/coins";
    navLink(path);
  };
  return (
    <div className="min-h-[81vh] flex justify-center flex-col items-center">
      <h2 className="text-6xl font-bold text-center">Welcome to CoinBase</h2>

      <button
        className="bg-red-500 rounded-lg py-2 text-xl my-5 text-white px-4"
        onClick={coin}
      >
        Explore Coins
      </button>
    </div>
  );
};

export default Home;
