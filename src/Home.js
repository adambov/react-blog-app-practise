import { useState, useEffect } from "react";
import Bloglist from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
}

useEffect(() => {
    fetch('http://localhost:3500/blogs')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setBlogs(data);
        })
}, []);

    return (
        <div className="home">
           {blogs && <Bloglist blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home;