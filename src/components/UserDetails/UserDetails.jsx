import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h3>Details about User: {name}</h3>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;