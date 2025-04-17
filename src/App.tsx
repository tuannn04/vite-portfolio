import './App.css'
import ContextProvider from './context'
import AppRoute from "./route"
import Header from "./components/organisms/Header";
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
    useSmoothScroll();
    return (
        <ContextProvider>
            <AppRoute header={Header} />
        </ContextProvider>
    )
}

export default App
