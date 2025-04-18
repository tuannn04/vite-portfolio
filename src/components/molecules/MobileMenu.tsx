import { ForwardedRef, forwardRef } from "react";
import { NavItem } from "../../hooks/useNavItems";
import MenuItem from "../atoms/MenuItem";
import HyperLink from "../atoms/HyperLink";

export type NavLinkClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;

interface MobileMenuProps {
    isShowMenu: boolean,
    clickMenuItem?: NavLinkClickHandler;
    navItems: Array<NavItem>
}

export default forwardRef<HTMLDivElement, MobileMenuProps>(
    ({ isShowMenu, navItems, clickMenuItem }: MobileMenuProps, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <div className={`fixed top-0 left-0 w-full bg-light dark:bg-black ${isShowMenu ? 'h-screen' : 'h-0'}`}>
                <nav ref={ref} className={`transition-opacity ease-in-out duration-300 opacity-0  h-full  ${isShowMenu ? 'opacity-100' : ''}`}>
                    <div className={`flex-col gap-4 text-xl h-full justify-center items-center ${isShowMenu ? 'flex' : 'hidden'}  `}>
                        {
                            navItems.map(({ path, label }: NavItem, index) => {
                                const isSection = (path.toString().startsWith('#'));
                                return (
                                    isSection ? (
                                        <HyperLink key={index} href={path} className={"text-3xl"} onClick={clickMenuItem}>
                                            {label}
                                        </HyperLink>
                                    ) : (
                                        <MenuItem key={index} to={path} className={"text-3xl"} onClick={clickMenuItem}>
                                            {label}
                                        </MenuItem>
                                    )
                                )
                            })
                        }
                    </div>
                </nav>
            </div>
        )
    }
)