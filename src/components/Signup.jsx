import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e?.target?.value);
  };
  const hanldePasswordChange = (e) => {
    setPassword(e?.target?.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e?.target?.value);
  };

  const hanldeLoginClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          username,
          password,
          email,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      navigate("/feed");
      setErrorMessage("");
    } catch (err) {
      console.log(err);
      setErrorMessage(err?.response?.data?.message);
    }
  };
  return (
    <div className=" flex justify-center my-4">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Sign up</h2>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
            </label>
            <label className="  mt-2 input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </label>
            <label className="  mt-2 input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                value={password}
                onChange={hanldePasswordChange}
              />
            </label>
          </div>
          {errMessage && <p className="text-red-400 mt-3">{errMessage}</p>}
          <div className="card-actions justify-center mt-3">
            <button className="btn btn-primary" onClick={hanldeLoginClick}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
