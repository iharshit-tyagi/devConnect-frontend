import React, { useState } from "react";
import { UseLogin } from "../hooks/useLogin";
const Login = () => {
  const [password, setPassword] = useState("Abhi");
  const [username, setUsername] = useState("Abhi");
  // const [errMessage,setErrorMessage]=useState('');
  const { handleLogin, errMessage } = UseLogin();

  const handleUsernameChange = (e) => {
    setUsername(e?.target?.value);
  };
  const hanldePasswordChange = (e) => {
    setPassword(e?.target?.value);
  };

  const hanldeLoginClick = async () => {
    await handleLogin(username, password);
  };

  //make api call here

  return (
    <div className=" flex justify-center my-4">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
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
                placeholder="Username or Email"
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
                value={password}
                placeholder="Password"
                onChange={hanldePasswordChange}
              />
            </label>
            {errMessage && <p className="text-red-400 mt-3">{errMessage}</p>}
          </div>
          <div className="card-actions justify-center mt-3">
            <button className="btn btn-primary" onClick={hanldeLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
