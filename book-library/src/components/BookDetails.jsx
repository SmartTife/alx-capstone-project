import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BookDetails() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await res.json();
        setBookDetails(data);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <div className="p-6">Loading book details...</div>;
  if (!bookDetails) return <div className="p-6">Book not found.</div>;

  const {
    title,
    description,
    subjects,
    created,
    covers,
  } = bookDetails;

  const imageUrl = covers
    ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={imageUrl} alt={title} className="w-64 mx-auto mb-4 rounded" />
      <h1 className="text-2xl font-bold mb-2 text-center">{title}</h1>

      <p className="mb-2"><strong>Description:</strong> {
        typeof description === 'string'
          ? description
          : description?.value || 'No description available'
      }</p>

      <p className="mb-2"><strong>Publication Date:</strong> {created?.value?.split("T")[0] || "N/A"}</p>

      <p className="mb-2"><strong>Subjects:</strong> {subjects?.join(", ") || "N/A"}</p>

      <p className="mb-2"><strong>ISBN:</strong> Not available in Work API (only in Editions)</p>
      <p className="mb-2"><strong>Number of Pages:</strong> Not available in Work API (only in Editions)</p>
    </div>
  );
}
