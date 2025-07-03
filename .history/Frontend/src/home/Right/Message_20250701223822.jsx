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
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
      />
    </div>
  </div>
  <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
</div>
                    </div>
                   </div>
        </>
    )
}