import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currency) return;

    setLoading(true);
    setError(null);

    // Try the new API endpoint first
    fetch(`https://api.fxratesapi.com/latest?base=${currency.toUpperCase()}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch currency data");
        return res.json();
      })
      .then((res) => {
        console.log("API Response:", res);
        if (res.rates) {
          setData(res.rates);
        } else {
          throw new Error("No rates found in response");
        }
      })
      .catch((err) => {
        console.error("Primary API failed, trying fallback:", err);
        // Fallback to the original API
        return fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
          .then((res) => {
            if (!res.ok) throw new Error("Fallback API also failed");
            return res.json();
          })
          .then((res) => {
            console.log("Fallback API Response:", res);
            setData(res[currency] || {});
          });
      })
      .catch((err) => {
        setError(err.message);
        console.error("Currency fetch error:", err);
        // Set some fallback data
        setData({
          usd: 1,
          eur: 0.85,
          gbp: 0.73,
          inr: 82.5,
          jpy: 110.0,
          aud: 1.35,
          cad: 1.25,
          chf: 0.92,
          cny: 6.45,
          sek: 8.5,
          nok: 8.2,
          mxn: 20.0,
          sgd: 1.35,
          hkd: 7.8,
          krw: 1180.0,
          try: 8.5,
          rub: 74.0,
          brl: 5.2,
          zar: 15.0,
          pln: 4.0,
          thb: 32.0,
          myr: 4.2,
          php: 50.0,
          idr: 14300.0,
          vnd: 23000.0,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currency]);

  return { data, loading, error };
}

export default useCurrencyInfo;
