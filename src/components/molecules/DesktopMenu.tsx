import { NavItem } from "../../hooks/useNavItems";
import { useMemo } from "react";
import MenuItem from "../atoms/MenuItem";
import HyperLink from "../atoms/HyperLink";
import { cn } from "../../lib/utils";

interface DesktopMenuItemProps extends NavItem {
    className?: string
}

function DesktopMenuItem({ path, label, className }: DesktopMenuItemProps) {
    const isSection = (path.toString().startsWith('#'));
    const itemClassName = 'uppercase mx-4 tracking-[0.125rem] my-2 text-sm';
    return (
        <>
            {
                isSection ?
                    <HyperLink href={path} className={cn(itemClassName, className)}>{label}</HyperLink> :
                    <MenuItem to={path} className={cn(itemClassName, className)}>{label}</MenuItem>
            }
        </>
    )
}

function DesktopMenuItemWithDivider(props: DesktopMenuItemProps) {
    return (
        <>
            <DesktopMenuItem {...props} />
            <div className="bg-[#0000001a] dark:bg-[#ffffff1a] w-[1px] h-6"></div>
        </>
    )
}

interface DesktopMenuProps {
    navItems: Array<NavItem>
}

export default ({ navItems }: DesktopMenuProps) => useMemo<React.JSX.Element>(() => {
    const lastIndex = navItems.length - 1;
    return (
        <div className={"hidden md:flex items-center justify-center sticky top-10"}>
            <nav className={'flex flex-row gap-4 items-center bg-[#f4f4f4e9] backdrop-blur-xs dark:bg-[#0000000a] dark:backdrop-blur-xl p-3 rounded-full border-[1px]'}>
                {
                    navItems.map(({ path, label }: NavItem, index) => {
                        const isFirst = index === 0;
                        const isLast = index === lastIndex;
                        return (
                            isLast ?
                                <DesktopMenuItem key={index} path={path} label={label} className={"mr-8"} /> :
                                <DesktopMenuItemWithDivider key={index} path={path} label={label} className={isFirst ? "ml-8" : ""}/>
                        )
                    })
                }
            </nav>
        </div>
    )
}, [navItems])