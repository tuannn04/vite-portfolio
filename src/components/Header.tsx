import Logo from "./header/Logo";
import Nav from "./header/Nav";
import {useLocation} from "react-router-dom";
import useNavItems from "../hooks/useNavItems";
import BurgerMenu from "./header/BurgerMenu.tsx";
import useNavMobile from "../hooks/useNavMobile.ts";
import Sidebar from "./header/Sidebar.tsx";


export default () => {
    const {pathname} = useLocation();
    const navItems = useNavItems(pathname);
    const {menuIconRef, menuSideBarRef, isShowMenu} = useNavMobile();

    return (
        <div className={'header sticky top-0 w-full bg-[#333333]'}>
            <div className={"flex justify-between"}>
                <Logo/>
                <Nav navItems={navItems}/>
                <BurgerMenu ref={menuIconRef}/>
            </div>
            <Sidebar {...{ref: menuSideBarRef, isShowMenu, navItems}}/>
        </div>
    )
}