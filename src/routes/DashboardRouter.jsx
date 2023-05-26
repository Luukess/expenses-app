import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import SummaryLayout from "../pages/summary-layout/SummaryLayout";
import FinancesLayout from "../pages/finances-layout/FinancesLayout";
import WalletsLayout from "../pages/wallets-layout/WalletsLayout";
import PlannerLayout from "../pages/planner-layout/PlannerLayout";
import FeesLayout from "../pages/fees-layout/FeesLayout";

const DashboardRouter = () => {

    return (
        <>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="summary" element={<SummaryLayout />} />
                    <Route path="finances" element={<FinancesLayout />} />
                    <Route path="wallets" element={<WalletsLayout />} />
                    <Route path="planner" element={<PlannerLayout />} />
                    <Route path="fess" element={<FeesLayout />} />
                </Route>
            </Routes>
        </>
    );
};

export default DashboardRouter;