import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100">
              <SearchBar onSearch={setQuery} />
              <h1 className="text-3xl font-bold text-center mt-4">SmartTife Book Library</h1>
              <p className="text-center mt-2 text-gray-600">Search Query: {query}</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

