import Header from '../components/Header';
import Sidebar from './Sidebar';
import { ContainerModule } from '~/components/Style/CssModule';

function DefaultLayout({ children }) {
    const cx = ContainerModule()
    return (
        <div>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
