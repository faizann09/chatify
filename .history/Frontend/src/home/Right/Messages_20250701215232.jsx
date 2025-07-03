import Message from "./Message"
import useGetMessage from ""

export default function Messages() {
    const { loading, messages } = useGetMessage();
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