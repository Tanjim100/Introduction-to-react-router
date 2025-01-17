import { Link, useNavigate } from 'react-router-dom';
import '../User/User.css'

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate(`/posts/${id}`);
    }
    return (
        <div className="user-border">
            <h3>Id of Post: {id}</h3>
            <p>Title: {title}</p>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>

            <button onClick={handleClickButton}>Click Button</button>
        </div>
    );
};

export default Post;