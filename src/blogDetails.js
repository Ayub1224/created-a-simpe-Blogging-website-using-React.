import { useHistory, useParams } from "react-router-dom";
import useFatch from "./useFatch";


const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();

    const deleteFile = (e)=>{
        e.preventDefault();
        fetch('http://localhost:8000/Post/'+ id,{
            method:"DELETE"
        }).then(()=>{
            history.push('/');

        })

        // window.location.replace('/');


    }

    const { data, loading, error } = useFatch('http://localhost:8000/Post/' + id);

    return (
        <div className="Blog-details">
            {error && <div>{error}</div>}
            {loading && <div>loading...</div>}
            {data && (<article>
                <h2>{data.title}</h2>
                <p>Written by {data.author}</p>
                <p>{data.body}</p>
            </article>)}
            <button onClick={deleteFile}>Delete</button>
        </div> 
    );
}

export default BlogDetails;
