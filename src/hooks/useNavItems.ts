import {useMemo} from "react";

export type NavItem = {
    path: string,
    label: string
    isActive?: boolean
}

const baseNavItems: Array<NavItem> = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/about',
        label: 'About'
    },
];

export default (currentPath) => {
    return useMemo<Array<NavItem>>(() => {
        return baseNavItems.map(item => {
            item.isActive = item.path === currentPath;
            return item;
        })
    }, [currentPath, baseNavItems]);
}