import Logo from "../molecules/Logo";
import DesktopMenu from "../molecules/DesktopMenu";
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
            <div className={"flex justify-between items-center px-main-padding py-2 h-12"}>
                <Logo isBlack={false} isFull={true}/>
                <DesktopMenu navItems={navItems}/>
                <div className={"sm:hidden z-[100]"}>
                    <BurgerMenu ref={menuIconRef} isShowMenu={isShowMenu} isShowingHalf={isShowingHalf}/>
                </div>
                <MobileMenu {...{ref: menuSideBarRef, isShowMenu, isShowingHalf, navItems}} clickMenuItem={clickMenuItem}/>
            </div>
        </div>
    )
}