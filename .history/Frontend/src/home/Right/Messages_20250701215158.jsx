import Message from "./Message"

export default function Messages() {
    const { loading, messages } = useGe();
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