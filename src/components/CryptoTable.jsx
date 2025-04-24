import { useDispatch, useSelector } from "react-redux";
import { updatePrices } from "../features/crypto/cryptoSlice";
import { useEffect } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { ChevronUp, ChevronDown } from 'lucide-react';

const CryptoTable = () => {
  const coins = useSelector((state) => state.crypto.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const renderChange = (value) => {
    const isUp = value >= 0;
    const Icon = isUp ? ChevronUp : ChevronDown;
    const color = isUp ? "text-green-500" : "text-red-500";
    return (
      <span className={`flex items-center gap-1 font-medium ${color}`}>
        <Icon className="w-4 h-4" />
        {Math.abs(value).toFixed(2)}%
      </span>
    );
  };

  return (
    <div className="p-4 overflow-x-auto">
      <table className="w-full table-auto border-collapse text-sm text-left shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">1h %</th>
            <th className="p-3">24h %</th>
            <th className="p-3">7d %</th>
            <th className="p-3">Market Cap</th>
            <th className="p-3">Volume(24h)</th>
            <th className="p-3">Circulating Supply</th>
            <th className="p-3">Last 7 Days</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {coins.map((coin, index) => (
            <tr key={coin.id} className="border-b hover:bg-gray-50 transition">
              <td className="p-3">{index + 1}</td>
              <td className="p-3 font-medium flex items-center gap-2">
                <img src={coin.icon} alt={coin.name} className="w-5 h-5" />
                {coin.name}
                <span className="text-gray-500 text-xs ml-1">{coin.symbol}</span>
              </td>
              <td className="p-3 font-semibold">${coin.price.toFixed(2)}</td>
              <td className="p-3">{renderChange(coin.change1h)}</td>
              <td className="p-3">{renderChange(coin.change24h)}</td>
              <td className="p-3">{renderChange(coin.change7d)}</td>
              <td className="p-3">${coin.marketCap.toLocaleString()}</td>
              <td className="p-3">${coin.volume24h.toLocaleString()}</td>
              <td className="p-3">{coin.circulatingSupply.toLocaleString()} {coin.symbol}</td>
              <td className="p-3 w-[100px]">
                <Sparklines data={coin.sparkline} width={100} height={30}>
                  <SparklinesLine color={coin.change7d >= 0 ? "green" : "red"} style={{ fill: "none" }} />
                </Sparklines>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
