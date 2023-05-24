import React, { useContext } from "react";
import { Box, IconButton, List, ListItemButton, Paper, useTheme } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import WalletIcon from '@mui/icons-material/Wallet';
import BookIcon from '@mui/icons-material/Book';
import PaidIcon from '@mui/icons-material/Paid';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { sxStylesSidebar } from "./sidebar.style";
import CustomListItem from "./components/custom-list-item/CustomListItem";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../contexts/auth-context/authContext";

const Sidebar = (props) => {

    const { hideNav, setHideNav } = props;

    const { t } = useTranslation();

    const { logOut } = useContext(AuthContext)

    const handleHideNav = () => {
        setHideNav(!hideNav);
    };

    return (
        <>
            <Box component='div'>
                <Paper sx={!hideNav ? sxStylesSidebar.navSidebar : { ...sxStylesSidebar.navSidebar, width: '60px' }} elevation={2} >
                    <Box sx={!hideNav ? sxStylesSidebar.navButtonContainer : { ...sxStylesSidebar.navButtonContainer, justifyContent: 'center' }}>
                        <IconButton color="secondary" onClick={() => handleHideNav()} >
                            <KeyboardDoubleArrowLeftIcon sx={hideNav ? { ...sxStylesSidebar.navButton, transform: 'rotate(180deg)' } : sxStylesSidebar.navButton} />
                        </IconButton>
                    </Box>
                    <List component="nav" aria-labelledby="nested-list-subheader">
                        <CustomListItem hideNav={hideNav} linkName={`${t('summary-nav-item')}`}>
                            <DashboardIcon sx={sxStylesSidebar.listItemIcon} />
                        </CustomListItem>

                        <CustomListItem hideNav={hideNav} linkName={`${t('finances-nav-item')}`}>
                            <ShowChartIcon sx={sxStylesSidebar.listItemIcon} />
                        </CustomListItem>

                        <CustomListItem hideNav={hideNav} linkName={`${t('wallets-nav-item')}`}>
                            <WalletIcon sx={sxStylesSidebar.listItemIcon} />
                        </CustomListItem>

                        <CustomListItem hideNav={hideNav} linkName={`${t('planner-nav-item')}`}>
                            <BookIcon sx={sxStylesSidebar.listItemIcon} />
                        </CustomListItem>

                        <CustomListItem hideNav={hideNav} linkName={`${t('fees-nav-item')}`}>
                            <PaidIcon sx={sxStylesSidebar.listItemIcon} />
                        </CustomListItem>
                        <CustomListItem hideNav={hideNav} linkName={`${t('log-out-button')}`} onClickFunction={logOut}>
                            <PowerSettingsNewIcon sx={sxStylesSidebar.listItemIcon} />
                        </CustomListItem>
                    </List>
                </Paper>
            </Box>
        </>
    );
};

export default Sidebar;
