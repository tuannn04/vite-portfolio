import './App.css'
import ContextProvider from './context'
import AppRoute from "./route"
import Header from "./components/Header.tsx";

function App() {
    return (
        <ContextProvider>
            <AppRoute header={Header}/>
        </ContextProvider>
    )
}

export default App
