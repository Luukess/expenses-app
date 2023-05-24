import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import SummaryLayout from "../pages/summary-layout/SummaryLayout";

const DashboardRouter = () => {

    return (
        <>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="summary" element={<SummaryLayout />} />
                </Route>
            </Routes>
        </>
    );
};

export default DashboardRouter;