import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Search() {
  return (
    <div className="absolute top-10 left-4 w-full max-w-md z-50 ">
      <div className="relative w-[80%]">
        <input
          type="text"
          placeholder="Search "
          className="w-[80%] pr-10 pl-4 py-2 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-900 text-black shadow"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-10 flex items-center text-white "
        >
          <MagnifyingGlassIcon className="h-5 w-5 hover:text-gray-600 rounded-full duration-300 " />
        </button>
      </div>
    </div>
  );
}
