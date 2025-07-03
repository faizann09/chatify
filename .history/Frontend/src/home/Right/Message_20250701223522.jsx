export default function Message({message}){
    return(
        <>
        <div className="p-4">
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-info">{message.message}</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-accent">
                        
                        </div>
                    </div>
                   </div>
        </>
    )
}