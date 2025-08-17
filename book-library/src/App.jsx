import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [query, setQuery] = useState("");

  return (
    <Router>
      <Header onSearch={setQuery} />

      <main className="p-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p className="text-center text-gray-600">
                  {query && `Search Query: ${query}`}
                </p>
                {/* Results will be rendered here */}
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
