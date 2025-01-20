import { Link } from "react-router-dom";
import { Inputs } from "./Inputs";
import { Button } from "./Button";

export const Login = () => {
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
          <div className="flex flex-col pt-4 space-y-6 w-full">
            <Inputs label="Email" placeholder="Enter Email" />
            <Inputs label="Password" placeholder="Enter Password" />
          </div>
          <Button button="SignIn" />
        </div>
      </div>
    </div>
  );
};
