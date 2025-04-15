import { ForwardedRef, forwardRef } from "react";
import { NavItem } from "../../hooks/useNavItems";
import MenuItem from "../atoms/MenuItem";

export type NavLinkClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;

interface MobileMenuProps {
    isShowMenu: boolean,
    clickMenuItem?: NavLinkClickHandler;
    navItems: Array<NavItem>
}

export default forwardRef<HTMLDivElement, MobileMenuProps>(
    ({ isShowMenu, navItems, clickMenuItem }: MobileMenuProps, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <div className={`fixed top-0 left-0 w-full bg-[#000000] ${isShowMenu ? '' : 'hidden'}`}>
                <nav ref={ref}>
                    <div className={"flex flex-col gap-2 text-xl py-2"}>
                        {
                            navItems.map(({ path, label }: NavItem, index) => (
                                <MenuItem to={path} className={""} key={index} onClick={clickMenuItem}>{label}</MenuItem>
                            ))
                        }
                    </div>
                </nav>
            </div>
        )
    }
)