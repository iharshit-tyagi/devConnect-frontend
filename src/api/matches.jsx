import axios from "axios";
export const sendMatchRequest = async (userId) => {
  try {
    console.log(userId);

    const res = await axios.post(
      `http://localhost:3000/api/v1/matches/request/${userId}`,
      {},
      {
        withCredentials: true,
      }
    );
    return res.data; // return only the useful data
  } catch (err) {
    console.error("Error Sending Request", err);
    return null;
  }
};
