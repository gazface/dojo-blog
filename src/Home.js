import { useState } from "react";
import BlogList from "./BlogList";
import image from "../src/img/Bloggers and influencers writing articles.jpg";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

      const handleDelete = (id) => {
          const newBlogs = blogs.filter(blog => blog.id !== id);
          setBlogs(newBlogs);
      }

    return ( 
        <div className="home">
            <div className="div heroImage">
        <img src={image} height={500} width={750}/>
      </div>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;