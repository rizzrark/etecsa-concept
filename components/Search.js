import Fuse from "fuse.js";
import { useState } from "react";

const Search = ({ pageDocs }) => {
  const fuse = new Fuse(pageDocs, {
    keys: ["title"],
  });

  console.log(fuse.search("Two Forms of Pre-rendering"));

  const [query, setQuery] = useState("");

  function handleOnChange({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
  }

  const results = fuse.search(query);
  const searchResuls = results.map((results) => results.item);
  return (
    <div className="max-w-sm p-4 rounded-lg ">
      <div className="px-4 pt-4 pb-4 space-y-4 sm:px-6 lg:px-4 xl:px-6 sm:pb-6 lg:pb-4 xl:pb-6">
        <form className="relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="w-full py-2 pl-10 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none"
            value={query}
            onChange={handleOnChange}
            type="text"
            aria-label="Filter projects"
            placeholder="Filter projects"
          />
        </form>
      </div>
      {/* Drop  */}
      <ul className="w-full mt-2 space-y-2">
        {searchResuls.map(({ title, id, link }) => (
          <li
            key={id}
            className="relative px-3 py-2 bg-white border-gray-100 rounded-lg shadow-lg cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
          >
            <a className="block" href={link}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
