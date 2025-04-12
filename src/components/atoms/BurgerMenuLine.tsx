export interface BurgerMenuLineProps {
    isShowMenu: boolean,
    isShowingHalf: boolean,
    animationDuration: number,
    isTop: boolean
}

export default ({ isShowMenu, isShowingHalf, animationDuration, isTop }: BurgerMenuLineProps) => {
    let positionClasses = '';
    const translateDirection = isTop ? '' : '-';
    if (isShowMenu) {
        positionClasses += `translate-y-[${translateDirection}4.5px]`;
        if (!isShowingHalf) {
            positionClasses += ` ${translateDirection}rotate-45`
        }
    } else if (isShowingHalf) {
        positionClasses += `translate-y-[${translateDirection}4.5px]`;
    }
    const className = `block h-[1px] w-burger-menu-width bg-main duration-${Math.ceil(animationDuration)} transform ${positionClasses}`;
    return <span className={className}></span>
}