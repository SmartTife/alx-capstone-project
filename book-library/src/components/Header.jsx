import SearchBar from "./SearchBar";


export default function Header({ onSearch }) {
  return (
    <header className="flex items-center justify-between flex-wrap gap-4 px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <img src="logo.png" alt="SmartTife Logo" className="h-10 w-10 object-contain" />
        <h1 className="text-2xl font-bold text-gray-800">SmartTife Book Library</h1>
      </div>

      <SearchBar onSearch={onSearch} />
    </header>
  );
}
