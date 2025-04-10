import {SizeContextProvider} from "./SizeContext";

const contexts = [
    SizeContextProvider
];

export default ({children}) => {
    return contexts.reduce((memo, ContextProvider) => {
        return <ContextProvider>{memo}</ContextProvider>
    }, children)
}