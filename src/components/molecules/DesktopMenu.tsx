import {NavItem} from "../../hooks/useNavItems";
import {useMemo} from "react";
import MenuItem from "../atoms/MenuItem";
import { NavLinkRenderProps } from "react-router-dom";

type NavProps = {
    navItems: Array<NavItem>
}

const getLinkClassName = (({isActive}: NavLinkRenderProps): string => {
    return isActive ? 'font-bold' : '';
})

export default ({navItems}: NavProps) => useMemo<React.JSX.Element>(() => {
    return (
        <div className={"hidden sm:flex justify-between"}>
            <nav className={'flex flex-row gap-4 justify-end'}>
                {
                    navItems.map(({path, label}: NavItem, index) => (
                        <MenuItem to={path} className={getLinkClassName} key={index}>{label}</MenuItem>
                    ))
                }
            </nav>
        </div>
    )
}, [navItems])