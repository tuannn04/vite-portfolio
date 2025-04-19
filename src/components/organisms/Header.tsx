import Logo from "../molecules/Logo";
import { useLocation } from "react-router-dom";
import useNavItems from "../../hooks/useNavItems";
import BurgerMenu from "../molecules/BurgerMenu";
import useBurgerMenu from "../../hooks/useBurgerMenu";
import MobileMenu, { NavLinkClickHandler } from "../molecules/MobileMenu";
import ModeToggle from "../molecules/ModeToggle";


export default (): React.ReactNode => {
    const { pathname } = useLocation();
    const navItems = useNavItems(pathname);
    const { menuIconRef, menuSideBarRef, isShowMenu, isShowingHalf, forceCloseMenu } = useBurgerMenu();

    const clickMenuItem: NavLinkClickHandler = (() => {
        forceCloseMenu()
    });

    return (
        <div className={'sticky md:relative w-full top-0 bg-[#0000001a] backdrop-blur-xl'}>
            <div className={"flex justify-between items-center px-main-padding py-2 h-12"}>
                <Logo isFull={true} />
                <div className={"flex justify-between items-center gap-3 z-100"}>
                    <BurgerMenu ref={menuIconRef} isShowMenu={isShowMenu} isShowingHalf={isShowingHalf} hideOnDesktop={true}/>
                    <ModeToggle />
                </div>
                <MobileMenu {...{ ref: menuSideBarRef, isShowMenu, isShowingHalf, navItems }} clickMenuItem={clickMenuItem} />
            </div>
        </div>
    )
}