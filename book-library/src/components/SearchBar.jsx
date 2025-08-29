import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();
  if (query.trim()) {
    console.log("Search submitted for:", query);  
    onSearch(query.trim());
  }
};


  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        placeholder="Search books by title or author..."
        className="md:w-[300px] px-4 py-2 border rounded"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Search
      </button>
    </form>
  );
}
