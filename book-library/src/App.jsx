import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import BookDetails from "./components/BookDetails";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div className="p-6 text-center text-gray-600">Start by searching for a book...</div>} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/book/:id" element={<BookDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
}
