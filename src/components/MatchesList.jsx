import { useSelector } from "react-redux";

export default function MatchesList({ matches, onSelect, selectedUserId }) {
  const loggedInUserId = useSelector((state) => state.user?.id);

  const getOtherUser = (match) => {
    return match.user1.id === loggedInUserId ? match.user2 : match.user1;
  };

  return (
    <div className="w-1/4 border-r h-full overflow-y-auto p-4 text-white">
      <h2 className="text-xl font-semibold mb-4 text-[#8AB4F8] text-center">
        Your Matches
      </h2>

      <div className="space-y-3">
        {matches?.map((match) => {
          const otherUser = getOtherUser(match);
          const isSelected = selectedUserId === otherUser?.id;

          return (
            <div
              key={otherUser?.id}
              onClick={() => onSelect(otherUser?.id)}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                isSelected
                  ? "bg-[#1F2937] border border-[#8AB4F8]"
                  : "hover:bg-[#1A1E25]"
              }`}
            >
              <img
                src={otherUser?.avatar_url || "/default-avatar.png"}
                alt={otherUser?.username}
                className="w-10 h-10 rounded-full border border-gray-600"
              />
              <div>
                <p className="font-semibold text-white">
                  {otherUser?.firstName} {otherUser?.lastName}
                </p>
                <p className="text-sm text-[#8AB4F8]">{otherUser?.username}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
