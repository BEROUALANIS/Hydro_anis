
import { useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleCloseClick = () => {
    setIsExpanded(false);
    setSearchQuery("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission here
    console.log("Search submitted:", searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-10"
      }`}
    >
      <button
        type="button"
        onClick={handleSearchClick}
        className={`absolute left-0 p-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-white transition-colors duration-200 ${
          isExpanded ? "pointer-events-none" : ""
        }`}
      >
        <Search size={20} />
      </button>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className={`w-full h-10 pl-10 pr-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 border border-transparent focus:border-primary dark:focus:border-skyblue-dark focus:ring-2 focus:ring-primary/20 dark:focus:ring-skyblue-dark/20 transition-all duration-300 ${
          isExpanded
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4 pointer-events-none"
        }`}
      />
      {isExpanded && searchQuery && (
        <button
          type="button"
          onClick={handleCloseClick}
          className="absolute right-2 p-1 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-white transition-colors duration-200"
        >
          <X size={16} />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
