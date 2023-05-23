import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../header/Header";
import { AuthContext } from "../../contexts/auth-context/authContext";
import { sxStylesMainLayout } from "./mainLayout.style";
import Sidebar from "../sidebar/Sidebar";

const MainLayout = ({ children }) => {

    const [hideNav, setHideNav] = useState(JSON.parse(localStorage.getItem('hiddenNav')) ? true : false);

    const authValueContext = useContext(AuthContext);

    useEffect(() => {
        localStorage.setItem('hiddenNav', JSON.stringify(hideNav));
    }, [hideNav])

    return (
        <>
            <Header />
            <Box sx={sxStylesMainLayout.mainLayout}>
                {authValueContext.isAuth &&
                    <Sidebar hideNav={hideNav} setHideNav={setHideNav} />
                }
                <Box component='main' sx={sxStylesMainLayout.childrenContainer}>
                    {children}
                </Box>
            </Box>
        </>
    );
};

export default MainLayout;