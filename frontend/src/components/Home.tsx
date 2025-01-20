import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1683211783920-8c66ab120c09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div>
        <h1 className="text-red-500 font-sans font-bold text-9xl p-14 pt-48">
          Human
          <br />
          stories & ideas
        </h1>
        <p className="text-black font-sans font-bold text-2xl pl-40">
          A place to read, write, and deepen your understanding
        </p>
      </div>
      <div className="flex justify-start pt-5 pl-44">
        <button
          type="submit"
          className="text-white bg-slate-800 p-4 rounded-full font-semibold hover:bg-black flex justify-center"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Start Reading
        </button>
      </div>
    </div>
  );
};
