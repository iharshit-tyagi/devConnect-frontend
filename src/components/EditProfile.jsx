import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { updateProfile } from "../api/user.jsx";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.jsx";
import { useSelector } from "react-redux";
import Toast from "./Toast.jsx";
const EditProfile = () => {
  const reduxUser = useSelector((state) => state.user);
  const [profile, setProfile] = useState(reduxUser);
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Sync local state when redux user updates
    if (reduxUser) {
      setProfile(reduxUser);
    }
  }, [reduxUser]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // API call here
    const updatedProfile = await updateProfile(profile);
    console.log(updatedProfile?.response);

    if (updatedProfile) {
      dispatch(addUser(updatedProfile?.response));
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center gap-6 p-6">
      {showNotification && <Toast message={"User updated"} />}

      <div className="w-2/6">
        <div className="card bg-base-200 shadow-md w-full p-6 text-white">
          <h2 className="text-2xl font-semibold mb-3">Edit Profile</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={profile?.firstName || ""}
                onChange={handleChange}
                className="input input-bordered w-full bg-base-100"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={profile?.lastName || ""}
                onChange={handleChange}
                className="input input-bordered w-full bg-base-100"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Email</span>
              </label>
              <input
                type="text"
                name="email"
                value={profile?.email || ""}
                onChange={handleChange}
                className="input input-bordered w-full bg-base-100"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Avatar URL</span>
              </label>
              <input
                type="text"
                name="avatar_url"
                value={profile?.avatar_url || ""}
                onChange={handleChange}
                className="input input-bordered w-full bg-base-100"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">Bio</span>
              </label>
              <textarea
                name="bio"
                value={profile?.bio || ""}
                onChange={handleChange}
                className="textarea textarea-bordered bg-base-100"
                rows="2"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-300">
                  Skills (comma separated)
                </span>
              </label>
              <input
                type="text"
                name="skills"
                value={profile?.skills}
                onChange={handleChange}
                className="input input-bordered w-full bg-base-100"
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full max-w-sm">
        <UserCard userData={profile} />
      </div>
    </div>
  );
};

export default EditProfile;
