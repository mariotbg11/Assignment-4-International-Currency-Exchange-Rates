import { useState, useEffect } from "react";
import Table from "./components/Table";

function App() {
  const [currencyRates, setCurrencyRates] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;
    const url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`;

    async function getCurrency() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.rates);
      setCurrencyRates(data.rates);
    }
    getCurrency();
  }, []);

  // We Buy
  const calcBuy = (rate) => (rate * 1.02).toFixed(4);

  // We Sell
  const calcSell = (rate) => (rate * 0.98).toFixed(4);

  return (
    <div className="h-screen bg-orange-500 flex items-center justify-center">
      <Table
        currencyRates={currencyRates}
        calcBuy={calcBuy}
        calcSell={calcSell}
      />
    </div>
  );
}

export default App;
