import Message from "./Message"
import useGetMessage from "../../context/useGetMessage.js"

export default function Messages() {
    const { loading, messages } = useGetMessage();
    console.log(messages );

    return (
        <>
        </>
    )
}