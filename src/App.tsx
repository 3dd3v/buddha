// App.tsx
import React from "react";
import { FaTwitter, FaTelegram, FaChartBar, FaSearch } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-buddha-purple via-buddha-red to-buddha-gold flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-8 font-display">Buddha</h1>

      <div className="relative w-full max-w-2xl aspect-video mb-8">
        <video
          className="w-full h-full object-cover rounded-lg shadow-lg"
          autoPlay
          loop
          muted
        >
          <source src="./buddha.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="text-xl mb-4 font-sans">Fat Cat Stayin Alive (Buddha)</p>
      <p className="text-xl mb-4 font-sans">$Buddha - the fat cat</p>
      <div className="flex space-x-4 mb-8">
        <a
          href="https://twitter.com/BuddhaCoin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-buddha-gold transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="https://t.me/BuddhaCoin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-buddha-gold transition-colors"
        >
          <FaTelegram />
        </a>
        <a
          href="https://dexscreener.com/solana/buddhacoin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-buddha-gold transition-colors"
        >
          <FaChartBar />
        </a>
        <a
          href="https://solscan.io/token/Buddh111111111111111111111111111111111111111"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-buddha-gold transition-colors"
        >
          <FaSearch />
        </a>
      </div>

      <p className="text-sm font-sans">Contract Address:</p>
      <p className="text-xs mb-8 font-mono">
        Buddh111111111111111111111111111111111111111
      </p>

      <button className="bg-white text-buddha-purple px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-colors duration-300">
        Buy Buddha Coin
      </button>
    </div>
  );
};

export default App;
