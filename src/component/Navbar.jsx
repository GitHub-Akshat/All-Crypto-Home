import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const CurrencyHandler = (e) => {
    e.preventDefault(); 
    const currency = e.target.value; 
    if (currency === "USD") {
      setCurrency({ name: "usd", symbol: "$" });
    }
    if (currency === "INR") {
      setCurrency({ name: "inr", symbol: "₹" });
    }
    if (currency === "EURO") {
      setCurrency({ name: "eur", symbol: "€" });
    }
  };

  return (
    <div className="bg-white border-b-2 m-2 p-4 flex justify-between items-center fixed top-4 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg w-[95%] max-w-5xl">
      <Link to={"/"} className="px-8 hidden sm:flex font-bold items-center text-xl">
        <img src="/favicon.png" alt="logo.png" width={38} height={38} />
        <div className="px-2">CryptoHome</div>
      </Link>
      <div>
        <ul className="flex space-x-3 md:space-x-6 text-md md:text-lg">
          <Link to={"/"} className="hover:text-cyan-500 cursor-pointer"><li>Home</li></Link>
          <Link to={"/blogs"} className="hover:text-cyan-500 cursor-pointer"><li>Blogs</li></Link>
          <Link to={"/news"} className="hover:text-cyan-500 cursor-pointer"><li>News</li></Link>
        </ul>
      </div>
      <div className="gap-6 flex">
        <select onChange={CurrencyHandler} className="p-2 border rounded cursor-pointer text-sm md:text-md border-black">
          <option value="USD" className="text-sm md:text-md">USD</option>
          <option value="INR" className="text-sm md:text-md">INR</option>
          <option value="EURO" className="text-sm md:text-md">Euro</option>
        </select>
        <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 hover:shadow-md transition-all">
          Sign Up
        </button>
      </div>
    </div>
  );
};
  
export default Navbar;
  