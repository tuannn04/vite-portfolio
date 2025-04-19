import {useMemo} from "react";

export type NavItem = {
    path: string,
    label: string
    isActive?: boolean
}

const baseNavItems: Array<NavItem> = [
    {
        path: '#home',
        label: 'Home'
    },
    {
        path: '#about',
        label: 'About me'
    },
    {
        path: '#work',
        label: 'Work'
    },
    {
        path: '/about',
        label: 'About'
    }
];

function getNavItemsByPath(path?: string) {
    let navItems = baseNavItems;
    if (path && path !== '/') {
        navItems[0].path = '/';
    }
    return navItems;
}

export default (currentPath: string) => {
    return useMemo<Array<NavItem>>(() => {
        return getNavItemsByPath(currentPath).map(item => {
            item.isActive = item.path === currentPath;
            return item;
        })
    }, [currentPath, baseNavItems]);
}