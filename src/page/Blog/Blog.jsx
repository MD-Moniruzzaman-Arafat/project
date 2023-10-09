import { useLoaderData } from "react-router-dom";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {

    const blogData = useLoaderData();


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ">
            {
                blogData.map((singleData, idx) => <SingleBlog key={idx} singleData={singleData}></SingleBlog>)
            }
        </div>
    );
};

export default Blog;