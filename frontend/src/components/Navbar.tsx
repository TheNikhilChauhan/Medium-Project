import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-4 bg-zinc-950 text-white  font-semibold">
      <div
        className="text-2xl cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Medium
      </div>
      <div>
        <ul className="flex gap-5 text-md cursor-pointer pr-5">
          <li
            onClick={() => {
              navigate("/story");
            }}
          >
            Our Story
          </li>
          <li>Write</li>
          <li
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </li>
          <li
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </li>
        </ul>
      </div>
    </div>
  );
};
