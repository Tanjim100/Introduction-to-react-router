import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import '../Users/Users.css'

const Posts = () => {

    const posts = useLoaderData();

    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            <div className="user-container">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
            
        </div>
    );
};

export default Posts;