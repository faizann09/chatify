import Message from "./Message"
import useGetMessage from "../../context/useGetMessage.js"

export default function Messages() {
    const { loading, messages } = useGetMessage();
    console

    return (
        <div className="" style={{minHeight: "calc(92vh - 8vh)"}}>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        </div>
    )
}