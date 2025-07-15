import { use } from "react";
import EditProfile from "./EditProfile";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div>
      Profile
      <div className="flex justify-center gap-8">
        <EditProfile userData={user} />
      </div>
    </div>
  );
};

export default Profile;
