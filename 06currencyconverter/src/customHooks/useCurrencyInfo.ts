import { useEffect, useState } from "react";

// expected a curency string to which data is to be fetched of
function useCurrencyInfo(currency: string) {
  const [data, setData] = useState({}); // fetched currency data

  useEffect(() => {
    // Generate current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split("T")[0];
    // console.log("date !!", currentDate);

    // ex : https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${currentDate}/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => setData(data[currency]));
  }, [currency]); // whenever requested currecy string is changed fetch its data

  // console.log("data !!", data);
  return data; // Object of currency data
}

export default useCurrencyInfo;

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}
