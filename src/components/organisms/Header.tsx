import Logo from "../header/Logo.tsx";
import DesktopMenu from "../molecules/DesktopMenu.tsx";
import {useLocation} from "react-router-dom";
import useNavItems from "../../hooks/useNavItems";
import BurgerMenu from "../molecules/BurgerMenu";
import useBurgerMenu from "../../hooks/useBurgerMenu";
import MobileMenu, { NavLinkClickHandler } from "../molecules/MobileMenu";


export default (): React.ReactNode => {
    const {pathname} = useLocation();
    const navItems = useNavItems(pathname);
    const {menuIconRef, menuSideBarRef, isShowMenu, isShowingHalf, forceCloseMenu} = useBurgerMenu();

    const clickMenuItem: NavLinkClickHandler = (() => {
        forceCloseMenu()
    })

    return (
        <div className={'sticky w-full top-0 bg-[#0000001a] backdrop-blur-xl'}>
            <div className={"flex justify-between px-main-padding py-2"}>
                <Logo/>
                <DesktopMenu navItems={navItems}/>
                <BurgerMenu ref={menuIconRef} isShowMenu={isShowMenu} isShowingHalf={isShowingHalf}/>
            </div>
            <MobileMenu {...{ref: menuSideBarRef, isShowMenu, isShowingHalf, navItems}} clickMenuItem={clickMenuItem}/>
        </div>
    )
}