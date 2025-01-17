import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className='user-border'>
            <h4>{name}</h4>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};

export default User;