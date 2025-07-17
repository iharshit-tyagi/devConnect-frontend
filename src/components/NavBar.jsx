import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
const NavBar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/logout",
        {},
        { withCredentials: true }
      );
      navigate("/");
      dispatch(removeUser());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to={"/feed"}>
          Dev Connect
        </Link>
      </div>
      <div className="flex-none gap-2">
        {user ? <p>Welcome {user?.firstName} </p> : ""}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Profile Pic"
                src={
                  user
                    ? user?.avatar_url
                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to={"/matches"}>Matches</Link>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
