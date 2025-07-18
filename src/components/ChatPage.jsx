// ChatPage.js
import { useEffect, useState } from "react";
import MatchesList from "./MatchesList";
import ChatWindow from "./ChatWindow";

export default function ChatPage() {
  const [matches, setMatches] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const currentUserId = "your-user-id"; // Replace with actual logged-in user ID

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await fetch("/api/matches");
        const data = await res.json();
        setMatches(data);
      } catch (err) {
        console.error("Error fetching matches:", err);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="flex h-screen">
      <MatchesList
        matches={matches}
        onSelect={setSelectedUserId}
        selectedUserId={selectedUserId}
      />
      {selectedUserId ? (
        <ChatWindow
          matchUserId={selectedUserId}
          currentUserId={currentUserId}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-400 text-xl">
          Select a match to start chatting
        </div>
      )}
    </div>
  );
}
