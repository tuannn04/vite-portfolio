import {useCallback, useRef, useState} from "react";
import {useEventListener} from "usehooks-ts";

export default () => {
    const menuIconRef = useRef<HTMLDivElement | null>(null);
    const menuSideBarRef = useRef<HTMLDivElement | null>(null);
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

    const showMenu = useCallback(() => {
        setIsShowMenu(isShow => !isShow);
    }, [setIsShowMenu]);

    const closeMenu = useCallback((event: Event) => {
        if (isShowMenu &&
            !menuIconRef.current?.contains(event.target) &&
            !menuSideBarRef.current?.contains(event.target)
        ) {
            setIsShowMenu(false);
        }
    }, [isShowMenu, menuSideBarRef, setIsShowMenu]);

    useEventListener('click', showMenu, menuIconRef);
    useEventListener('click', closeMenu);

    return {menuIconRef, menuSideBarRef, isShowMenu}
}