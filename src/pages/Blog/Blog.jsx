import { useLoaderData } from "react-router-dom";
import Navbar from "../../sheard/Navbar/Navbar";
import BlogCard from "../../component/BlogCard/BlogCard";


const Blog = () => {

    const blogs = useLoaderData();
    console.log(blogs);
    return (
        <div>
           <Navbar></Navbar>
           <h2 className=" text-4xl font-bold text-center mt-10">Health Events Blog</h2>
           <div className=" grid lg:grid-cols-3 gap-2">
           {
                blogs?.map(blog => <BlogCard key={blog.id} blogs={blog}></BlogCard>)
           } 
           </div>
        </div>
    );
};

export default Blog;