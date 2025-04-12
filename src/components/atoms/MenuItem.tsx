import { NavLink, NavLinkProps } from "react-router-dom"

export default ({to, className, children}: NavLinkProps) => {
    return (
        <p className={'text-center'}>
            <NavLink to={to} className={className}>
                {children}
            </NavLink>
        </p>
    )
}