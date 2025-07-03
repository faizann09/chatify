export default function Logout(){
    return(
        <div className="w-[3%] bg-slate-950 text-white">
            <button
          type="submit"
          className="absolute inset-y-0 right-8 flex items-center text-white "
        >
          <MagnifyingGlassIcon className="h-7 w-7 hover:text-gray-600 rounded-full duration-300 " />
        </button>
        </div>
    )
}