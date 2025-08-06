import React from "react";
import { Tile } from "@carbon/react";
import "./ChatBubble.css"; // We'll add a little style later

type ChatBubbleProps = {
  message: string;
  sender: "user" | "ai";
  timestamp?: string;
};

export const ChatBubble = ({ message, sender, timestamp }: ChatBubbleProps) => {
  const isUser = sender === "user";

  return (
    <div className={`chat-bubble-wrapper ${isUser ? "user" : "ai"}`}>
      <Tile className="chat-bubble" light>
        <div className="chat-content">
          <p className="chat-message">{message}</p>
          {timestamp && <div className="chat-timestamp">{timestamp}</div>}
        </div>
      </Tile>
    </div>
  );
};
