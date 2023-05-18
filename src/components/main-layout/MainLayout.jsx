import React, { useContext, useEffect, useState } from "react";
import { Box, IconButton, List, ListItemButton, useTheme } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import WalletIcon from '@mui/icons-material/Wallet';
import BookIcon from '@mui/icons-material/Book';
import PaidIcon from '@mui/icons-material/Paid';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Header from "../header/Header";
import { AuthContext } from "../../contexts/auth-context/authContext";
import { sxStylesMainLayout } from "./mainLoyout.style";

const MainLayout = ({ children }) => {

    const [hideNav, setHideNav] = useState(JSON.parse(localStorage.getItem('hiddenNav')) ? true : false);

    const authValueContext = useContext(AuthContext);

    const theme = useTheme();

    const handleHideNav = () => {
        setHideNav(!hideNav);
    };

    useEffect(() => {
        localStorage.setItem('hiddenNav', JSON.stringify(hideNav));
    }, [hideNav])

    return (
        <>
            <Header />
            <Box sx={sxStylesMainLayout.mainLayout}>
                {!authValueContext.isAuth &&
                    <Box sx={!hideNav ? sxStylesMainLayout.navSidebar : { ...sxStylesMainLayout.navSidebar, width: '60px' }} >
                        <Box sx={!hideNav ? sxStylesMainLayout.navButtonContainer : { ...sxStylesMainLayout.navButtonContainer, justifyContent: 'center' }}>
                            <IconButton onClick={() => handleHideNav()}>
                                <KeyboardDoubleArrowLeftIcon sx={hideNav ? { ...sxStylesMainLayout.navButton, transform: 'rotate(180deg)' } : sxStylesMainLayout.navButton} />
                            </IconButton>
                        </Box>
                        <List component="nav" aria-labelledby="nested-list-subheader">
                            <ListItemButton sx={sxStylesMainLayout.listItemButton}>
                                <DashboardIcon sx={sxStylesMainLayout.listItemIcon} />
                                <Box sx={!hideNav ? sxStylesMainLayout.navLink : { ...sxStylesMainLayout.navLink, opacity: 0 }} component='span'>
                                    {'Podsumowanie'}
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={sxStylesMainLayout.listItemButton}>
                                <ShowChartIcon sx={sxStylesMainLayout.listItemIcon} />
                                <Box sx={!hideNav ? sxStylesMainLayout.navLink : { ...sxStylesMainLayout.navLink, opacity: 0 }} component='span'>
                                    {'Finanse'}
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={sxStylesMainLayout.listItemButton}>
                                <WalletIcon sx={sxStylesMainLayout.listItemIcon} />
                                <Box sx={!hideNav ? sxStylesMainLayout.navLink : { ...sxStylesMainLayout.navLink, opacity: 0 }} component='span'>
                                    {'Portfele'}
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={sxStylesMainLayout.listItemButton}>
                                <BookIcon sx={sxStylesMainLayout.listItemIcon} />
                                <Box sx={!hideNav ? sxStylesMainLayout.navLink : { ...sxStylesMainLayout.navLink, opacity: 0 }} component='span'>
                                    {'Planer'}
                                </Box>
                            </ListItemButton>
                            <ListItemButton sx={sxStylesMainLayout.listItemButton}>
                                <PaidIcon sx={sxStylesMainLayout.listItemIcon} />
                                <Box sx={!hideNav ? sxStylesMainLayout.navLink : { ...sxStylesMainLayout.navLink, opacity: 0 }} component='span'>
                                    {'Opłaty'}
                                </Box>
                            </ListItemButton>
                        </List>
                    </Box>
                }
                <Box component='main' sx={sxStylesMainLayout.childrenContainer}>
                    {children}
                </Box>
            </Box>
        </>
    );
};

export default MainLayout;