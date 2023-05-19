import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import LoginPage from "../pages/login-page/LoginPage";

const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/*" element={<AuthRouter />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouter;