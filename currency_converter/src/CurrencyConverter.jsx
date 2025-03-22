import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Fetch exchange rates from API
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(Object.keys(data.rates));
      });
  }, []);

  // Handle conversion
  const convertCurrency = () => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const rate = data.rates[toCurrency];
        setConvertedAmount((amount * rate).toFixed(2));
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">💰 Currency Converter</h2>

        {/* Amount Input */}
        <div className="mb-3">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="form-control"
          />
        </div>

        {/* Currency Selection */}
        <div className="d-flex justify-content-center align-items-center mb-3">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="form-select mx-2"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <span className="fs-4">➡</span>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="form-select mx-2"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* Convert Button */}
        <div className="text-center">
          <button onClick={convertCurrency} className="btn btn-primary w-100">
            Convert
          </button>
        </div>

        {/* Display Converted Amount */}
        {convertedAmount && (
          <div className="alert alert-success mt-3 text-center">
            <h4>
              Converted Amount: {convertedAmount} {toCurrency}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;
