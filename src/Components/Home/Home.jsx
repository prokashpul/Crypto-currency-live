import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navLink = useNavigate();
  const coin = () => {
    const path = "/coins";
    navLink(path);
  };
  return (
    <div className="min-h-[80.7vh] flex justify-center flex-col items-center">
      <h2 className="md:text-6xl text-4xl font-bold text-center mb-5 md:mb-10">
        Welcome to Coin<span className="text-red-500">Live.</span>
      </h2>

      <button
        className="bg-red-500 hover:bg-red-700 rounded-lg py-2 text-xl my-5 text-white px-4"
        onClick={coin}
      >
        Explore Coins
      </button>
    </div>
  );
};

export default Home;
