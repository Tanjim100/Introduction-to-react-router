import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const user = useLoaderData();
    const navigate = useNavigate();
    const params = useParams();

    console.log(params);

    const {id, title, body} = user;
    const handleGoBack = () => {
        navigate(-1);   // for go back 
    }

    return (
        <div>
            <h3>Post Details about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;