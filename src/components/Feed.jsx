import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useUserList } from "../hooks/useUserList";
import { useNavigate } from "react-router-dom";
const Feed = () => {
  const dispatch = useDispatch();
  const { getUserList } = useUserList();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);

  useEffect(() => {
    getUserList();
    getSignedInUser();
  }, []);
  const getSignedInUser = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/user/view", {
        withCredentials: true,
      });

      if (res.status == 200) {
        dispatch(addUser(res?.data));
      } else {
        navigate("/");
      }
      // setUserList(res?.data?.response);
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };
  return !userList ? (
    <div> No users</div>
  ) : (
    <div>
      <div>
        {userList?.map((ele) => {
          return <p key={ele?.id}>{ele.firstName}</p>;
        })}
      </div>
    </div>
  );
};

export default Feed;
