import React, { useState } from "react";
import { UseLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("Abhi");
  const [username, setUsername] = useState("Abhi");
  const { handleLogin, errMessage } = UseLogin();
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLoginClick = async () => {
    await handleLogin(username, password);
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-5rem)] bg-base-200">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl justify-center mb-4">Login</h2>

          <label className="input input-bordered flex items-center gap-2 mb-3">
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
              placeholder="Username or Email"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-3">
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
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </label>

          {errMessage && (
            <p className="text-red-400 mt-2 text-sm">{errMessage}</p>
          )}

          <div className="card-actions justify-center mt-4">
            <button
              className="btn btn-primary w-full"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>

          <div className="divider text-xs text-gray-400">OR</div>

          <div className="card-actions justify-center">
            <button
              className="btn btn-outline w-full"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
