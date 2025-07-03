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
        {!selectedConversation ? (<NoChatSelected/>):(
            <>
             <div className=" w-[70] bg-slate-950 text-white">
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
  const {authUser} = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};