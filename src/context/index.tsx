import { ReactNode } from "react";
import { SizeContextProvider } from "./SizeContext";
import { ThemeContextProvider } from "./ThemeContext";

const contexts = [
    SizeContextProvider,
    ThemeContextProvider
];

type AppContextProps = {
    children: ReactNode
}

export default ({ children }: AppContextProps) => {
    return contexts.reduce((memo, ContextProvider) => {
        return <ContextProvider>{memo}</ContextProvider>
    }, children)
}