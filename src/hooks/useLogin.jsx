import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
export const UseLogin = () => {
  const [errMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (username, password) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/signin",
        {
          username,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("After axios call");

      console.log(res?.data?.response);

      dispatch(addUser(res?.data?.response));
      navigate("/feed");
      // setErrorMessage('');
    } catch (err) {
      console.log(err);
      setErrorMessage(err?.response?.data?.message);
    }
  };
  return { handleLogin, errMessage };
};
