import {ForwardedRef, forwardRef, useMemo} from "react";
import {NavItem} from "../../../hooks/useNavItems.ts";
import {NavLink} from "react-router";
import {NavLinkRenderProps} from "react-router-dom";

type SidebarProps = {
    isShowMenu: boolean,
    navItems: Array<NavItem>
}

const getNavClassName = (({isActive}: NavLinkRenderProps): string => {
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
                    <div>
                        {
                            navItems.map(({path, label}: NavItem, index) => (
                                <p className={'ml-5 mr-5 pb-4 text-center'} key={index}>
                                    <NavLink to={path} className={getNavClassName}>
                                        {label}
                                    </NavLink>
                                </p>
                            ))
                        }
                    </div>
                </nav>
            </div>
        )
    }
)