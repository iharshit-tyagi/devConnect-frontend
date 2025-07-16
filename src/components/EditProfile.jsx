import { useState } from "react";
import UserCard from "./UserCard";
const EditProfile = ({ userData }) => {
  const [profile, setProfile] = useState(userData);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated: ", profile);
    // you can trigger your API call here
  };

  return (
    <div className="flex justify-center gap-6 p-6">
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
                value={profile.firstName}
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
                value={profile.lastName || ""}
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
                value={profile.email || ""}
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
                value={profile.bio}
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
                value={profile.skills}
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
