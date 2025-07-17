import axios from "axios";

export const updateProfile = async (profile) => {
  try {
    const formattedSkills =
      typeof profile.skills === "string"
        ? profile.skills
            .split(",")
            .map((skill) => skill.trim())
            .filter((skill) => skill !== "")
        : profile.skills;

    // Updated profile object
    const updatedProfile = {
      ...profile,
      skills: formattedSkills,
    };
    const res = await axios.patch(
      "http://localhost:3000/api/v1/user/update",
      updatedProfile,
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
