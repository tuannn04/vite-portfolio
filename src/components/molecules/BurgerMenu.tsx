import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'
import BurgerMenuLine, { BurgerMenuLineProps } from '../atoms/BurgerMenuLine'

type BurgerMenuProps = ComponentPropsWithoutRef<"div"> & Omit<BurgerMenuLineProps, 'isTop'> & {
    hideOnDesktop?: boolean
}

export default forwardRef<HTMLDivElement, BurgerMenuProps>(
    ({ hideOnDesktop, ...props }: BurgerMenuProps, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <div className={`flex flex-col justify-center h-6 w-6 space-y-2 group top-5 right-5 ${hideOnDesktop ? 'end-mobile:hidden' : ''}`}
                ref={ref}>
                <BurgerMenuLine {...props} isTop={true} />
                <BurgerMenuLine {...props} isTop={false} />
            </div>
        )
    }
)
