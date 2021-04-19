import Fuse from "fuse.js";

const Search = ({ pageDocs }) => {
  const fuse = new Fuse(pageDocs, {
    keys: ["title"],
  });
  console.log(fuse.search("Two Forms of Pre-rendering"));
  return (
    <div className="flex items-center justify-center max-w-sm p-4 bg-gray-400 rounded-lg ">
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
            type="text"
            aria-label="Filter projects"
            placeholder="Filter projects"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
