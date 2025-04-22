import Logo from "../molecules/Logo";
import { useLocation } from "react-router-dom";
import useNavItems from "../../hooks/useNavItems";
import BurgerMenu from "../molecules/BurgerMenu";
import useBurgerMenu from "../../hooks/useBurgerMenu";
import MobileMenu, { NavLinkClickHandler } from "../molecules/MobileMenu";
import ModeToggle from "../molecules/ModeToggle";
import Section from "../molecules/Section";


export default (): React.ReactNode => {
    const { pathname } = useLocation();
    const navItems = useNavItems(pathname);
    const { menuIconRef, menuSideBarRef, isShowMenu, isShowingHalf, forceCloseMenu } = useBurgerMenu();

    const clickMenuItem: NavLinkClickHandler = (() => {
        forceCloseMenu()
    });

    return (
        <Section id="header"
            className={'sticky end-mobile:relative w-full top-0 bg-main-accent backdrop-blur-main-accent'}>
            <div className={"flex justify-between items-center py-2 h-12"}>
                <Logo isFull={true} />
                <div className={"flex justify-between items-center gap-3 z-100"}>
                    <BurgerMenu ref={menuIconRef} isShowMenu={isShowMenu} isShowingHalf={isShowingHalf} hideOnDesktop={true} />
                    <ModeToggle />
                </div>
                <MobileMenu {...{ ref: menuSideBarRef, isShowMenu, isShowingHalf, navItems }} clickMenuItem={clickMenuItem} />
            </div>
        </Section>
    )
}