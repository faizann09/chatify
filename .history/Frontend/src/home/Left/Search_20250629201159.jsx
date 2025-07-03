export default function Search(){
    return(
        <div className="flex justify-center items-center h-screen ">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search icons..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ">
          
        </span>
      </div>
    </div>
    )
}