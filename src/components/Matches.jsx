import { useEffect } from "react";
import { useGetSignedInUser } from "../hooks/useGetSignedInUser";
const Matches = () => {
  const { getUser } = useGetSignedInUser();
  useEffect(() => {
    // getUser();
  }, []);
  return <div>Matches</div>;
};

export default Matches;
