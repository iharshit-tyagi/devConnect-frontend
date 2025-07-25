import { useEffect, useState } from "react";
import MatchesList from "./MatchesList";
import ChatWindow from "./ChatWindow";
import { useSelector } from "react-redux";
import { useMatchList } from "../hooks/useMatchList";

export default function ChatPage() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const matches = useSelector((state) => state.match?.matches);
  const currentUserId = useSelector((state) => state.user?.id);
  const { getMatchList } = useMatchList();
  useEffect(() => {
    getMatchList();
  }, []);
  if (!matches) return;

  return (
    <div className="flex h-[calc(100vh-70px)] overflow-hidden">
      <MatchesList
        matches={matches}
        onSelect={setSelectedUserId}
        setSelectedMatch={setSelectedMatch}
        selectedUserId={selectedUserId}
      />
      {selectedUserId ? (
        <ChatWindow
          matchUserId={selectedUserId}
          currentUserId={currentUserId}
          match={selectedMatch}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-400 text-xl">
          Select a match to start chatting
        </div>
      )}
    </div>
  );
}
