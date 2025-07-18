import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMatches } from "../utils/matchesSlice";

export const useMatchList = () => {
  const dispatch = useDispatch();

  const getMatchList = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/matches/", {
        withCredentials: true,
      });

      const matches = res?.data?.data;
      dispatch(setMatches(matches));
    } catch (err) {
      console.error("Error fetching matches:", err);
    }
  };

  return { getMatchList };
};
