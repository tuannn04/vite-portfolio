import './App.css'
import ContextProvider from './context'
import AppRoute from "./route"
import Header from "./components/organisms/Header";

function App() {
    return (
        <ContextProvider>
            <AppRoute header={Header}/>
        </ContextProvider>
    )
}

export default App
