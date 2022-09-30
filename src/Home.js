import { useState, useEffect } from "react";
import Bloglist from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum...', author: 'nasko', id: 2},
        {title: 'Web dev tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ]);

const [name, setName] = useState('mario');

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
        })
}, []);

    return (
        <div className="home">
           <Bloglist  blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;