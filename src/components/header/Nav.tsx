import {NavLink} from "react-router";
import {NavItem} from "../../hooks/useNavItems.ts";
import {useMemo} from "react";
import Logo from "./Logo.tsx";

type NavProps = {
    navItems: Array<NavItem>
}
export default ({navItems}: NavProps) => useMemo<React.JSX.Element>(() => {
    return (
        <div className={"hidden sm:flex justify-between"}>
            <nav className={'flex justify-end'}>
                {
                    navItems.map(({path, label, isActive}: NavItem, index) => (
                        <p className={'ml-5 pb-2' + (isActive ? ' font-bold' : '')} key={index}>
                            <NavLink to={path}>
                                {label}
                            </NavLink>
                        </p>

                    ))
                }
            </nav>
        </div>
    )
}, [navItems])