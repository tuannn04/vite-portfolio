import { NavLink, NavLinkProps } from "react-router-dom"

export default ({children, ...rest}: NavLinkProps) => {
    return (
        <NavLink {...rest}>
            {children}
        </NavLink>
    )
}