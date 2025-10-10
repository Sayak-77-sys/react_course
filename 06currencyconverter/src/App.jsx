import { useState, useEffect } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrrencyinfo";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, loading, error } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  // Debug information
  console.log("Currency Info:", currencyInfo);
  console.log("Options:", options);
  console.log("Loading:", loading);
  console.log("Error:", error);

  // Auto-convert when amount or currencies change
  useEffect(() => {
    if (amount && currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    } else {
      setConvertedAmount(0);
    }
  }, [amount, currencyInfo, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      }}
    >
      <div className="w-full max-w-md border border-gray-300 bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl space-y-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Currency Converter
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Error: {error}
          </div>
        )}

        {/* Debug Information */}
        <div className="bg-gray-100 p-3 rounded text-xs text-gray-600">
          <p>
            <strong>Debug Info:</strong>
          </p>
          <p>Available currencies: {options.length}</p>
          <p>
            From: {from} | To: {to}
          </p>
          <p>
            Amount: {amount} | Converted: {convertedAmount}
          </p>
          {options.length > 0 && (
            <p>First few options: {options.slice(0, 5).join(", ")}</p>
          )}
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={setAmount}
              onCurrencyChange={setFrom}
              currencyOptions={options}
              selectedCurrency={from}
              amountDisabled={loading}
              currencyDisabled={loading}
              className="w-full"
            />

            <div className="flex justify-center">
              <button
                type="button"
                onClick={swap}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 transform hover:scale-105"
              >
                ⇅ Swap
              </button>
            </div>

            <InputBox
              label="To"
              amount={convertedAmount}
              onAmountChange={setConvertedAmount}
              onCurrencyChange={setTo}
              currencyOptions={options}
              selectedCurrency={to}
              amountDisabled={true}
              currencyDisabled={loading}
              className="w-full"
            />
          </div>
        </form>

        {loading && (
          <div className="text-center text-gray-600">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            <p className="mt-2">Loading exchange rates...</p>
          </div>
        )}

        {amount > 0 && convertedAmount > 0 && !loading && (
          <div className="text-center text-2xl font-bold text-blue-800 bg-blue-50 border-2 border-blue-200 p-6 rounded-lg shadow-lg">
            <div className="mb-2">
              {amount.toLocaleString()} {from.toUpperCase()}
            </div>
            <div className="text-blue-600 text-lg">equals</div>
            <div className="text-3xl text-green-600 font-extrabold">
              {convertedAmount.toFixed(2).toLocaleString()} {to.toUpperCase()}
            </div>
            <div className="text-sm text-gray-600 mt-2">
              1 {from.toUpperCase()} = {(convertedAmount / amount).toFixed(4)}{" "}
              {to.toUpperCase()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
