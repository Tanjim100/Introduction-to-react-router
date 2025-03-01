import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {

    const users = useLoaderData();
// Key Points of using "loader" and "useLoaderData() instead of "useEffect()":
// 1. Runs before rendering the component.
// 2. Used in React Router routes.
// 3. Data is fetched before component mounts.

    console.log(users);
    return (
        <div>
            <h3>Our Users {users.length}</h3>
            <p>Fantastic and vodro users</p>

            <div className="user-container">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;