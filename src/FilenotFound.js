import {Link} from 'react-router-dom'
const FileNotFound = () => {
    return ( <div className="container">
        <h2>Sorry</h2>
        <p>That page content cannot be found </p>
        <Link to="/">Go back to Home page</Link>

    </div> );
}
 
export default FileNotFound;