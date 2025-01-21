import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { CreateBlog } from "../components/CreateBlog";
import { useBlog } from "../hooks";

export const Blog = () => {
  const { id } = useParams();
  console.log(id);

  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog) {
    return (
      <div>
        <CreateBlog />

        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
