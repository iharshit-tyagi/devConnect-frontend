import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Feed = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getUserList();
  }, []);
  const getUserList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/user/userlist",
        { withCredentials: true }
      );

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
