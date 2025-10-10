import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm border ${className}`}>
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label
            htmlFor={`amount-${label}`}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {label}
          </label>
          <input
            id={`amount-${label}`}
            type="number"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xl font-semibold text-gray-800 bg-gray-50"
            placeholder="0.00"
            disabled={amountDisabled}
            value={amount || ""}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value) || 0)
            }
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor={`currency-${label}`}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Currency
          </label>
          <select
            id={`currency-${label}`}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xl bg-white cursor-pointer font-bold text-gray-800"
            value={selectedCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
            disabled={currencyDisabled}
          >
            {currencyOptions.length > 0 ? (
              currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency.toUpperCase()}
                </option>
              ))
            ) : (
              <option value="">Loading currencies...</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
