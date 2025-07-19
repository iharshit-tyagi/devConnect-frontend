import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { addUser } from "../utils/userSlice";

export const useGetSignedInUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const getUser = async () => {
    try {
      //   if (user) {
      //     return;

      //   }
      const res = await axios.get("http://localhost:3000/api/v1/user/view", {
        withCredentials: true,
      });

      if (res.status === 200) {
        dispatch(addUser(res.data?.data));
        // Navigate to /feed ONLY if current path is /
        if (location.pathname === "/") {
          navigate("/feed");
        }
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log("Error fetching user:", err);
      navigate("/");
    }
  };

  return { getUser };
};
