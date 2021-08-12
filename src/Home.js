import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { ReactComponent as Image } from './img/dojo.svg';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      <div>
        <Image />
      </div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;