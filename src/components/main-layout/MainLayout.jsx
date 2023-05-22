import React, { useContext, useEffect, useState } from "react";
import { Box, IconButton, List, ListItemButton } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import WalletIcon from '@mui/icons-material/Wallet';
import BookIcon from '@mui/icons-material/Book';
import PaidIcon from '@mui/icons-material/Paid';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
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