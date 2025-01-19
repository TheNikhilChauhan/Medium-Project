import { Link } from "react-router-dom";
import { Inputs } from "./Inputs";
import { Button } from "./Button";

export const Register = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex border rounded-2xl bg-slate-200 bg-gradient-to-r p-8  space-y-5 w-[70%] justify-center shadow-lg shadow-slate-600 drop-shadow-lg">
        <div className="space-y-5">
          <div className=" flex flex-col justify-center space-y-5  text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <h3 className="text-slate-500">
              Already have an account?
              <Link className=" underline text-blue-500" to={"/signup"}>
                {" "}
                Login
              </Link>
            </h3>
          </div>
          <div className="flex flex-col pt-4 space-y-6 w-full">
            <Inputs label="Name" placeholder="Enter name" />
            <Inputs label="Email" placeholder="Enter Email" />
            <Inputs label="Password" placeholder="Enter Password" />
          </div>
          <Button button="SignUp" />
        </div>
      </div>
    </div>
  );
};
