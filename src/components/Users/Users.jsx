import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {

    const users = useLoaderData();
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