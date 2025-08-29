// src/components/Home.jsx
export default function Home() {
  return (
    <main className="py-10 md:py-16 flex flex-col items-center justify-center bg-gray-50 px-6">
      {/* Simple Hero */}
      <section className="text-center max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Welcome to <span className="text-green-700">SmartTife Book Library</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Access millions of book records, explore detailed information, and enjoy a seamless,
           modern interface designed for efficient discovery.
        </p>
      </section>


      {/* Single Illustration */}
      <div className="mt-10">
        <img
          src="library.png"
          alt="Bookshelf"
          className="rounded-2xl shadow-lg w-[320px] md:w-[480px] object-cover"
        />
      </div>


    <footer>
       <p className="mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} SmartTife. Built with Open Library.
      </p>
    </footer>
     
    </main>
  );
}

