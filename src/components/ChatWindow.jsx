import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ChatWindow({ matchUserId, currentUserId, match }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const getOtherUser = (match) => {
    return match.user1.id === currentUserId ? match.user2 : match.user1;
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/v1/message/getMessages",
          {
            matchId: match?.id,
          },
          { withCredentials: true }
        );
        setMessages(res?.data?.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    fetchMessages();
  }, [match]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/message/send",
        {
          userId: currentUserId,
          message: newMessage,
          matchId: match?.id,
        },
        { withCredentials: true }
      );

      if (res.status == 200) {
        setMessages((prev) => [...prev, res?.data?.data]);
        setNewMessage("");
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };
  console.log(messages);

  return (
    <div className="flex flex-col h-full w-3/4">
      <div className="flex items-center gap-4 bg-base-200 px-4 py-3 border-b">
        <img
          src={
            getOtherUser(match)?.avatar_url ||
            "https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg"
          }
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-white font-medium">
            {getOtherUser(match)?.firstName} {getOtherUser(match)?.lastName}
          </p>
          <p className="text-gray-400 text-sm">
            {getOtherUser(match)?.skills?.join(", ")}
          </p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages?.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 max-w-xs ${
              msg.sender_id === currentUserId
                ? "ml-auto text-right"
                : "text-left"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                msg.sender_id === currentUserId
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {msg.content}
            </div>
            <small className="text-xs text-gray-500">
              {new Date(msg.sent_at).toLocaleTimeString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </small>
          </div>
        ))}
      </div>
      <div className="border-t p-4 flex gap-2 bg-white">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
