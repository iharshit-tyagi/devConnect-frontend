import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUserList } from "../hooks/useUserList";
import UserCard from "./UserCard";
import { sendMatchRequest } from "../api/matches";

const Feed = () => {
  const { getUserList } = useUserList();
  const userList = useSelector((state) => state.userList);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getUserList();
  }, []);

  const handleConnect = async () => {
    setCurrentIndex((prev) => prev + 1);

    const sentReq = await sendMatchRequest(currentUser?.id);
    console.log(sentReq?.data);
  };

  const handleSkip = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  if (!userList || userList.length === 0) return <div>No users</div>;

  const currentUser = userList[currentIndex];

  return (
    <div className="">
      {currentUser ? (
        <div className="flex justify-center items-center min-h-[calc(100vh-5rem)]">
          <UserCard
            userData={currentUser}
            onConnect={handleConnect}
            onSkip={handleSkip}
          />
        </div>
      ) : (
        <div className="text-center text-gray-400 mt-10">
          <p className="text-xl mb-2">No more developers in your feed 🚀</p>
          <button
            onClick={() => setCurrentIndex(0)}
            className="btn btn-primary mt-4"
          >
            Restart Feed
          </button>
        </div>
      )}
    </div>
  );
};

export default Feed;
