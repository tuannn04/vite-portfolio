export interface BurgerMenuLineProps {
    isShowMenu: boolean,
    isShowingHalf: boolean,
    isTop: boolean
}

interface AnimationClassDictionary {
    [key: string]: string;
}

const animationClasses: AnimationClassDictionary = {
    halfTop: "translate-y-[4.5px]",
    fullTop: "translate-y-[4.5px] rotate-45",
    halfBottom: "translate-y-[-4.5px]",
    fullBottom: "translate-y-[-4.5px] -rotate-45"
}

export default ({ isShowMenu, isShowingHalf, isTop }: BurgerMenuLineProps) => {
    const animationState = isShowingHalf ? 'half' : 'full';
    const position = isTop ? 'Top' : 'Bottom';
    const animationKey = isShowMenu || isShowingHalf ? animationState + position : '';
    
    const className = `block h-[1px] w-burger-menu-width bg-grey dark:bg-light duration-300 transform ${animationClasses[animationKey]}`;
    return <span className={className}></span>
}