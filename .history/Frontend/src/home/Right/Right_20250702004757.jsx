import Messages from './Messages.jsx'
import ChatUser from './ChatUser.jsx'
import Type from './Type.jsx'
import useConversation from '../../stateManage/useConversation.jsx';
import { useEffect } from 'react';
import Loading from '../../component/loading.jsx';
import { CiMenuFries } from "react-icons/ci";
import { useAuth } from "../../context/AuthProvider.jsx";



export default function Right() {
    const { selectedConversation, setSelectedConversation } = useConversation();
    useEffect(() => {
        return setSelectedConversation(null);
    }, [setSelectedConversation]);
    return (
       <div>
        {!selectedConversation ? ({}):(
            <>
             <div className=" w-[70%] bg-slate-950 text-white">
            <ChatUser />
            <div style={{ maxHeight: "calc(92vh - 8vh)" }} className='overflow-y-auto flex-faizan py-2'>
                <Messages />

            </div>
            <Type />

        </div>
            </>
        )}
       </div>
    )
}


const NoChatSelected = () => {
}