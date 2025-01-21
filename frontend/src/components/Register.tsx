import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Register = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      alert("Error while signing up");
      console.log(e);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex border rounded-2xl bg-slate-200 bg-gradient-to-r p-8  space-y-5 w-[70%] justify-center shadow-lg shadow-slate-600 drop-shadow-lg">
        <div className="space-y-5">
          <div className=" flex flex-col justify-center space-y-5  text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <h3 className="text-slate-500">
              Already have an account?
              <Link className=" underline text-blue-500" to={"/signin"}>
                {" "}
                Login
              </Link>
            </h3>
          </div>
          <div className="flex flex-col pt-4 space-y-2 w-full">
            <label className="font-semibold mb-1 text-sm block">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="rounded-md p-2 block w-full"
              value={postInputs.name}
              onChange={handleChange}
            />
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
          </div>
          <Button button="SignUp" onClick={sendRequest} />
        </div>
      </div>
    </div>
  );
};
