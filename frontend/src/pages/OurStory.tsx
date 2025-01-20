import { Navbar } from "../components/Navbar";
import { Story } from "../components/Story";

export const OurStory = () => {
  return (
    <div className=" bg-slate-950 h-screen text-white">
      <Navbar />
      <div>{<Story />}</div>
    </div>
  );
};
