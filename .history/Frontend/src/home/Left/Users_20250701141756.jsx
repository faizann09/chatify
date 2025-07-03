import userGetAllUsers from "../../context/userGetAllUsers";
import User from "./User";

export default function Users(){
    const [allUsers, loading] = userGetAllUsers();
  console.log(allUsers);
    return(
        <div style={{maxHeight:"calc(84vh - 1vh)"}} className="overflow-y-auto flex-faizan py-1">
            <User/>
             
            
        </div>
    )
}