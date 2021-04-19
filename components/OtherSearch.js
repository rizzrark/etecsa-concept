const OtherSearch = () => {
  return (
    <div className="">
      <div className="relative inline-flex flex-col justify-center text-gray-500">
        <div className="relative">
          <input
            type="text"
            className="p-2 pl-8 bg-gray-200 border border-gray-200 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
            placeholder="search..."
            value="Gar"
          />
          <svg
            className="w-4 h-4 absolute left-2.5 top-3.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="mt-2 text-sm">Gevonden:</h3>
        <ul className="w-full mt-2 bg-white border border-gray-100 ">
          <li className="relative py-1 pl-8 pr-2 border-b-2 border-gray-100 cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
            <svg
              className="absolute w-4 h-4 stroke-current left-2 top-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <b>Gar</b>dameer - Italië
          </li>
          <li className="relative py-1 pl-8 pr-2 border-b-2 border-gray-100 cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
            <svg
              className="absolute w-4 h-4 stroke-current left-2 top-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <b>Gar</b>da - Veneto - Italië
          </li>
          <li className="relative py-1 pl-8 pr-2 border-b-2 border-gray-100 cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
            <svg
              className="absolute w-4 h-4 stroke-current left-2 top-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <b>Gar</b>da Hotel - Italië
          </li>
          <li className="relative py-1 pl-8 pr-2 border-gray-100 cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
            <svg
              className="absolute w-4 h-4 stroke-current left-2 top-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <b>Gar</b>dena Resort - Italië
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSearch;
