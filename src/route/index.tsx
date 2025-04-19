import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import React from "react";
const AboutPage = React.lazy(() => import("../pages/About.tsx"));

type AppRouterProps = {
    header: () => React.ReactNode
}

export default ({header: HeaderComponent}: AppRouterProps) => {
    return (
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}