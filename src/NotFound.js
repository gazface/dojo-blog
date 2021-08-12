import { Link } from "react-router-dom";
import { ReactComponent as Image } from './img/404.svg';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <div>
                <Image />
            </div>
            

            <Link to="/">Go Back...</Link>
        </div>
     );
}
 
export default NotFound;