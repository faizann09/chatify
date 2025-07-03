import { IoSearch } from "react-icons/io5";


export default function Search(){
    return(
        <div>
            <form action="">
                <div className="flex justify-center items-center h-screen ">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search icons..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
        />
        
      </div>
    </div>
            </form>
        </div>
    )
}