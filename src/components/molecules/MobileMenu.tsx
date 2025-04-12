import {ForwardedRef, forwardRef} from "react";
import {NavItem} from "../../hooks/useNavItems";
import {NavLinkRenderProps} from "react-router-dom";
import MenuItem from "../atoms/MenuItem";

type SidebarProps = {
    isShowMenu: boolean,
    navItems: Array<NavItem>
}

const getLinkClassName = (({isActive}: NavLinkRenderProps): string => {
    return isActive ? 'font-bold' : '';
})

export default forwardRef<HTMLDivElement, SidebarProps>(
    ({isShowMenu, navItems}: SidebarProps, ref: ForwardedRef<HTMLDivElement>) => {
        const maxHClass = isShowMenu ? 'max-h-[400px]' : '';
        return (
            <div className={"absolute w-full"}>
                <nav className={`bg-[#333333] max-h-[0px] overflow-hidden h-auto duration-1000 ease-in-out ${maxHClass}`
                  }
                     ref={ref}>
                    <div className={"flex flex-col gap-2 text-xl py-2"}>
                        {
                            navItems.map(({path, label}: NavItem, index) => (
                                <MenuItem to={path} className={""} key={index}>{label}</MenuItem>
                            ))
                        }
                    </div>
                </nav>
            </div>
        )
    }
)