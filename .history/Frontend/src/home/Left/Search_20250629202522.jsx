
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Search() {
  return (
    <div className="absolute top-4 left-4 w-full max-w-md z-50">
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        </span>
        <input
          type="text"
          placeholder="Search icons..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black shadow"
        />
      </div>
    </div>
  );
}
