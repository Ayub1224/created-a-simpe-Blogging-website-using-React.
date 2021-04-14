import BlogsList from "./blog";
import useFatch from "./useFatch";

const Home = () => {

    const { data, loading, error } = useFatch('http://localhost:8000/post');            


    return (
        <div className="home container">
            {  error && <div>{error}</div>}
            { loading && <div>Loading.... </div>}
            { data && <BlogsList aa={data } title='All Blogs' />}

        </div>
    );

}

export default Home;
