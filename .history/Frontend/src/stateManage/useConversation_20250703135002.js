import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => {
    if (Array.isArray(messages)) {
      set({ messages });
    } else {
      console.warn("❌ Invalid messages passed:", messages);
      set({ messages: [] });
    }
  },
}));

export default useConversation;
