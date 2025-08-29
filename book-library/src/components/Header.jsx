import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (input.trim()) {
      navigate(`/search?q=${encodeURIComponent(input.trim())}`);
    }
  };

  return (
    <header className="flex items-center justify-between flex-wrap gap-4 px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <img src="logo.png" alt="SmartTife Logo" className="h-10 w-10 object-contain" />
        <h1 className="text-2xl font-bold text-gray-800">SmartTife Book Library</h1>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search books by title or author..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-3 py-1 rounded w-64"
        />
        <button onClick={handleSearch} className="bg-green-600 text-white px-4 py-1 rounded">
          Search
        </button>
      </div>
    </header>
  );
}

