import React from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { coinId } = useParams();
  return <div>{coinId}</div>;
};

export default CoinDetails;
