import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../utils/userListSlice";
export const useUserList = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user);
  const getUserList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/user/userlist",
        { withCredentials: true }
      );
      const userList = res?.data?.response;
      const feedUsers = userList.filter((user) => {
        return user?.id != loggedInUser?.id;
      });

      dispatch(addUsers(feedUsers));
    } catch (err) {
      console.log(err);
    }
  };

  return { getUserList };
};
