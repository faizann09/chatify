import Search from "./Search";

export default function Left(){
    return(
        <div className=" w-[30%] bg-black text-white">
            <div>
                <h1 className="font-bold text-3xl p-2 px-11 ">Chat</h1>
            </div>
            
            <Search/>
        </div>
    )
}