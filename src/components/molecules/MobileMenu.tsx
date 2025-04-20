import { ForwardedRef, forwardRef } from "react";
import { NavItem } from "../../hooks/useNavItems";
import MenuItem from "../atoms/MenuItem";
import HyperLink from "../atoms/HyperLink";
import { cn } from "../../lib/utils";

export type NavLinkClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => void;

interface MobileMenuItemProps extends NavItem {
    className?: string,
    onClick?: NavLinkClickHandler
}

function MobileMenuItem({ path, label, className, onClick }: MobileMenuItemProps) {
    const isSection = (path.toString().startsWith('#'));
    const itemClassName = 'text-[2rem] capitalize';
    return (
        <>
            {
                isSection ?
                    <HyperLink href={path} className={cn(itemClassName, className)} onClick={onClick}>{label}</HyperLink> :
                    <MenuItem to={path} className={cn(itemClassName, className)} onClick={onClick}>{label}</MenuItem>
            }
        </>
    )
}

interface MobileMenuProps {
    isShowMenu: boolean,
    clickMenuItem?: NavLinkClickHandler;
    navItems: Array<NavItem>
}

export default forwardRef<HTMLDivElement, MobileMenuProps>(
    ({ isShowMenu, navItems, clickMenuItem }: MobileMenuProps, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <div className={`fixed end-mobile:hidden top-0 left-0 w-full bg-main dark:bg-black ${isShowMenu ? 'h-screen' : 'h-0'}`}>
                <nav ref={ref} className={`transition-opacity ease-in-out duration-300 opacity-0  h-full  ${isShowMenu ? 'opacity-100' : ''}`}>
                    <div className={`flex-col gap-4 text-xl h-full justify-center items-center ${isShowMenu ? 'flex' : 'hidden'}  `}>
                        {
                            navItems.map((props: NavItem, index) => {
                                return <MobileMenuItem key={index} {...props} onClick={clickMenuItem}></MobileMenuItem>
                            })
                        }
                    </div>
                </nav>
            </div>
        )
    }
)