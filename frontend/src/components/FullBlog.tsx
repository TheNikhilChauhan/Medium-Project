import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";
import { CreateBlog } from "./CreateBlog";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <CreateBlog />
      <div className="grid grid-cols-3 px-10 w-full pt-2">
        <div className="bg-red-200 col-span-2">
          <div className="text-6xl font-extrabold mb-12">{blog.title}</div>
          <div className="mb-8">Posted on 10 feb 2020</div>
          <div>{blog.content}</div>
        </div>
        <div className="w-full ml-4 p-2">
          Author
          <div className="flex">
            <div className="pr-2 flex flex-col justify-center">
              <Avatar size="small" name={blog.author.name || "Anonymous"} />
            </div>

            <div>
              <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
              </div>
              <div className="pt-2 text-slate-500">
                Some random Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Voluptatem voluptates quisquam saepe nemo libero, tempora
                eaque nam doloremque autem dicta beatae quas officia ab
                voluptatum porro vel architecto suscipit esse.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
