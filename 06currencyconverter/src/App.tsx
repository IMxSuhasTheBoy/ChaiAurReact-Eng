import "./App.css";
import { useState } from "react";

import useCurrencyInfo from "./customHooks/useCurrencyInfo";
import { InputBox } from "./components";

interface CurrencyInfo {
  [key: string]: number;
}

function App() {
  const [amount, setAmount] = useState(1); // amount to convert (used in : from input box)
  const [convertedAmount, setConvertedAmount] = useState(0); // conversion result (used in : to input box)

  const [from, setFrom] = useState("usd"); // name (currency code) of currency to to convert from
  const [to, setTo] = useState("inr"); // name (currency code) of currency to convert to

  const fetchedCurrencyInfo: CurrencyInfo = useCurrencyInfo(from); // fetched by passing currency code
  // console.log("fetchedCurrencyInfo !!", fetchedCurrencyInfo);
  const selectOptions = Object.keys(fetchedCurrencyInfo); // array of currency codes

  // swap currency code & amount logic
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // currency conversion logic
  const convert = () => {
    if (fetchedCurrencyInfo && to in fetchedCurrencyInfo) {
      setConvertedAmount(Number((amount * fetchedCurrencyInfo[to]).toFixed(3))); // ex: (from)inr: 1 * (to)usd: 80 = 80
    } else {
      console.error("Invalid currency conversion");
      setConvertedAmount(0);
      setAmount(1);
    }
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/6234660/pexels-photo-6234660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-xl">
            <h1 className="text-4xl font-thin tracking-wider text-center mb-4 text-white">
              Currency Converter
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              {/* from currency input box  */}
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={selectOptions}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) =>
                    setAmount(Number(amount.toFixed(3)))
                  }
                  selectedCurrency={from}
                  // amountDisabled
                  // currrencyDisabled
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-slate-400 rounded-md bg-sky-500 text-white px-2 py-0.5 shadow-sm"
                  onClick={swap}
                >
                  ↑ swap ↓
                </button>
              </div>
              {/* to currency input box  */}
              <div className="w-full mb-1">
                <InputBox
                  label="To"
                  currencyOptions={selectOptions}
                  amount={convertedAmount}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisabled
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sky-600/80 text-white px-4 py-3 rounded-lg shadow-md tracking-wider"
              >
                Convert <span className="text-base">{from.toUpperCase()}</span>{" "}
                to <span className="text-base">{to.toUpperCase()}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
