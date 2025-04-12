import { useCallback, useEffect, useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";

export default (animationDuration?: number) => {
    const menuIconRef = useRef<HTMLDivElement | null>(null);
    const menuSideBarRef = useRef<HTMLDivElement | null>(null);
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
    const [isShowingHalf, setIsShowingHalf] = useState<boolean>(false);
    const animationTimeout = useRef<number | null>(null);

    const clearAnimationTimeout = useCallback(() => {
        animationTimeout.current && clearTimeout(animationTimeout.current)
    }, [animationTimeout])

    const showMenu = useCallback(() => {
        setIsShowMenu(isShow => !isShow);
        setIsShowingHalf(true);
        clearAnimationTimeout();
    }, [setIsShowMenu, setIsShowingHalf, animationTimeout]);

    const closeMenu = useCallback((event: Event) => {
        if (isShowMenu &&
            event.target instanceof Node &&
            !menuIconRef.current?.contains(event.target) &&
            !menuSideBarRef.current?.contains(event.target)
        ) {
            setIsShowMenu(false);
        }
    }, [isShowMenu, menuSideBarRef, setIsShowMenu]);

    useEffect(() => {
        if (!animationDuration) {
            return;
        }
        animationTimeout.current = setTimeout(() => setIsShowingHalf(false), Math.ceil(animationDuration / 2))
        return () => { clearAnimationTimeout() };
    }, [isShowMenu]);

    useEventListener('click', showMenu, menuIconRef);
    useEventListener('click', closeMenu);

    return { menuIconRef, menuSideBarRef, isShowMenu, isShowingHalf }
}