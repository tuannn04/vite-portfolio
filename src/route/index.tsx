import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home.tsx";
import React from "react";
const About = React.lazy(() => import("../pages/About.tsx"));

type AppRouterProps = {
    header: JSX.Element
}

export default ({header: HeaderComponent}: AppRouterProps) => {
    return (
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}