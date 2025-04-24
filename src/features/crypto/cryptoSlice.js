import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      price: 64000,
      change1h: 0.5,
      change24h: -1.2,
      change7d: 2.3,
      marketCap: 1200000000,
      volume24h: 400000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      icon: "https://cryptoicon-api.pages.dev/api/icon/btc",
      sparkline: Array.from({ length: 7 }, () => 62000 + Math.random() * 2000),
    },
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      price: 3200,
      change1h: -0.2,
      change24h: 1.1,
      change7d: 5.2,
      marketCap: 500000000,
      volume24h: 200000000,
      circulatingSupply: 120000000,
      maxSupply: null,
      icon: "https://cryptoicon-api.pages.dev/api/icon/eth",
      sparkline: Array.from({ length: 7 }, () => 3100 + Math.random() * 200),
    },
    {
      id: "tether",
      name: "Tether",
      symbol: "USDT",
      price: 1.0,
      change1h: 0.01,
      change24h: 0.05,
      change7d: 0.02,
      marketCap: 90000000000,
      volume24h: 60000000000,
      circulatingSupply: 89000000000,
      maxSupply: null,
      icon: "https://cryptoicon-api.pages.dev/api/icon/usdt",
      sparkline: Array.from({ length: 7 }, () => 1 + Math.random() * 0.01),
    },
    {
      id: "bnb",
      name: "BNB",
      symbol: "BNB",
      price: 400,
      change1h: -0.5,
      change24h: 2.1,
      change7d: 4.3,
      marketCap: 60000000000,
      volume24h: 1000000000,
      circulatingSupply: 160000000,
      maxSupply: 200000000,
      icon: "https://cryptoicon-api.pages.dev/api/icon/bnb",
      sparkline: Array.from({ length: 7 }, () => 390 + Math.random() * 20),
    },
    {
      id: "xrp",
      name: "XRP",
      symbol: "XRP",
      price: 0.55,
      change1h: -0.1,
      change24h: 0.9,
      change7d: -1.2,
      marketCap: 30000000000,
      volume24h: 800000000,
      circulatingSupply: 55000000000,
      maxSupply: 100000000000,
      icon: "https://cryptoicon-api.pages.dev/api/icon/xrp",
      sparkline: Array.from({ length: 7 }, () => 0.5 + Math.random() * 0.1),
    },
  ],
};
const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updatePrices: (state, action) => {
      state.coins = state.coins.map((coin) => {
        const randomPercent = (Math.random() * 2 - 1).toFixed(2); //-1%  to +1%
        const priceChange = (coin.price * randomPercent) / 100;

        return {
          ...coin,
          price: parseFloat((coin.price + priceChange).toFixed(2)),
          change1h: parseFloat((Math.random() * 10 - 5).toFixed(2)),
          change24h: parseFloat((Math.random() * 10 - 5).toFixed(2)),
          change7d: parseFloat((Math.random() * 10 - 5).toFixed(2)),
          volume24h:coin.volume24h + Math.floor(Math.random() * 1000000 - 500000),
        };
      });
    },
  },
});

export const { updatePrices} = cryptoSlice.actions;
export default cryptoSlice.reducer;
