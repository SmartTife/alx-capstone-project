# SmartTife Book Library

SmartTife Book Library is a **React.js web application** that lets users search, browse, and explore millions of books using the **Open Library API**.  
It provides a clean, responsive interface for discovering book details such as **title, author, subjects, ISBN, number of pages, and publication date**.

---

## Features

 **Book Search**  
  Search for books by title, author, or keywords through the Open Library API.

 **Book Details**  
  View detailed information for each book including description, subjects, ISBN, number of pages, and publication date.

 **Covers**  
  Displays book covers when available, or a placeholder if not.

 **Responsive UI**  
  Built with **Tailwind CSS**, fully responsive across mobile, tablet, and desktop devices.

 **Fast Navigation**  
  Uses **React Router** for seamless navigation between Home, Search Results, and Book Details pages.

 **Minimal & Clean Design**  
  Focused on readability and ease of use.



## Tech Stack

- [React.js](https://reactjs.org/) – Frontend library  
- [Vite](https://vitejs.dev/) – Build tool for fast dev environment  
- [React Router](https://reactrouter.com/) – Routing and navigation  
- [Tailwind CSS](https://tailwindcss.com/) – Styling and responsive design  
- [Open Library API](https://openlibrary.org/developers/api) – Book data source  



## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SmartTife/alx-capstone-project
cd book-library

### 2. Install dependencies

```bash
npm install



### 3. Set up environment variables

Create a .env file in the project root:

VITE_API_BASE_URL=https://openlibrary.org



### 4. Run the development server
npm run dev




### Project Structure
```bash
src/
 ├── components/
 │   ├── Header.jsx        # App header with search bar
 │   ├── Home.jsx          # Welcome/landing page
 │   ├── SearchResults.jsx # Displays search results
 │   └── BookDetails.jsx   # Displays detailed book info
 │
 ├── App.jsx               # Main app component with routes
 ├── main.jsx              # Entry point
 └── index.css             # Global styles




### API Usage
Search Endpoint:

pgsql

GET https://openlibrary.org/search.json?q=<query>
Work Details:

pgsql

GET https://openlibrary.org/works/{workId}.json
Edition Details (ISBN, Pages, etc.):

bash

GET https://openlibrary.org/works/{workId}/editions.json




### Author

Developed by SmartTife
Feel free to fork this project, submit issues, or open pull requests to improve it.