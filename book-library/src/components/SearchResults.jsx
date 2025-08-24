// src/pages/SearchResults.jsx
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const API_BASE_URL = "https://openlibrary.org";

export default function SearchResults() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      if (!query) return;

      setLoading(true);
      setError("");

      try {
        const res = await fetch(`${API_BASE_URL}/search.json?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setBooks(data.docs.slice(0, 12));
      } catch (err) {
        console.error(err);
        setError("Failed to fetch books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]);

  return (
    <main className="p-6">
      {loading && <p className="text-green-500 text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && query && (
        <>
          <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
            Results for: <span className="text-green-600">{query}</span>
          </h2>

          {books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No results found.</p>
          )}
        </>
      )}
    </main>
  );
}
