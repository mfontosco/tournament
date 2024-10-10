const Search = () => {
    return (
      <div className="relative max-w-lg">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.41-1.41l4.82 4.83a1 1 0 01-1.42 1.41l-4.83-4.83zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </span>
  
        <input
          type="text"
          className="w-full rounded-lg  py-3 pl-10 pr-4 text-sm  bg-[#242424] text-gay-200"
          placeholder="Search tournament, player name or player tag"
        />
      </div>
    );
  };
  
  export default Search;
  