import { ForwardedRef, forwardRef } from "react";
import { NavLinkProps } from "react-router-dom"
import { NavItem } from "../../hooks/useNavItems";
import MenuItem from "../atoms/MenuItem";

export type NavLinkClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;

interface MobileMenuProps extends Pick<NavLinkProps, 'onClick'> {
    isShowMenu: boolean,
    clickMenuItem: NavLinkClickHandler;
    navItems: Array<NavItem>
}

export default forwardRef<HTMLDivElement, MobileMenuProps>(
    ({ isShowMenu, navItems, clickMenuItem }: MobileMenuProps, ref: ForwardedRef<HTMLDivElement>) => {
        const maxHClass = isShowMenu ? 'max-h-[400px]' : '';
        return (
            <div className={"absolute w-full"}>
                <nav className={`bg-[#333333] max-h-[0px] overflow-hidden h-auto duration-1000 ease-in-out ${maxHClass}`
                }
                    ref={ref}>
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