import Messages from './Messages.jsx'
import ChatUser from './ChatUser.jsx'
import Type from './Type.jsx'
import useConversation from '../../stateManage/useConversation.jsx';
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
    <div className="h-screen w-full bg-slate-950 text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4 animate-bounce">👋</div>
        <h1 className="text-2xl font-semibold mb-2">Chat not Selected</h1>
        <p className="text-gray-400">
          Select a chat to start  !
        </p>
        {authUser?.name && (
          <p className="mt-4 text-sm text-blue-400">
            Welcome, <span className="font-bold">{authUser.name}</span>
          </p>
        )}
      </div>
    </div>
  );
};
