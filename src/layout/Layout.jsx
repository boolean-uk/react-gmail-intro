import MainNavigation from "../layout/MainNavigation";
import SideMenu from "../layout/SideMenu";

const Layout = (props) => {
    return (
        <>
            <MainNavigation />
            <SideMenu />
            <main className="email-view">{props.children}</main>
        </>
    );
};

export default Layout;
