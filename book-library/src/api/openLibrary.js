export async function searchBooks(query) {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.docs; // Return only the array of books
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}
