/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../context/CoinContext";
import CoinChart from "../component/Chart";

const Coins = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_SECRECT_KEY,
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await response.json();
      setCoinData(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_SECRECT_KEY,
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        options
      );
      const data = await response.json();
      setHistoricalData(data);
    } catch (error) {
      console.error("Error fetching historical data:", error);
    }
  };

  useEffect(() => {
    if (coinId && currency.name) {
      fetchCoinData();
      fetchHistoricalData();
    }
  }, [coinId, currency]);

  if (!coinData || !historicalData) {
    return (
      <div className="grid place-items-center min-h-[80vh]">
        <div className="w-[65px] h-[65px] border-[5px] border-t-cyan-700 border-[#e2e8f0] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex flex-col items-center gap-5 my-[100px] mx-auto mb-[50px]">
        <img
          src={coinData.image.large}
          alt={`${coinData.name} logo`}
          className="max-w-[100px]"
        />
        <p className="text-[44px] font-semibold">
          {coinData.name} ({coinData.symbol.toUpperCase()})
        </p>
      </div>
      <div className="max-w-[800px] h-[250px] m-auto">
        <CoinChart historicalData={historicalData} />
      </div>
      <div className="font-medium max-w-[800px] my-[50px] mx-auto flex flex-col">
        <ul className="flex justify-between py-2.5 px-0 border-b-[1px] border-solid border-[#5f5d5f]">
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul className="flex justify-between py-2.5 px-0 border-b-[1px] border-solid border-[#5f5d5f]">
            <li>Current Price</li>
            <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
        </ul>
        <ul className="flex justify-between py-2.5 px-0 border-b-[1px] border-solid border-[#5f5d5f]">
            <li>Market Cap</li>
            <li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
        </ul>
        <ul className="flex justify-between py-2.5 px-0 border-b-[1px] border-solid border-[#5f5d5f]">
            <li>24 Hour High</li>
            <li>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
        </ul>
        <ul className="flex justify-between py-2.5 px-0 border-b-[1px] border-solid border-[#5f5d5f]">
            <li>24 Hour Low</li>
            <li>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
        </ul>
      </div>
    </div>
  );
};

export default Coins;
