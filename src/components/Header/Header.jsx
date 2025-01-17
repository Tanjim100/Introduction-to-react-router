import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h2>NavBar</h2>
            <ul>
                <NavLink to="/">Home</NavLink>
                
                <NavLink to = "/user">Users   </NavLink>
                <NavLink to = "/posts">Posts </NavLink>
                <NavLink to="/about">About Us </NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </nav>
    );
};

export default Header;