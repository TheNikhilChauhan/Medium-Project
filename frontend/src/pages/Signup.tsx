import { Navbar } from "../components/Navbar";
import { Quote } from "../components/Quote";
import { Register } from "../components/Register";

export const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Register />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};
