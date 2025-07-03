export default function Search(){
    return(
        <div>
            import React from 'react';

const SearchBox = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search icons..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65l4.35 4.35z"
            />
          </svg>
        </span>
      </div>
    </div>
  )
};

export default SearchBox;
        </div>
    )
}