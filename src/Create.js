import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [ispending , setIspending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
            e.preventDefault();
            const doc = {
                title, body, author
            }
            fetch('http://localhost:8000/post', {
                method:'POST',
                body: JSON.stringify(doc),
                headers:{'Content-Type':'application/json'}
            }).then(()=> console.log('data have been send'))
            // window.location.replace('/');
            history.push('/');
    }

    return (
        <div className="Create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog-Title</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label >Blog Content</label>
                <textarea required
                    value={body}
                    required
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <input type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {! ispending&&<button>Add Blog</button>}
                { ispending&&<button disabled>Adding Blog...</button>}

            </form>


        </div>
    );
}

export default Create;

