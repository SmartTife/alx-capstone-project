import React from 'react';
import { Link, useNavigate } from "react-router-dom";


export default function BookCard({ book }) {
  const bookId = book.key?.split('/').pop();
  const coverId = book.cover_i;
  const imageUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://openlibrary.org';

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer">
      <Link to={`/book/${bookId}`}>
        <img
        src={imageUrl}
        alt={book.title}
        className="w-full h-48 object-cover rounded"
      />
      </Link>
      

      <h2 className="mt-2 text-lg font-semibold text-gray-800 line-clamp-2">
        {book.title}
      </h2>

      <p className="text-sm text-gray-600">
        {book.author_name?.[0] || 'Unknown Author'}
      </p>

      <p className="text-sm text-gray-500">
        {book.publisher?.[0] || 'Unknown Publisher'}
      </p>
    </div>
  );
}

