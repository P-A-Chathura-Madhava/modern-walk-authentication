import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import { loginUser } from "../feature/users/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const login = (e: any) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  const userState = useAppSelector((state) => state.user);
  // console.log(userState.isError);

  useEffect(() => {
    if (userState.isSuccess) {
      console.log("Logged In");
      setTimeout(() => {
        navigate("/home");
      }, 300);
    } else {
      console.log("Unauthorized");
    }
  }, [userState]);

  // useEffect(() => {
  //   if (userState.user !== null && userState.isError === false) {
  //     navigate("/home");
  //   }
  // }, [userState]);

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="py-2 mt-2 mb-10 text-2xl font-bold">Login</h1>
      <input
        className="w-[400px] p-2 border-2 rounded-md border-slate-500"
        placeholder="example@gmial.com"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="p-2 border-2 rounded-md border-slate-500 w-[400px]"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="px-6 py-2 font-bold text-white bg-blue-600 border-2 rounded-md cursor-pointer border-slate-500 hover:bg-blue-500"
        onClick={login}
      >
        Login
      </button>
      <div className="flex flex-col items-center p-6 mt-4 border border-slate-500 bg-slate-300 rounded-xl">
        <h4 className="font-bold">Sample User Credentials</h4>
        <p>username: johnd</p>
        <p>password: m38rmF$</p>
      </div>
    </div>
  );
}

export default Login;
