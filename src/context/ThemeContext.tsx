import { Context, createContext, ReactNode, useState, useContext, useEffect, useCallback } from "react";
import { DEFAULT_MODE, MODE_DARK, MODE_LIGHT } from "../constants/Theme";

function getModeFromLocalStorage() {
    return localStorage.getItem('data-theme') || DEFAULT_MODE;
}

function setLocalStorageMode(mode: string) {
    localStorage.setItem('data-theme', mode);
}


interface IThemeContext {
    mode: string;
    setMode: Function;
    toggleMode: Function;
}

const defaultContextValue = { mode: getModeFromLocalStorage(), setMode: () => { }, toggleMode: () => { } };

const ThemeContext: Context<IThemeContext> = createContext<IThemeContext>(defaultContextValue)

interface IThemeContextProviderProps {
    children: ReactNode
}

export const ThemeContextProvider = ({ children }: IThemeContextProviderProps): ReactNode => {
    const [mode, setMode] = useState<string>(getModeFromLocalStorage());
    const toggleMode = useCallback(() => {
        setMode(mode => mode === MODE_DARK ? MODE_LIGHT : MODE_DARK);
    }, [setMode])

    useEffect(() => {
        if (!mode) {
            setMode(DEFAULT_MODE);
            setLocalStorageMode(DEFAULT_MODE);
            document.documentElement.setAttribute('data-theme', DEFAULT_MODE);
        } else {
            document.documentElement.setAttribute('data-theme', mode);
            setLocalStorageMode(mode);
        }
    }, [mode])

    return (
        <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = (): IThemeContext => useContext<IThemeContext>(ThemeContext);