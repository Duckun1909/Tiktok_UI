import { Link } from 'react-router-dom';
import { SidebarModule } from '~/components/Style/CssModule';

function Sidebar() {
    const cx = SidebarModule()

    return (
        <aside className={cx("wrapper")}>
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
        </aside>
    );
}

export default Sidebar;
