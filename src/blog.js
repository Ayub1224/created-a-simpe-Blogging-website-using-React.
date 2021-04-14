import {Link} from 'react-router-dom'
import { BsPen } from 'react-icons/bs'

const BlogsList = ({ aa, title }) => {        
    return (
        <div className="bloglist">
            <br /><h2>{title}</h2>
            {aa.map((blog) => (            
                <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body.slice(0, 150)}</p>
                    <Link to={`/blog/${blog.id}`}>
                        <p><BsPen/> written by  {blog.author}. read more...</p>

                    </Link>
                </div>
            ))}         
        </div>
    );
}

export default BlogsList;