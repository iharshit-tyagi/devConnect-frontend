export default function MatchesList({ matches, onSelect, selectedUserId }) {
  return (
    <div className="w-1/4 border-r h-full overflow-y-auto p-4 bg-white">
      <h2 className="text-xl font-semibold mb-4">Your Matches</h2>
      {matches.map((match) => (
        <div
          key={match.user.id}
          onClick={() => onSelect(match.user.id)}
          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
            selectedUserId === match.user.id ? "bg-gray-100" : ""
          }`}
        >
          <img
            src={match.user.avatar_url || "/default-avatar.png"}
            alt={match.user.username}
            className="w-10 h-10 rounded-full"
          />
          <span>{match.user.username}</span>
        </div>
      ))}
    </div>
  );
}
