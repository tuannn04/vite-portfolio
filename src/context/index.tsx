import { ReactNode } from "react";
import {SizeContextProvider} from "./SizeContext";

const contexts = [
    SizeContextProvider
];

type AppContextProps = {
    children: ReactNode
}

export default ({children}: AppContextProps) => {
    return contexts.reduce((memo, ContextProvider) => {
        return <ContextProvider>{memo}</ContextProvider>
    }, children)
}