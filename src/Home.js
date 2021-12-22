import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () =>{
    const [blogs,setBlogs]=useState([
        {title: 'My website!', body:'lorem ipsum..', author:'misra', id:1},
        {title: 'Happy Christmas!', body:'lorem ipsum..', author:'oylum', id:2},
        {title: 'Hello World!', body:'lorem ipsum..', author:'misra', id:3}
    ]);

const handleDelete=(id)=>{
    const newBlogs=blogs.filter(blog=>blog.id !==id);
    setBlogs(newBlogs);
}
return(
    <div className="Home">
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
    </div>
);

}
export default Home;