return (
  <>
    {loading ? (
      <Loading />
    ) : Array.isArray(localMessages) && localMessages.length > 0 ? (
      <>
        {localMessages.map((message, index) => (
          <div
            key={message._id}
            ref={index === localMessages.length - 1 ? lastMsgRef : null}
          >
            <Message message={message} />
          </div>
        ))}

        {/* ✅ Always shown after messages */}
        {isTyping && (
          <div className="px-4 text-sm italic text-gray-400 mt-1">
            Typing...
          </div>
        )}
      </>
    ) : (
      <div style={{ minHeight: "calc(92vh - 8vh)" }}>
        <div className="flex items-center justify-center h-full mt-40">
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-[5rem] mb-3 animate-bounce">👋</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Start a Conversation
            </h2>
            <p className="text-gray-500 text-base max-w-md">
              You haven’t sent any messages yet. Type something and say hello!
            </p>
          </div>
        </div>
      </div>
    )}
  </>
);
