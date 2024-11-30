import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom"

const Home = () => {
  const {allCoins, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (e)=>{
    e.preventDefault();
    setInput(e.target.value);
    if(e.target.value === "")
    {
      setDisplayCoin(allCoins);
    }
  }

  const searchHandler = async(e)=>{
    e.preventDefault();
    const coinResponse = await allCoins.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLowerCase())
    });
    setDisplayCoin(coinResponse);
  }

  useEffect(()=>{
    setDisplayCoin(allCoins);
  }, [allCoins]);

  const formatNumber = (num) =>
    new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full text-center pt-28 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 mt-10 leading-tight">
          Largest <br className="leading-relaxed" /> Crypto Marketplace
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-900 mb-8">
          Welcome to the world&apos;s largest cryptocurrency marketplace. <br />
          Sign Up to explore more...
        </p>
        <form onSubmit={searchHandler} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            onChange={inputHandler}
            value={input}
            list="coinlist"
            required
            type="text"
            placeholder="Search Coin..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black w-full sm:w-auto"
          />
          <datalist id="coinlist">
            {allCoins.map((item, index)=>(<option key={index} value={item.name}/>))}
          </datalist>
          <button className="bg-white text-black font-semibold border border-black px-6 py-2 rounded-lg hover:scale-95 transition-all">
            Search
          </button>
        </form>
      </div>
      <div className="p-4 md:p-10 font-semibold">
        <div className="overflow-x-auto">
          <table className="table-auto mx-auto border-collapse border border-black min-w-[400px] sm:min-w-[600px] md:min-w-[1000px]">
            <thead>
              <tr className="bg-cyan-700">
                <th className="px-2 py-2 border border-black w-[10%] text-white whitespace-nowrap">#</th>
                <th className="px-2 py-2 border border-black w-[27%] text-white whitespace-nowrap">Coin</th>
                <th className="px-2 py-2 border border-black w-[20%] text-white whitespace-nowrap">Price</th>
                <th className="px-2 py-2 border border-black w-[20%] text-white whitespace-nowrap">Last 24H</th>
                <th className="px-2 py-2 border border-black w-[23%] text-white whitespace-nowrap">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {displayCoin.slice(0,8).map((item, index) => (
                <tr
                  key={index}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-neutral-200"
                  } hover:bg-gray-300 cursor-pointer`}
                >
                  <Link to={`/coins/${item.id}`} className="contents">
                    <td className="px-2 py-2 border border-black">
                      {item.market_cap_rank}
                    </td>
                    <td className="px-2 py-2 border border-black">
                      <div className="inline-flex items-center gap-2">
                        <img
                          src={item.image}
                          alt={`${item.name} logo`}
                          width={32}
                          height={32}
                          className="inline-block"
                        />
                        <span className="truncate">{`${item.name} (${item.symbol.toUpperCase()})`}</span>
                      </div>
                    </td>
                    <td className="px-2 py-2 border border-black">
                      {currency.symbol}{formatNumber(item.current_price)}
                    </td>
                    <td
                      className={`px-2 py-2 border border-black ${
                        item.price_change_percentage_24h > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td className="px-2 py-2 border border-black">
                      {currency.symbol}{formatNumber(item.market_cap)}
                    </td>
                    </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
