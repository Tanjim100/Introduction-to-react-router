import { useRouteError, Link } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    const {status, statusText} = error;
    return (
        <div>
            <h1>OOPS !!!</h1>
            <p>{statusText || error.message}</p>
            {
                status === 404 && <div>
                        <h3>Page is not Found</h3>
                        <Link to="/"><button>Home</button></Link>
                    </div>
            }
        </div>
    );
};

export default ErrorPage;