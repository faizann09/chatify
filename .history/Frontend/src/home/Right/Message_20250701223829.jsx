export default function Message({message}){
    return(
        <>
        <div className="p-4">
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">{message.message}</div>
                </div>
                <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      
    </div>
  </div>
  <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
</div>
                    </div>
                   </div>
        </>
    )
}