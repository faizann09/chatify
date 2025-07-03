import Messages from './Messages.jsx'
import ChatUser from './ChatUser.jsx'
import Type from './Type.jsx'
import useConversation from '../../stateManage';
import { useEffect } from 'react';
import Loading from '../../component/loading.jsx';
import { useAuth } from "../../context/AuthProvider.jsx";

export default function Right() {
    const { selectedConversation, setSelectedConversation } = useConversation();
    useEffect(() => {
        return setSelectedConversation(null);
    }, [setSelectedConversation]);
    return (
       <>
       <div >
        {!selectedConversation ? (<Nochat/>):(
             <>
             {""}
             <div className=" w-[100%] bg-slate-950 text-white">
            <ChatUser />
            <div style={{ maxHeight: "calc(88vh - 8vh)" }} className='overflow-y-auto flex-faizan py-2'>
                <Messages />

            </div>
            <Type />

        </div>
             </>
        )
        }
       </div>
       </>
    )
}

const Nochat = () => {
  const { authUser } = useAuth();

  return (
   <div className="h-screen w-full bg-slate-950 text-white flex items-center justify-center">
  <div className="text-center px-4">
    <div className="text-6xl mb-6 animate-bounce">👋</div>
    
    <p className="text-2xl md:text-3xl font-semibold mb-2">
      Welcome, <span className="text-blue-400">{authUser?.user?.name}</span>
    </p>
    
    <p className="text-gray-400 text-base md:text-lg">
      Select a chat to start messaging!
    </p>
  </div>
</div>

  );
};
