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
export const getMatchRequests = async () => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/v1/matches/requests`,
      {
        withCredentials: true,
      }
    );
    return res.data; // return only the useful data
  } catch (err) {
    console.error("Error Fetching Data", err);
    return null;
  }
};
export const acceptMatchRequest = async (reqId) => {
  try {
    const res = await axios.patch(
      `http://localhost:3000/api/v1/matches/accept/${reqId}`,
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
