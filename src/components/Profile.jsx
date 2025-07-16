import { use } from "react";
import EditProfile from "./EditProfile";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div className="  ">
        <EditProfile userData={user} />
      </div>
    </div>
  );
};

export default Profile;
