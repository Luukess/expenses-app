import React from "react";
import { Box, IconButton, List, ListItemButton } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import WalletIcon from '@mui/icons-material/Wallet';
import BookIcon from '@mui/icons-material/Book';
import PaidIcon from '@mui/icons-material/Paid';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { sxStylesSidebar } from "./sidebar.style";

const Sidebar = (props) => {

    const { hideNav, setHideNav } = props;

    const handleHideNav = () => {
        setHideNav(!hideNav);
    };

    return (
        <>
            <Box sx={!hideNav ? sxStylesSidebar.navSidebar : { ...sxStylesSidebar.navSidebar, width: '60px' }} >
                <Box sx={!hideNav ? sxStylesSidebar.navButtonContainer : { ...sxStylesSidebar.navButtonContainer, justifyContent: 'center' }}>
                    <IconButton onClick={() => handleHideNav()}>
                        <KeyboardDoubleArrowLeftIcon sx={hideNav ? { ...sxStylesSidebar.navButton, transform: 'rotate(180deg)' } : sxStylesSidebar.navButton} />
                    </IconButton>
                </Box>
                <List component="nav" aria-labelledby="nested-list-subheader">
                    <ListItemButton sx={sxStylesSidebar.listItemButton}>
                        <DashboardIcon sx={sxStylesSidebar.listItemIcon} />
                        <Box sx={!hideNav ? sxStylesSidebar.navLink : { ...sxStylesSidebar.navLink, opacity: 0 }} component='span'>
                            {'Podsumowanie'}
                        </Box>
                    </ListItemButton>
                    <ListItemButton sx={sxStylesSidebar.listItemButton}>
                        <ShowChartIcon sx={sxStylesSidebar.listItemIcon} />
                        <Box sx={!hideNav ? sxStylesSidebar.navLink : { ...sxStylesSidebar.navLink, opacity: 0 }} component='span'>
                            {'Finanse'}
                        </Box>
                    </ListItemButton>
                    <ListItemButton sx={sxStylesSidebar.listItemButton}>
                        <WalletIcon sx={sxStylesSidebar.listItemIcon} />
                        <Box sx={!hideNav ? sxStylesSidebar.navLink : { ...sxStylesSidebar.navLink, opacity: 0 }} component='span'>
                            {'Portfele'}
                        </Box>
                    </ListItemButton>
                    <ListItemButton sx={sxStylesSidebar.listItemButton}>
                        <BookIcon sx={sxStylesSidebar.listItemIcon} />
                        <Box sx={!hideNav ? sxStylesSidebar.navLink : { ...sxStylesSidebar.navLink, opacity: 0 }} component='span'>
                            {'Planer'}
                        </Box>
                    </ListItemButton>
                    <ListItemButton sx={sxStylesSidebar.listItemButton}>
                        <PaidIcon sx={sxStylesSidebar.listItemIcon} />
                        <Box sx={!hideNav ? sxStylesSidebar.navLink : { ...sxStylesSidebar.navLink, opacity: 0 }} component='span'>
                            {'Opłaty'}
                        </Box>
                    </ListItemButton>
                </List>
            </Box>
        </>
    );
};

export default Sidebar;
