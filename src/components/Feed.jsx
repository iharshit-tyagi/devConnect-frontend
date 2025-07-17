import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useUserList } from "../hooks/useUserList";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
import { sendMatchRequest } from "../api/matches";
import { useGetSignedInUser } from "../hooks/useGetSignedInUser";

const Feed = () => {
  const { getUserList } = useUserList();
  const userList = useSelector((state) => state.userList);
  const { getUser } = useGetSignedInUser();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getUserList();
    // getUser();
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
    <div>
      {currentUser ? (
        <div className="flex justify-center items-center min-h-screen">
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
