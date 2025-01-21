import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signinHandler = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("Erro while signing up");
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex border rounded-2xl bg-slate-200 bg-gradient-to-r p-8  space-y-5 w-[70%] justify-center shadow-lg shadow-slate-600 drop-shadow-lg">
        <div className="space-y-5">
          <div className=" flex flex-col justify-center space-y-5  text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <h3 className="text-slate-500">
              Don't have an account?
              <Link className=" underline text-blue-500" to={"/signup"}>
                {" "}
                Register
              </Link>
            </h3>
          </div>
          <div className="flex flex-col pt-4 space-y-2 w-full">
            <label className="font-semibold mb-1 text-sm block">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="rounded-md p-2 block w-full"
              value={postInputs.email}
              onChange={handleChange}
            />
            <label className="font-semibold mb-1 text-sm block">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              className="rounded-md p-2 block w-full"
              value={postInputs.password}
              onChange={handleChange}
            />
            <Button button="SignIn" onClick={signinHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};
