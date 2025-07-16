import axios from "axios";

export const updateProfile = async (profile) => {
  console.log("Updating profile...");
  try {
    const res = await axios.patch(
      "http://localhost:3000/api/v1/user/update",
      profile,
      {
        withCredentials: true,
      }
    );
    return res.data; // return only the useful data
  } catch (err) {
    console.error("Error updating profile:", err);
    return null;
  }
};
