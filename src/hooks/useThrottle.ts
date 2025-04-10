import {useRef, useCallback} from "react";

const getCurrentTime = (): number => {
    return new Date().getTime();
}

function useThrottle<T extends Function> (callBack: T, interval: number = 0): Function {
    const lastCallTime = useRef<number>(getCurrentTime());
    const waitFunction = useRef<number>(0);

    return useCallback((...args: any[]) => {
        const currentTime = getCurrentTime();
        const timeOut = interval - (currentTime - lastCallTime.current);
        if (waitFunction.current) {
            clearTimeout(waitFunction.current);
        }
        if (timeOut < 0) {
            callBack(...args);
            lastCallTime.current = currentTime;
        } else {
            waitFunction.current = window.setTimeout(() => {
                callBack(...args);
                lastCallTime.current = getCurrentTime();
            }, timeOut);
        }
    }, [callBack, interval]);
}

export default useThrottle;