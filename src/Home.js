import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import './index.css';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);


// Dependency array
    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlogs(data);
            setIsPending(false);
        })
        },);
    }, [])

    return ( 
        <div className="home">
            { isPending && <div><img className="preloader" src="https://cdn.dribbble.com/users/1857592/screenshots/4238199/dribbble.gif" alt="" /></div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;