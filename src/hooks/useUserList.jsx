import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userListSlice";
export const useUserList = () => {
  const dispatch = useDispatch();

  const getUserList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/user/userlist",
        { withCredentials: true }
      );
      dispatch(addUsers(res?.data?.response));
    } catch (err) {
      console.log(err);
    }
  };

  return { getUserList };
};
