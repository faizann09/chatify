import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Search() {
  return (
    <div className="absolute top-4 left-4 w-full max-w-md z-50">
      <div className="relative w-[80%]">
        <input
          type="text"
          placeholder="Search "
          className="w-[80%] pr-10 pl-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black shadow"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-blue-600"
        >
          <MagnifyingGlassIcon className="h-5 w-5 hover" />
        </button>
      </div>
    </div>
  );
}
