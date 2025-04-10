import {ForwardedRef, forwardRef} from 'react'

export default forwardRef<HTMLDivElement, null>((_, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={"sm:hidden"}>
            <div className={'flex flex-col justify-center h-6 w-6 space-y-2 group top-5 right-5 z-100'} ref={ref}>
                {
                    Array(3).fill(1).map((_, index) => {
                        return (
                            <span className={
                                `block h-0.5 w-6 bg-[#F0F0F0] transition-all duration-300 transform origin-top-left`
                            } key={index}></span>
                        )
                    })
                }
            </div>
        </div>
    )
})