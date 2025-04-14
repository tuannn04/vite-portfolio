import { NavLink, NavLinkProps } from "react-router-dom"

export default ({children, ...rest}: NavLinkProps) => {
    return (
        <p className={'text-center'}>
            <NavLink {...rest}>
                {children}
            </NavLink>
        </p>
    )
}