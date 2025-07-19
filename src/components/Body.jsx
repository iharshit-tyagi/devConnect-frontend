import { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useGetSignedInUser } from "../hooks/useGetSignedInUser";

const Body = () => {
  const { getUser } = useGetSignedInUser();

  useEffect(() => {
    getUser(); // only runs once on load
  }, []);
  return (
    <div>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Body;
