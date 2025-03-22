import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Currency Converter App</h1>
      <CurrencyConverter />
    </div>
  );
}

export default App;
