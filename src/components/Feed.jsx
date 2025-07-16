import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useUserList } from "../hooks/useUserList";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
import { sendMatchRequest } from "../api/matches";

const Feed = () => {
  const dispatch = useDispatch();
  const { getUserList } = useUserList();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);
  const user = useSelector((state) => state.user);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getUserList();
    getSignedInUser();
  }, []);

  const getSignedInUser = async () => {
    try {
      if (user) return;
      const res = await axios.get("http://localhost:3000/api/v1/user/view", {
        withCredentials: true,
      });

      if (res.status === 200) {
        dispatch(addUser(res.data));
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

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
