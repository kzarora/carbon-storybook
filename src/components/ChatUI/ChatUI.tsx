import React, { useState } from "react";
import { ChatBubble } from "../ChatBubble/ChatBubble";
import { askGPT } from "../api/ChatAPI";

export const ChatUI = () => {
  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; message: string }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user" as const, message: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const aiReply = await askGPT(input);

    const aiMessage = { sender: "ai" as const, message: aiReply };
    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <div style={{ height: "400px", overflowY: "auto" }}>
        {messages.map((msg, idx) => (
          <ChatBubble
            key={idx}
            message={msg.message}
            sender={msg.sender}
            timestamp=""
          />
        ))}
      </div>
      <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};
