import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../pages/auth-layout/AuthLayout";
import LoginForm from "../components/forms/login-form/LogInForm";
import RegisterForm from "../components/forms/register-form/RegisterForm";

const AuthRouter = () => {

    return (
        <>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path='login' element={<LoginForm />} />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="register" element={<RegisterForm />} />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path='*' element={<LoginForm />} />
                </Route>
            </Routes>
        </>
    );
};

export default AuthRouter;