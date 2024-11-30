/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CoinContext = createContext();

const CoinContextProvider = (props)=>{
    const [allCoins, setAllCoins] = useState([]);
    const [currency, setCurrency] = useState({ name:"usd", symbol:"$"});

    const fetchAllCoins = async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': import.meta.env.VITE_SECRECT_KEY }
        };
          
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(res => res.json())
        .then(res => setAllCoins(res))
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchAllCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency] )

    const contextValue = {
        allCoins, currency, setCurrency
    }
    
    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;