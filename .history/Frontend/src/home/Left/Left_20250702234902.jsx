import Search from "./Search";
import Users from "./Users";

export default function Left(){
    return(
        <div className=" w-full bg-black text-white">
            <div>
                <h1 className="font-bold text-3xl p-2 px-11 ">Chat</h1>
            </div>
            
            <Search/>
            <hr />
            <Users/>
        </div>
    )
}