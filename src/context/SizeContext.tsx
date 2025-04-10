import {Context, createContext, ReactNode, useCallback, useState, useContext} from "react";
import { useEventListener } from 'usehooks-ts'
import useThrottle from "../hooks/useThrottle";

export enum Devices {
    MOBILE = 'MOBILE',
    TABLET = 'TABLET',
    DESKTOP = 'DESKTOP'
}

enum MaxWindowSizes {
    MOBILE = 640,
    TABLET = 1024
}

interface ISizeContext {
    width: number;
    height: number;
    device: string;
}

const getSize = (): ISizeContext => {
    const {innerWidth: width, innerHeight: height} = globalThis;
    const device = width <= MaxWindowSizes.MOBILE ? Devices.MOBILE : width > MaxWindowSizes.TABLET ? Devices.DESKTOP : Devices.TABLET;
    return {
        width,
        height,
        device
    }
}

const SizeContext: Context<ISizeContext> = createContext<ISizeContext>(getSize())

const useWindowResizeListener = (): ISizeContext => {
    const [appSize, setAppSize] = useState<ISizeContext>(getSize());
    const onResize = useCallback(() => {
        setAppSize(getSize());
    }, [setAppSize])

    const onResizeThrottle = useThrottle(onResize, 100);

    useEventListener('resize', onResizeThrottle);

    return appSize;
}

interface ISizeContextProviderProps {
    children: ReactNode
}

export const SizeContextProvider = ({children}: ISizeContextProviderProps): ReactNode => {
    const windowSize = useWindowResizeListener();
    return (
        <SizeContext.Provider value={windowSize}>
            {children}
        </SizeContext.Provider>
    )
}

export const useSizeContext = (): ISizeContext => useContext<ISizeContext>(SizeContext);