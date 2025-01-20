import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  return (
    <div>
      <div>{<Navbar />}</div>
      <div>{<Home />}</div>
    </div>
  );
};
