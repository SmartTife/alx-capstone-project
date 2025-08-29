import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

export default function BookDetails() {
  const { id } = useParams();
  const [work, setWork] = useState(null);
  const [editions, setEditions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchAll() {
      setLoading(true);
      setErr(null);
      try {
        // Fetch work + editions in parallel
        const [workRes, edRes] = await Promise.all([
          fetch(`https://openlibrary.org/works/${id}.json`),
          fetch(`https://openlibrary.org/works/${id}/editions.json?limit=50`)
        ]);

        if (!workRes.ok) throw new Error(`Work ${workRes.status}`);
        if (!edRes.ok) throw new Error(`Editions ${edRes.status}`);

        const workJson = await workRes.json();
        const edJson = await edRes.json();

        if (!cancelled) {
          setWork(workJson);
          // editions endpoint returns { entries: [...] } (older API) or { editions: [...] } (newer);
          const list = edJson.entries || edJson.editions || [];
          setEditions(Array.isArray(list) ? list : []);
        }
      } catch (e) {
        if (!cancelled) setErr(e.message || "Failed to fetch");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchAll();
    return () => { cancelled = true; };
  }, [id]);

  // Pick a "best" edition: prefer one with pages & any ISBN
  const bestEdition = useMemo(() => {
    if (!editions.length) return null;

    const withPagesAndIsbn = editions.find(
      e => (e.number_of_pages || e.pagination) && (e.isbn_13?.length || e.isbn_10?.length)
    );
    if (withPagesAndIsbn) return withPagesAndIsbn;

    const withIsbn = editions.find(e => e.isbn_13?.length || e.isbn_10?.length);
    if (withIsbn) return withIsbn;

    const withPages = editions.find(e => e.number_of_pages || e.pagination);
    if (withPages) return withPages;

    return editions[0];
  }, [editions]);

  if (loading) return <div className="p-6">Loading book details...</div>;
  if (err) return <div className="p-6 text-red-600">Error: {err}</div>;
  if (!work) return <div className="p-6">Book not found.</div>;

  const {
    title,
    description,
    subjects,
    covers,
  } = work;

  const imageUrl = covers?.length
    ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  const pubDate =
    bestEdition?.publish_date ||
    bestEdition?.publish_year?.[0] ||
    "N/A";

  // Pages: either explicit number, otherwise try pagination text if present
  const pages =
    bestEdition?.number_of_pages ??
    bestEdition?.pagination ??
    "N/A";

  // ISBNs
  const isbn13 = bestEdition?.isbn_13?.join(", ");
  const isbn10 = bestEdition?.isbn_10?.join(", ");
  const isbn =
    isbn13 ? isbn13 : (isbn10 ? isbn10 : "N/A");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={imageUrl} alt={title} className="w-64 mx-auto mb-4 rounded" />
      <h1 className="text-2xl font-bold mb-2 text-center">{title}</h1>

      <p className="mb-2">
        <strong>Description:</strong>{" "}
        {typeof description === "string"
          ? description
          : description?.value || "No description available"}
      </p>

      <p className="mb-2"><strong>Publication Date:</strong> {pubDate}</p>

      <p className="mb-2"><strong>Subjects:</strong> {subjects?.join(", ") || "N/A"}</p>

      <p className="mb-2"><strong>ISBN:</strong> {isbn}</p>
      <p className="mb-2"><strong>Number of Pages:</strong> {pages}</p>

      {isbn13 && isbn10 && (
        <p className="text-sm text-gray-600">
          (ISBN-13 shown; ISBN-10: {isbn10})
        </p>
      )}
    </div>
  );
}
