import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userListSlice";
import { addUser } from "../utils/userSlice";
const Feed = () => {
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getUserList();
    getSignedInUser();
  }, []);
  const getSignedInUser = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/user/view", {
        withCredentials: true,
      });
      dispatch(addUser(res?.data?.response));
      // setUserList(res?.data?.response);
    } catch (err) {
      console.log(err);
    }
  };
  const getUserList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/user/userlist",
        { withCredentials: true }
      );
      dispatch(addUsers(res?.data?.response));
      setUserList(res?.data?.response);
    } catch (err) {
      console.log(err);
    }
  };
  return userList.length === 0 ? (
    <div> No users</div>
  ) : (
    <div>Users are there</div>
  );
};

export default Feed;
