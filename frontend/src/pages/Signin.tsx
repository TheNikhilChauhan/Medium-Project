import { Quote } from "../components/Quote";
import { Login } from "../components/Login";
import { Navbar } from "../components/Navbar";

export const Signin = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Login />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};
