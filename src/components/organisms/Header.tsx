import Logo from "../header/Logo.tsx";
import DesktopMenu from "../molecules/DesktopMenu.tsx";
import {useLocation} from "react-router-dom";
import useNavItems from "../../hooks/useNavItems";
import BurgerMenu from "../molecules/BurgerMenu";
import useBurgerMenu from "../../hooks/useBurgerMenu";
import MobileMenu from "../molecules/MobileMenu";


export default () => {
    const animationDuration = 300;
    const {pathname} = useLocation();
    const navItems = useNavItems(pathname);
    const {menuIconRef, menuSideBarRef, isShowMenu, isShowingHalf} = useBurgerMenu(animationDuration);

    return (
        <div className={'sticky w-full top-0 bg-[#0000001a] backdrop-blur-xl'}>
            <div className={"flex justify-between px-main-padding py-2"}>
                <Logo/>
                <DesktopMenu navItems={navItems}/>
                <BurgerMenu ref={menuIconRef} isShowMenu={isShowMenu} isShowingHalf={isShowingHalf} animationDuration={animationDuration}/>
            </div>
            <MobileMenu {...{ref: menuSideBarRef, isShowMenu, isShowingHalf, navItems}}/>
        </div>
    )
}