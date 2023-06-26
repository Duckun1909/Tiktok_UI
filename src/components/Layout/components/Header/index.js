import { HeaderModule } from '~/components/Style/CssModule';


function Header() {
    const cx = HeaderModule()
    return <header className={cx("wrapper")} >Header</header>;
}

export default Header;
