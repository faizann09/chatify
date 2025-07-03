import Message from "./Message"
import useGetMessage from "../../context/useGetMessage.js"

export default function Messages() {
    const { loading, messages } = useGetMessage();
    console.log(messages );

    return (
        <>
        <div className="" style={{minHeight: "calc(92vh - 8vh)"}}>
         {!loading && messages.length === 0 && 
        <div>
          <p className="text-center mt-[20%]">
            Say! Hi to start the conversation
          </p>
        </div>
}
        </div>
        </>
    )
}