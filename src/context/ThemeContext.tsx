import { Context, createContext, ReactNode, useState, useContext, useEffect, useCallback } from "react";
import { DEFAULT_MODE, MODE_DARK, MODE_LIGHT } from "../constants/Theme";


interface IThemeContext {
    mode: string;
    setMode: Function;
    toggleMode: Function;
}

const defaultContextValue = { mode: DEFAULT_MODE, setMode: () => { }, toggleMode: () => { } };

const ThemeContext: Context<IThemeContext> = createContext<IThemeContext>(defaultContextValue)

interface IThemeContextProviderProps {
    children: ReactNode
}

export const ThemeContextProvider = ({ children }: IThemeContextProviderProps): ReactNode => {
    const [mode, setMode] = useState<string>(DEFAULT_MODE);
    const toggleMode = useCallback(() => {
        setMode(mode => mode === MODE_DARK ? MODE_LIGHT : MODE_DARK);
    }, [setMode])

    useEffect(() => {
        if (!mode) {
            setMode(DEFAULT_MODE);
            document.documentElement.setAttribute('data-theme', DEFAULT_MODE);
        } else {
            document.documentElement.setAttribute('data-theme', mode);
        }
    }, [mode])

    return (
        <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = (): IThemeContext => useContext<IThemeContext>(ThemeContext);