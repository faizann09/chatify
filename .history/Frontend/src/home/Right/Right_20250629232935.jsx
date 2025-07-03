import Messages from './Messages.jsx'
import ChatUser from './ChatUser.jsx'
import Type from './Type.jsx'

export default function Right(){
    return(
        <div className=" w-[70%] bg-slate-950 text-white">
            <ChatUser/>
            <div></div>
            <Type/>

        </div>
    )
}