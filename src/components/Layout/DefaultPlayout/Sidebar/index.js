import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <h2>Sidebar</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/following">Following</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
