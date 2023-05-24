import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import DashboardRouter from "./DashboardRouter";

const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route exact path="/*" element={<AuthRouter />} />
                <Route exact path='/app/*' element={<DashboardRouter />} />
            </Routes>
        </>
    );
};

export default AppRouter;