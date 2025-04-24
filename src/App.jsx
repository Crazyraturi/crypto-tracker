import React from "react";
import CryptoTable from "./components/CryptoTable";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center p-6">📊 Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;