import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import BookDetails from "./components/BookDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Make Home the true landing page */}
        <Route path="/" element={<Home />} />

        {/* Optional: keep /home but redirect to / */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/search" element={<SearchResults />} />
        <Route path="/book/:id" element={<BookDetails />} />

        {/* Optional: 404 */}
        <Route path="*" element={<div className="p-6 text-center text-gray-600">Page not found.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

